import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Inter } from "next/font/google";
import "./globals.css";
import { therapist } from "@/data/therapist";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: therapist.meta.siteTitle,
  description: therapist.meta.siteDescription,
  keywords: [
    "therapist Santa Monica",
    "psychologist Santa Monica CA",
    "anxiety therapy Santa Monica",
    "trauma therapist California",
    "EMDR therapy Santa Monica",
    "burnout therapist California",
    "Dr. Maya Reynolds PsyD",
    "online therapy California",
    "individual adult therapy",
    "cognitive behavioral therapy Santa Monica",
  ],
  authors: [{ name: therapist.name }],
  openGraph: {
    title: therapist.meta.siteTitle,
    description: therapist.meta.siteDescription,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${greatVibes.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "var(--font-sans)" }}>{children}</body>
    </html>
  );
}
