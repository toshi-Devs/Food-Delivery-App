import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Notifications from "@/components/Notifications";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PIZZINO Restaurant",
  description: "Order food from your favorite restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <AuthProvider>
            <Notifications />
            <Navbar />
            
            {children}

            <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
