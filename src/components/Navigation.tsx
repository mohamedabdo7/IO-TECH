"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { routes } from "@/config/routes";

export default function Navigation() {
  const t = useTranslations("Navigation");
  const { isAuthenticated, logout, checkAuth } = useAuthStore();
  const params = useParams();
  const router = useRouter();
  const locale = params.locale as string;

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const handleLogout = () => {
    logout();
    router.push(`/${locale}`);
  };

  return (
    <nav
      style={{
        padding: "1rem",
        borderBottom: "1px solid #ccc",
        marginBottom: "2rem",
      }}
    >
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link href={routes.home(locale)}>{t("home")}</Link>

        {!isAuthenticated ? (
          <Link href={routes.login(locale)}>{t("login")}</Link>
        ) : (
          <>
            <Link href={routes.dashboard(locale)}>{t("dashboard")}</Link>
            <button onClick={handleLogout} style={{ marginLeft: "auto" }}>
              {t("logout")}
            </button>
          </>
        )}

        <div style={{ marginLeft: "auto" }}>
          <Link href="/en" style={{ margin: "0 5px" }}>
            EN
          </Link>
          <Link href="/ar" style={{ margin: "0 5px" }}>
            AR
          </Link>
        </div>
      </div>
    </nav>
  );
}
