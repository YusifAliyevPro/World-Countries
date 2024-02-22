import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/providers";
import Header from "./components/header";
import "react-icons/fc";
import "react-icons/bi";
import "react-icons/fa";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";

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
  title: {
    default: "World Countries",
    template: "%s | World Countries",
  },
  keywords: [
    "countries",
    "world",
    "world countries",
    "countries information",
    "country flags",
    "World Countries.com",
    "yusifaliyevpro",
    "yusifaliyevpro.com",
    "yusifaliyev",
    "yusif",
    "aliyev",
  ],
  creator: "YusifAliyevPro",
  url: "https://countries-of-world.vercel.app/",
  publisher: "YusifAliyevPro",
  applicationName: "World Countries",
  generator: "World Countries",
  authors: [{ name: "YusifAliyevPro", url: "https://yusifaliyevpro.com" }],
  siteName: "World Countries",
  openGraph: {
    type: "website",
    url: "https://countries-of-world.vercel.app/",
    siteName: "World Countries",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white text-black scroll-smooth light">
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
          {" "}
          <main className=" flex min-h-screen flex-col ">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
