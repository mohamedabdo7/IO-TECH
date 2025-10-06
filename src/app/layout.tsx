import GlobalProgressBar from "@/components/GlobalProgressBar";
import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans, Noto_Sans_Arabic } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-sans-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IO-TECH",
  description: "Description",
  icons: {
    icon: "/fav.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${workSans.variable} ${notoSansArabic.variable}`}>
      <body className={workSans.className} suppressHydrationWarning={true}>
        <GlobalProgressBar />
        {children}
      </body>
    </html>
  );
}
