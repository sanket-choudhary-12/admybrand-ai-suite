"use client"; // <--- Add this line to make it a client component

import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter as FontSans } from "next/font/google";

// AOS Imports
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can choose different themes here, e.g., 'aos/dist/aos.css'
import { useEffect } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 800, // values from 0 to 3000, with step 50ms
      once: true,    // whether animation should happen only once - while scrolling down
    });
    // You might want to refresh AOS if your content changes dynamically
    // AOS.refresh();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}