import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tarot & Astrology",
  description: "Discover your cosmic destiny through tarot and astrology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

