import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/Providers";
import Header from "../components/Header";
import "react-icons/fc";
import "react-icons/bi";
import "react-icons/fa";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { baseURL } from "../../lib/constants";
import { I18nProviderClient } from "@/locales/client";
import { getCurrentLocale } from "@/locales/server";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(baseURL),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/icon.ico",
    },
  },
  title: {
    default: "World Countriess",
    template: "%s | World Countriess",
  },
  keywords: [
    "countries",
    "world",
    "world countriess",
    "World-Countriess",
    "World Countriess",
    "countries information",
    "country flags",
    "yusifaliyevpro",
    "YusifAliyevPro",
    "yusifaliyevpro.com",
    "filmisbest.com",
    "filmisbest",
    "yusifaliyev",
    "yusif",
    "aliyev",
  ],
  creator: "YusifAliyevPro",
  url: `/`,
  publisher: "YusifAliyevPro",
  applicationName: "World Countriess",
  generator: "World Countriess",
  authors: [{ name: "YusifAliyevPro", url: "https://yusifaliyevpro.com" }],
  siteName: "World Countriess",
  openGraph: {
    type: "website",
    title: "World Countriess",
    url: `/`,
    siteName: "World Countriess",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  const locale = getCurrentLocale();
  return (
    <html
      lang={locale}
      className="flex min-h-screen flex-col scroll-smooth bg-white text-black light"
    >
      <body className={inter.className}>
        <Providers>
          <I18nProviderClient locale={locale}>
            <Header locale={locale} />
          </I18nProviderClient>
          {children}
          <Footer />
          <Toaster
            toastOptions={{
              className: "",
              style: {
                border: "1px solid #007bff",
                color: "#000",
              },
            }}
            position="bottom-right"
          />
        </Providers>
      </body>
    </html>
  );
}
