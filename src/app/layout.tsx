import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="scrollbar scrollbar-thumb-secondary-foreground scrollbar-track-background">
      <body className={`min-h-screen w-screen overflow-x-hidden ${inter.className}`}>{children}</body>
    </html>
  );
}
