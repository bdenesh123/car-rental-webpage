import type { Metadata } from "next";

import "./globals.css";
import { Footer, NavBar } from "@/components";

export const metadata: Metadata = {
  title: "SewaCar",
  description: "Best Car Rental Service in Town",
  icons: {
    icon: "/logo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
