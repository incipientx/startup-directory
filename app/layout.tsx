import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup Directory",
  description: "Public directory where you can find startups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
