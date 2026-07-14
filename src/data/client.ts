/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-07-14T13:49:43.633Z
 * Kundennummer: 221
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "Teutemacher Glas und Spiegel",
  branche: "Sonstige",
  ort: "Warendorf",
  slogan: "Fachbetrieb",
  adresse: "Südstraße 1-5, 48231 Warendorf",
  telefon: "02581 933330",
  email: "",
  website: "https://teutemacher.de",
  logo: "https://r2.kuwezu.de/konzepte/autofit/autofit_logo.webp",
  standort_bild: "https://r2.kuwezu.de/kunden/221/standort.webp",

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#e30613",
    secondary: "#000000",
    accent: "#b1b2b3",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/221/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihr Fachbetrieb für Elektronik und Fahrzeugtechnik",
    ueberschriftHighlight: "Fachbetrieb",
    untertext: "Von Elektroauto-Service bis Bremsenreparatur – Teutemacher ist Ihr kompetenter Partner in Warendorf für moderne Fahrzeugtechnik und Elektronik.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ueberschrift: "Teutemacher – Ihr Partner in Warendorf",
    text1: "Als erfahrener Fachbetrieb in Warendorf vereinen wir bei Teutemacher Glas und Spiegel Expertise in Elektronik und Fahrzeugtechnik. Unser Leistungsspektrum reicht von der Elektronikdiagnose über spezialisierte Elektroauto-Wartung bis hin zu professionellen Bremsenreparaturen. Wir arbeiten mit modernster Technik und setzen auf kontinuierliche Weiterbildung.",
    text2: "Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle. Wir nehmen uns Zeit für persönliche Beratung und finden für jedes Problem die passende Lösung. Auf unsere Arbeit können Sie sich verlassen.",
    tags: ["Fachkompetenz", "Moderne Technik", "Persönliche Beratung", "Zuverlässig"],
    stats: [
      { value: "10+",    label: "Jahre Erfahrung"   },
      { value: "1.000+", label: "Zufriedene Kunden" },
      { value: "5",      label: "Fachkräfte"        },
      { value: "5.000+", label: "Aufträge/Jahr"     },
    ],
  },

  // ── Leistungen ─────────────────────────────────────────────────────────────
  leistungen: [
    {
      slug: "elektronik",
      title: "Elektronik",
      bild: "https://r2.kuwezu.de/bibliothek/Elektronik/1777878497653-leistung_multimeter.webp",
      description: "Professionelle Elektronik-Diagnose und -Reparatur für alle Systeme. Wir analysieren Fehler präzise und sorgen für zuverlässige Lösungen mit modernster Messtechnik.",
      highlights: ["Fehlerdiagnose mit Profi-Equipment", "Reparatur aller elektronischen Systeme", "Schnelle Fehleranalyse"],
    },
    {
      slug: "elektroautos",
      title: "Elektroautos",
      bild: "https://r2.kuwezu.de/bibliothek/Elektroautos/1777878408924-leistung_elektroautos.webp",
      description: "Spezialisierter Service für Elektrofahrzeuge – von Wartung bis Hochvolt-Arbeiten. Wir kennen die besonderen Anforderungen der E-Mobilität und arbeiten mit zertifizierten Verfahren.",
      highlights: ["Hochvolt-qualifizierte Techniker", "Batteriesystem-Checks", "E-Auto Wartung & Inspektion"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Fachgerechte Bremsenprüfung, -wartung und -reparatur für Ihre Sicherheit. Von Bremsbelägen bis zur kompletten Bremsanlage – wir sorgen für optimale Bremsleistung.",
      highlights: ["Bremsbelag- und Scheibenwechsel", "Bremsflüssigkeitswechsel", "Bremssystem-Diagnose"],
    }
  ] as { slug: string; title: string; bild: string; description: string; highlights: string[] }[],

  // ── Karriere ───────────────────────────────────────────────────────────────
  karriere: {
    jobs: [
      { title: "Fachkraft (m/w/d)",       type: "Vollzeit",   experience: "Berufserfahrung erwünscht"  },
      { title: "Auszubildende (m/w/d)",    type: "Ausbildung", experience: "Schulabschluss erforderlich" },
    ],
  },

  // ── Öffnungszeiten & Services ──────────────────────────────────────────────
  tuev_termine: true as boolean,
  oeffnungszeiten: {
    mo_fr: "13:00 – 17:00" as string,
    sa:    "" as string,
    so:    "" as string,
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Mo–Fr: 13:00 – 17:00"],
  },

  // ── Social Media ───────────────────────────────────────────────────────────
  social: {
    facebook:  null as string | null,
    instagram: null as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: false as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
