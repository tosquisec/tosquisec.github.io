/**
 * Configurazione condivisa delle lingue per le pagine legali GYPSO.
 *
 * Le lingue sono le **stesse 11 dell'app** (`lib/config/l10n_*.dart`), non un
 * sottoinsieme: se l'app è tradotta in 11 lingue, le pagine legali che la
 * rappresentano devono esserlo altrettanto. `ar` è RTL e richiede `dir="rtl"`.
 */

export type SupportedLang = "it" | "en" | "de" | "fr" | "es" | "pt" | "ro" | "nl" | "pl" | "uk" | "ar"

export interface LanguageOption {
  code: SupportedLang
  flag: string
  /** Nome breve per il selettore compatto della navbar. */
  label: string
  /** Nome nativo per il selettore esteso. */
  native: string
  rtl?: boolean
}

/** Ordine: lingue principali, poi le sei aggiunte per raggiungere le 11 dell'app. */
export const LANGUAGES: LanguageOption[] = [
  { code: "it", flag: "🇮🇹", label: "IT", native: "Italiano" },
  { code: "en", flag: "🇬🇧", label: "EN", native: "English" },
  { code: "de", flag: "🇩🇪", label: "DE", native: "Deutsch" },
  { code: "fr", flag: "🇫🇷", label: "FR", native: "Français" },
  { code: "es", flag: "🇪🇸", label: "ES", native: "Español" },
  { code: "pt", flag: "🇵🇹", label: "PT", native: "Português" },
  { code: "ro", flag: "🇷🇴", label: "RO", native: "Română" },
  { code: "nl", flag: "🇳🇱", label: "NL", native: "Nederlands" },
  { code: "pl", flag: "🇵🇱", label: "PL", native: "Polski" },
  { code: "uk", flag: "🇺🇦", label: "UK", native: "Українська" },
  { code: "ar", flag: "🇸🇦", label: "AR", native: "العربية", rtl: true },
]

export const LANGUAGE_CODES = LANGUAGES.map((l) => l.code)

export const isRtl = (lang: SupportedLang): boolean => lang === "ar"

/** Etichette UI tradotte per la lingua corrente. */
export const UI_STRINGS: Record<
  SupportedLang,
  { toc: string; backHome: string; privacy: string; terms: string; backTop: string; brief: string }
> = {
  it: {
    toc: "Indice dei contenuti",
    backHome: "GYPSO Home",
    privacy: "Informativa Privacy",
    terms: "Termini di Servizio (EULA)",
    backTop: "Torna su",
    brief: "In breve:",
  },
  en: {
    toc: "Table of contents",
    backHome: "GYPSO Home",
    privacy: "Privacy Policy",
    terms: "Terms of Service (EULA)",
    backTop: "Back to top",
    brief: "In brief:",
  },
  de: {
    toc: "Inhaltsverzeichnis",
    backHome: "GYPSO Startseite",
    privacy: "Datenschutzerklärung",
    terms: "Nutzungsbedingungen (EULA)",
    backTop: "Nach oben",
    brief: "Kurz gesagt:",
  },
  fr: {
    toc: "Table des matières",
    backHome: "Accueil GYPSO",
    privacy: "Politique de Confidentialité",
    terms: "Conditions d'utilisation (EULA)",
    backTop: "Haut de page",
    brief: "En bref :",
  },
  es: {
    toc: "Índice de contenidos",
    backHome: "Inicio GYPSO",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio (EULA)",
    backTop: "Volver arriba",
    brief: "En breve:",
  },
  pt: {
    toc: "Índice de conteúdos",
    backHome: "Início GYPSO",
    privacy: "Política de Privacidade",
    terms: "Termos de Serviço (EULA)",
    backTop: "Voltar ao topo",
    brief: "Em resumo:",
  },
  ro: {
    toc: "Cuprins",
    backHome: "Pagina GYPSO",
    privacy: "Politica de Confidențialitate",
    terms: "Termeni de Utilizare (EULA)",
    backTop: "Înapoi sus",
    brief: "Pe scurt:",
  },
  nl: {
    toc: "Inhoudsopgave",
    backHome: "GYPSO Startpagina",
    privacy: "Privacybeleid",
    terms: "Servicevoorwaarden (EULA)",
    backTop: "Terug naar boven",
    brief: "In het kort:",
  },
  pl: {
    toc: "Spis treści",
    backHome: "Strona GYPSO",
    privacy: "Polityka prywatności",
    terms: "Warunki korzystania (EULA)",
    backTop: "Powrót na górę",
    brief: "W skrócie:",
  },
  uk: {
    toc: "Зміст",
    backHome: "Головна GYPSO",
    privacy: "Політика конфіденційності",
    terms: "Умови користування (EULA)",
    backTop: "Догори",
    brief: "Коротко:",
  },
  ar: {
    toc: "فهرس المحتويات",
    backHome: "الصفحة الرئيسية GYPSO",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة (EULA)",
    backTop: "العودة إلى الأعلى",
    brief: "باختصار:",
  },
}

/** Rileva la lingua del browser fra quelle supportate. */
export function detectLanguage(userLang: string): SupportedLang {
  const low = (userLang || "it").toLowerCase()
  const two = low.slice(0, 2)
  const found = LANGUAGES.find((l) => l.code === two)
  return found ? found.code : "it"
}
