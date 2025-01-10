import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import SocketClient from "./components/SocketClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev Social Media App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {modal}
          <div className="relative">
            <div className=" sticky top-0 w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 z-30">
              <Navbar />
            </div>
            <div className=" w-full bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
