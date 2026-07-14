import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { CookieBanner } from "@/components/CookieBanner";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elektronik & Bremsen Warendorf | Teutemacher",
  description: "Professioneller Service für Fahrzeugelektronik, E-Autos und Bremsen in Warendorf. Erfahren, präzise, zuverlässig. Jetzt Termin vereinbaren!",
  openGraph: {
    title: "Elektronik & Bremsen Warendorf | Teutemacher",
    description: "Professioneller Service für Fahrzeugelektronik, E-Autos und Bremsen in Warendorf. Erfahren, präzise, zuverlässig. Jetzt Termin vereinbaren!",
    type: "website",
    locale: "de_DE",
  },
  icons: {
    icon: [{ url: "https://r2.kuwezu.de/konzepte/autofit/autofit_logo.webp" }],
    apple: [{ url: "https://r2.kuwezu.de/konzepte/autofit/autofit_logo.webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${geistSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-brand-bg text-brand-text antialiased">
        <a href="#main-content" className="skip-link">
          Zum Hauptinhalt springen
        </a>
        {children}
        <AccessibilityWidget />
        <CookieBanner />
        <WhatsAppButton />
      </body>
    </html>
  );
}
