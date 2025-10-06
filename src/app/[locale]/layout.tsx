import { NextIntlClientProvider } from "next-intl";
import QueryProvider from "@/providers/QueryProvider";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import DirectionProvider from "@/components/DirectionProvider";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <DirectionProvider>
        <QueryProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </QueryProvider>
      </DirectionProvider>
    </NextIntlClientProvider>
  );
}

// import { NextIntlClientProvider } from "next-intl";
// import QueryProvider from "@/providers/QueryProvider";
// import Navbar from "@/components/layouts/Navbar";
// import Footer from "@/components/layouts/Footer";
// import GlobalProgressBar from "@/components/GlobalProgressBar";
// import { Work_Sans } from "next/font/google";
// import type { Metadata } from "next";
// import "../globals.css";

// const workSans = Work_Sans({
//   subsets: ["latin"],
//   variable: "--font-work-sans",
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "Family Medical Guide",
//   description: "Your comprehensive family medicine resource",
//   icons: {
//     icon: "/fav.svg",
//   },
// };

// export default async function LocaleLayout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: Promise<{ locale: string }>;
// }) {
//   const { locale } = await params;
//   const messages = (await import(`../../messages/${locale}.json`)).default;
//   const isRTL = locale === "ar";

//   return (
//     <html
//       lang={locale}
//       dir={isRTL ? "rtl" : "ltr"}
//       className={workSans.variable}
//     >
//       <body className={workSans.className} suppressHydrationWarning={true}>
//         <GlobalProgressBar />
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           <QueryProvider>
//             <div className="min-h-screen flex flex-col">
//               <Navbar />
//               <main className="flex-1">{children}</main>
//               <Footer />
//             </div>
//           </QueryProvider>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }

// import { NextIntlClientProvider } from "next-intl";
// import QueryProvider from "@/providers/QueryProvider";
// import Navbar from "@/components/layouts/Navbar";
// import Footer from "@/components/layouts/Footer";

// export default async function LocaleLayout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: Promise<{ locale: string }>;
// }) {
//   const { locale } = await params;
//   const messages = (await import(`../../messages/${locale}.json`)).default;

//   return (
//     <NextIntlClientProvider locale={locale} messages={messages}>
//       <QueryProvider>
//         <div className="min-h-screen flex flex-col">
//           {/* <ProgressBar /> */}
//           <Navbar />
//           {/* <main className="flex-1 pt-16 lg:pt-20">{children}</main> */}
//           <main className="flex-1">{children}</main>
//           <Footer />
//         </div>
//       </QueryProvider>
//     </NextIntlClientProvider>
//   );
// }
