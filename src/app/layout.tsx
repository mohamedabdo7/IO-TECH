import GlobalProgressBar from "@/components/GlobalProgressBar";
import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Family Medical Guide",
  description: "Your comprehensive family medicine resource",
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
    <html className={workSans.variable}>
      <body className={workSans.className} suppressHydrationWarning={true}>
        <GlobalProgressBar />
        {children}
      </body>
    </html>
  );
}
