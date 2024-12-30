import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "oneupcreatives",
  description: "oneupcreatives portfolio website for Video Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        
        {children}
      </body>
    </html>
  );
}
