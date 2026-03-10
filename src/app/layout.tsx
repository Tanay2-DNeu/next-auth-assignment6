// "use client";
import { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/authprovider";

export const metadata: Metadata = {
  title: "Practice-NextJS",
  description: "Let's have some fun with nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
