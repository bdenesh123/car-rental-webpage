import type { Metadata } from "next";

import "./globals.css";
import { Footer, NavBar } from "@/components";

export const metadata: Metadata = {
  title: "GoDrive",
  description: "Best Car Rental Service in Town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavBar />
      <body className="relative">{children}</body>
      <Footer />
    </html>
  );
}
