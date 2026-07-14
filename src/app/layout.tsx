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
  title: "Teutemacher: Elektronik & Fahrzeugtechnik Warendorf",
  description: "Elektronik, Elektroauto-Service & Bremsen in Warendorf. Fachgerechte Reparatur & Wartung. Jetzt Termin bei Teutemacher Glas und Spiegel vereinbaren!",
  openGraph: {
    title: "Teutemacher: Elektronik & Fahrzeugtechnik Warendorf",
    description: "Elektronik, Elektroauto-Service & Bremsen in Warendorf. Fachgerechte Reparatur & Wartung. Jetzt Termin bei Teutemacher Glas und Spiegel vereinbaren!",
    type: "website",
    locale: "de_DE",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
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
