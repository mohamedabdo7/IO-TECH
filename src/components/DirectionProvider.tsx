"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function DirectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const locale = params.locale as string;
  const isRTL = locale === 'ar';

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [locale, isRTL]);

  return <>{children}</>;
}