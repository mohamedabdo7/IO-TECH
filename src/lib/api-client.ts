import Cookies from "js-cookie";

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

class ApiClient {
  private baseURL: string;

  constructor() {
    this.baseURL =
      process.env.NEXT_PUBLIC_API_BASE_URL || "https://backend.test.com/api";
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = Cookies.get("auth-token");

    const config: RequestInit = {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    // Don't set Content-Type for FormData, let browser set it
    if (!(options.body instanceof FormData)) {
      config.headers = {
        "Content-Type": "application/json",
        ...config.headers,
      };
    }

    const fullUrl = `${this.baseURL}${endpoint}`;

    const response = await fetch(fullUrl, config);

    if (!response.ok) {
      console.error(
        `API Error: ${response.status} ${response.statusText} for ${fullUrl}`
      );
      throw new Error(
        `HTTP error! status: ${response.status} - ${response.statusText} (${fullUrl})`
      );
    }

    const jsonResponse: ApiResponse<T> = await response.json();
    return jsonResponse.data;
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: "GET" });
  }

  async post<T>(endpoint: string, data?: any): Promise<T> {
    const body = data instanceof FormData ? data : JSON.stringify(data);

    return this.request<T>(endpoint, {
      method: "POST",
      body,
    });
  }

  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: "DELETE" });
  }

  // For cases where you need the full response (status, message, etc.)
  async getRaw<T>(endpoint: string): Promise<ApiResponse<T>> {
    const token = Cookies.get("auth-token");

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      method: "GET",
    };

    const response = await fetch(`${this.baseURL}${endpoint}`, config);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}

export const apiClient = new ApiClient();
