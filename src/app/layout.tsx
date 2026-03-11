import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Using Space Mono as a substitute for SF Mono / Timer font
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-timer",
  subsets: ["latin"],
});

const tanker = localFont({
  src: "./fonts/Tanker-Regular.otf",
  variable: "--font-tanker",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nudge | Live More, Scroll Less",
  description: "Join the waitlist for Nudge — the app designed to break you out of the loop and nudge you back to reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceMono.variable} ${tanker.variable}`}>
        {children}
      </body>
    </html>
  );
}
