import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sparoo | Zero Friction Payments",
  description: "Instant offline payments for India's informal economy. No QR, No typing, Just automatic payments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased overflow-x-hidden selection:bg-neon/30 selection:text-neon">
        <div className="noise-overlay" />
        <div id="cursor-dot" />
        <div id="cursor-ring" />
        {children}
      </body>
    </html>
  );
}
