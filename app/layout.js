import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/providers";
import Header from "./components/header";
import "react-icons/fc";
import "react-icons/bi";
import "react-icons/fa";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import { baseURL } from "./lib/bases";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
  url: `${baseURL}/`,
  publisher: "YusifAliyevPro",
  applicationName: "World Countriess",
  generator: "World Countriess",
  authors: [{ name: "YusifAliyevPro", url: "https://yusifaliyevpro.com" }],
  siteName: "World Countriess",
  openGraph: {
    type: "website",
    title: "World Countriess",
    url: `${baseURL}/`,
    siteName: "World Countriess",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white text-black scroll-smooth light">
      <head>
        <meta
          name="google-site-verification"
          content="HNjp-JRQToNMjuOEzQ7iFVr2h4sZi4q26x4Tli62gow"
        />
      </head>
      <body className={inter.className}>
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
        <Header />
        <Providers>
          <main className=" flex min-h-screen flex-col ">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
