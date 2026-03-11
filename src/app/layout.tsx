import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Asanti Brokers Limited | Insurance Made Simple",
    template: "%s | Asanti Brokers",
  },
  description:
    "Asanti Brokers Limited is a licensed insurance broker in Ghana. Get motor insurance, property insurance, and more — fast, digital, and hassle-free.",
  keywords: [
    "insurance broker Ghana",
    "motor insurance Ghana",
    "Asanti Brokers",
    "car insurance Accra",
    "NIC registered broker",
  ],
  icons: {
    icon: "/asanti-favicon.ico",
    apple: "/asanti-apple-touch-icon.png",
  },
  manifest: "/asanti-site.webmanifest",
  openGraph: {
    title: "Asanti Brokers Limited | Insurance Made Simple",
    description:
      "Licensed insurance broker in Ghana. Get covered in minutes.",
    url: "https://www.asanti.io",
    siteName: "Asanti Brokers",
    images: [{ url: "/asanti-requirements-thumbnail.jpg" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
