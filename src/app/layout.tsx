import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--bebas-font",
});

const neueRegular = localFont({
  src: [{ path: "../../public/fonts/TT Firs Neue Trial Light.ttf", weight: "100"}, { path: "../../public/fonts/TT Firs Neue Trial Medium.ttf", weight: "400"}, { path: "../../public/fonts/TT Firs Neue Trial Bold.ttf", weight: "600"}],
  variable: "--neue-font",
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
    <html
      lang="en"
      className="scrollbar scrollbar-thumb-secondary-foreground scrollbar-track-background"
    >
      <body className={`min-h-screen w-screen overflow-x-hidden ${neueRegular.variable}`}>
        {children}
      </body>
    </html>
  );
}
