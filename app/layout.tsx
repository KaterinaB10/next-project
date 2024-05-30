import type { Metadata } from "next";
import { inter } from "./fonts/inter";
import "./globals.css";
import { NavBar } from "./components/header/NavBar";

export const metadata: Metadata = {
  title: "Coffee House",
  description: "Online order coffee house",
  keywords: "eshopping, order coffee, coffee house, take away coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
