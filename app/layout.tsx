import type { Metadata } from "next";
import "./globals.css";
import { Taviraj } from "next/font/google";

const tav = Taviraj({ subsets: ["latin"], weight: ["200"] });

export const metadata: Metadata = {
  title: "Platamigos",
  description: "Your trusty, free peer-to-peer lending site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/assets/1.png"
        type="image/<generated>"
        className=" rounded-full"
      />
      <body className={tav.className}>{children}</body>
    </html>
  );
}
