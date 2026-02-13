import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans"});
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-script" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diego & Estefanny | Nuestra boda",
  description: "Invitación a nuestra boda",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} ${greatVibes.variable}`}>
      <body className="font-sans"> 
        {children}
      </body>
    </html>
  );
}
//className={`${geistSans.variable} ${geistMono.variable} antialiased`}