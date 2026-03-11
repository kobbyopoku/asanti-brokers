import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asanti Brokers Limited | Insurance Made Simple",
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
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
