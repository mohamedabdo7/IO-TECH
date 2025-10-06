import { create } from "zustand";
import Cookies from "js-cookie";
import { apiClient } from "@/lib/api-client";
import { endpoints } from "@/config/endpoints";
import { User } from "@/types/auth";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: async (email: string, password: string) => {
    try {
      set({ isLoading: true });

      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await apiClient.post<User>(
        endpoints.auth.login,
        formData
      );

      if (response) {
        // Set cookie with proper production settings
        Cookies.set("auth-token", response.token, {
          expires: 30,
          path: "/",
          sameSite: "lax",
          secure: process.env.NODE_ENV === "production",
        });

        localStorage.setItem("user-data", JSON.stringify(response));

        set({
          user: response,
          isAuthenticated: true,
          isLoading: false,
        });
        return true;
      }

      set({ isLoading: false });
      return false;
    } catch (error) {
      set({ isLoading: false });
      console.error("Login error:", error);
      return false;
    }
  },

  checkAuth: () => {
    try {
      set({ isLoading: true });
      const token = Cookies.get("auth-token");
      const userData = localStorage.getItem("user-data");

      if (!token) {
        set({ user: null, isAuthenticated: false, isLoading: false });
        return;
      }

      // If we have both token and user data, restore the session
      if (userData) {
        const user = JSON.parse(userData);
        set({
          user,
          isAuthenticated: true,
          isLoading: false,
        });
      } else {
        // Token exists but no user data - still authenticated but no user info
        set({
          user: null,
          isAuthenticated: true,
          isLoading: false,
        });
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      Cookies.remove("auth-token");
      localStorage.removeItem("user-data");
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },

  logout: () => {
    Cookies.remove("auth-token");
    localStorage.removeItem("user-data");
    set({ user: null, isAuthenticated: false, isLoading: false });
  },
}));
