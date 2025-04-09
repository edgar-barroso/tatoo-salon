import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Header } from "./components/Header";

const angelRhapsody = localFont({
  src: "./../../public/fonts/angel-rhapsody.woff2",
  variable: "--font-angel",
  display: "swap",
});

const satoshi = localFont({
  src: "./../../public/fonts/satoshi-regular.woff2",
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${angelRhapsody.variable} ${satoshi.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
