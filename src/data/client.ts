/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-07-14T14:17:55.873Z
 * Kundennummer: 221
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "Teutemacher Glas und Spiegel",
  branche: "Sonstige",
  ort: "Warendorf",
  slogan: "Fahrzeugelektronik",
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
    ueberschrift: "Ihre Experten für Fahrzeugelektronik in Warendorf",
    ueberschriftHighlight: "Fahrzeugelektronik",
    untertext: "Von moderner Elektronik über Elektroautos bis zu zuverlässigen Bremssystemen – professionelle Werkstattlösungen für Ihr Fahrzeug.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ueberschrift: "Teutemacher – Ihre Autowerkstatt in Warendorf",
    text1: "Bei Teutemacher Glas und Spiegel in Warendorf sind wir Ihre kompetenten Ansprechpartner rund um moderne Fahrzeugtechnik. Unser Team verbindet langjährige Erfahrung mit technischem Know-how in den Bereichen Fahrzeugelektronik, Elektromobilität und Bremsentechnik. Wir bieten Ihnen zuverlässige Lösungen für alle Marken und Modelle.",
    text2: "Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle. Wir arbeiten präzise, transparent und nehmen uns Zeit für eine ausführliche Beratung. Ihr Fahrzeug ist bei uns in besten Händen.",
    tags: ["Erfahrene Profis", "Moderne Technik", "Faire Preise", "Qualitätsarbeit"],
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
      description: "Moderne Fahrzeugelektronik erfordert Fachwissen und Präzision. Wir diagnostizieren und reparieren elektronische Systeme mit professioneller Ausrüstung.",
      highlights: ["Fehlerdiagnose mit Profi-Software", "Steuergeräte-Reparatur", "Elektrische Systemprüfung"],
    },
    {
      slug: "elektroautos",
      title: "Elektroautos",
      bild: "https://r2.kuwezu.de/bibliothek/Elektroautos/1777878408924-leistung_elektroautos.webp",
      description: "Als Spezialisten für Elektromobilität betreuen wir E-Fahrzeuge kompetent. Von der Wartung bis zur Hochvolt-Technik bieten wir umfassenden Service.",
      highlights: ["Hochvolt-Systemwartung", "Batterie-Check und Diagnose", "E-Auto Spezialservice"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Sicherheit beginnt mit funktionierenden Bremsen. Wir prüfen, warten und reparieren alle Bremssysteme fachgerecht und zuverlässig.",
      highlights: ["Bremsscheiben und Beläge", "ABS-Systemprüfung", "Bremsflüssigkeitswechsel"],
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
