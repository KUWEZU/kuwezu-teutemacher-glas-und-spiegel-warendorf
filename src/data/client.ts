/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-07-14T19:35:29.176Z
 * Kundennummer: 221
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "Teutemacher Glas und Spiegel",
  branche: "Sonstige",
  ort: "Warendorf",
  slogan: "Experten",
  adresse: "Südstraße 1-5, 48231 Warendorf",
  maps_url: "https://maps.google.com/?cid=7389555609363827357&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
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
    ueberschrift: "Ihre Experten für Elektronik und Bremsen",
    ueberschriftHighlight: "Experten",
    untertext: "Von Fahrzeugelektronik bis Bremsenservice – in Warendorf sind wir Ihr zuverlässiger Partner für Qualität und Präzision.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ueberschrift: "Teutemacher – Ihr Fachbetrieb in Warendorf",
    text1: "Als etablierter Fachbetrieb in Warendorf stehen wir für kompetente Arbeit in den Bereichen Fahrzeugelektronik, E-Mobilität und Bremsensysteme. Unser Team verbindet langjährige Erfahrung mit modernem Know-how. Ob konventionelle Fahrzeuge oder Elektroautos – wir beherrschen die gesamte Bandbreite aktueller Technik.",
    text2: "Präzision und Zuverlässigkeit prägen unsere tägliche Arbeit. Wir nehmen uns Zeit für individuelle Beratung und setzen auf transparente Kommunikation. Ihr Vertrauen ist unser Antrieb.",
    tags: ["Erfahrenes Team", "Moderne Technik", "Faire Preise", "Schneller Service"],
    stats: [],
  },

  // ── Leistungen ─────────────────────────────────────────────────────────────
  leistungen: [
    {
      slug: "elektronik",
      title: "Elektronik",
      bild: "https://r2.kuwezu.de/bibliothek/Elektronik/1777878497653-leistung_multimeter.webp",
      description: "Moderne Fahrzeugelektronik erfordert Fachwissen und Präzision. Wir diagnostizieren und reparieren elektronische Systeme zuverlässig und effizient.",
      highlights: ["Fehlerdiagnose", "Steuergeräte-Service", "Elektrische Anlagen"],
    },
    {
      slug: "elektroautos",
      title: "Elektroautos",
      bild: "https://r2.kuwezu.de/bibliothek/Elektroautos/1777878408924-leistung_elektroautos.webp",
      description: "E-Mobilität ist unsere Zukunft. Wir bieten kompetenten Service für Elektrofahrzeuge – von der Wartung bis zur Reparatur.",
      highlights: ["Hochvolt-Systeme", "Batterie-Checks", "E-Auto Wartung"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Sicherheit beginnt mit funktionierenden Bremsen. Wir prüfen, warten und reparieren alle Bremsensysteme nach höchsten Standards.",
      highlights: ["Bremsenwartung", "Scheiben & Beläge", "ABS-Service"],
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
