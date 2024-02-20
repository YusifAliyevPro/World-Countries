import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/providers";
import Header from "./components/header";
import "react-icons/fc";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dünya Ölkələri",
  description:
    "This is a website which you can get information about countries all around world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az" className="light text-black  bg-white">
      <body className={inter.className}>
        <Header />
        <Providers>
          <main className=" min-h-screen flex flex-col ">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
