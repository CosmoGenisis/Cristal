
import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "../components/Navbar";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Cristal Clear Water - Premium Packaged Drinking Water",
  description: "Cristal Clear Water is a leading manufacturer of high-quality packaged drinking water bottles. Experience purity, safety, and taste with our mineral water.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased">
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}