import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accessible",
  description:
    "Discover the Web Accessibility Analyzer, a powerful tool built with Next.js, Tailwind CSS, and Axe Core. This analyzer evaluates website accessibility by generating a comprehensive score and identifying issues classified as minor, moderate, or critical. Simply enter a URL to get actionable insights that help make your site more user-friendly and inclusive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme="dark"
      themes={["light", "dark", "system"]}
      enableSystem
      disableTransitionOnChange
    >
      <html lang="en" suppressHydrationWarning>
        <body
          // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          className={`${inter.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
