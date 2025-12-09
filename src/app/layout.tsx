import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ScootParts Boutique Premium",
  description: "L'expertise de la mobilité électrique à votre service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main style={{ minHeight: 'calc(100vh - 300px)' }}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
