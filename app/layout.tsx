import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppLocaleProvider } from "@/i18n/LocalProvider";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wataru Okada - Full-Stack Engineer",
  description:
    "Portfolio of Wataru Okada, a passionate full-stack engineer specializing in Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Full-Stack Engineer",
    "Web Developer",
    "Front Web Development",
    "Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Wataru Okada" }],
  creator: "Wataru Okada",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wataru-okada-portfolio.vercel.app/",
    title: "Wataru Okada - Full-Stack Engineer",
    description: "Portfolio of Wataru Okada, a passionate full-stack engineer",
    siteName: "Wataru Okada Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wataru Okada - Full-Stack Engineer",
    description: "Portfolio of Wataru Okada, a passionate full-stack engineer",
  },
  // generator: "v0.app",
  // icons: {
  //   icon: [
  //     {
  //       url: "/icon-light-32x32.png",
  //       media: "(prefers-color-scheme: light)",
  //     },
  //     {
  //       url: "/icon-dark-32x32.png",
  //       media: "(prefers-color-scheme: dark)",
  //     },
  //     {
  //       url: "/icon.svg",
  //       type: "image/svg+xml",
  //     },
  //   ],
  //   apple: "/apple-icon.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        <AppLocaleProvider>{children}</AppLocaleProvider>
      </body>
    </html>
  );
}
