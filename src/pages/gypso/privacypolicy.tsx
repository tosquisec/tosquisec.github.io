import * as React from "react"
import { useState, useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Layout from "../../components/Layout"
import Navbar from "../../components/Navbar"
import { LanguageProvider } from "../../context/LanguageContext"
import { Shield, ArrowLeft, FileText, HardDrive, Megaphone, CreditCard, UserCheck, Mail, ArrowUp } from "lucide-react"

import "../../styles/gypso.css"
import "../../styles/gypso-animations.css"
import {
  GypsoMotionProvider,
  GypsoReveal,
  GypsoStaggerItem,
  GypsoSpotlightCard,
  GypsoReadingProgress,
  MOTION,
  CURVES,
} from "../../components/gypso/GypsoAnimations"
import {
  UI_STRINGS,
  detectLanguage,
  isRtl,
  type SupportedLang,
} from "../../components/gypso/languages"
import { POLICY_EXTRA } from "../../components/gypso/legalContent"

interface Section {
  title: string
  paragraphs?: string[]
  list?: string[]
}

interface Content {
  title: string
  lastUpdated: string
  sections: Section[]
}

/**
 * Il riepilogo "in breve" è l'unico testo non presente nell'app: è un'etichetta
 * di navigazione, quindi va tradotto a mano per tutte e 11 le lingue.
 */
const BRIEF: Record<SupportedLang, string> = {
  it: "nessun progetto, preventivo o dato cliente lascia il tuo dispositivo. GYPSO non possiede un backend: gli unici soggetti terzi coinvolti sono Google Mobile Ads (pubblicità, con consenso UMP nel SEE) e RevenueCat (acquisti in-app tramite gli store).",
  en: "no project, estimate or client record ever leaves your device. GYPSO has no backend: the only third parties involved are Google Mobile Ads (advertising, with UMP consent in the EEA) and RevenueCat (in-app purchases through the stores).",
  de: "kein Projekt, Angebot oder Kundendatensatz verlässt jemals Ihr Gerät. GYPSO hat kein Backend: einzige beteiligte Dritte sind Google Mobile Ads (Werbung, mit UMP-Einwilligung im EWR) und RevenueCat (In-App-Käufe über die Stores).",
  fr: "aucun projet, devis ou donnée client ne quitte votre appareil. GYPSO n'a pas de backend : les seuls tiers impliqués sont Google Mobile Ads (publicité, avec consentement UMP dans l'EEE) et RevenueCat (achats in-app via les stores).",
  es: "ningún proyecto, presupuesto o dato de cliente abandona su dispositivo. GYPSO no tiene backend: los únicos terceros implicados son Google Mobile Ads (publicidad, con consentimiento UMP en el EEE) y RevenueCat (compras in-app a través de las tiendas).",
  pt: "nenhum projeto, orçamento ou dado de cliente sai do seu dispositivo. O GYPSO não tem backend: os únicos terceiros envolvidos são o Google Mobile Ads (publicidade, com consentimento UMP no EEE) e o RevenueCat (compras na aplicação através das lojas).",
  ro: "niciun proiect, deviz sau date de client nu părăsește dispozitivul dumneavoastră. GYPSO nu are backend: singurii terți implicați sunt Google Mobile Ads (publicitate, cu consimțământ UMP în SEE) și RevenueCat (achiziții în aplicație prin magazine).",
  nl: "geen enkel project, geen enkele offerte of klantgegeven verlaat uw toestel. GYPSO heeft geen backend: de enige betrokken derden zijn Google Mobile Ads (advertenties, met UMP-toestemming in de EER) en RevenueCat (in-app aankopen via de stores).",
  pl: "żaden projekt, kosztorys ani dane klienta nie opuszczają Twojego urządzenia. GYPSO nie posiada backendu: jedynymi zaangażowanymi podmiotami trzecimi są Google Mobile Ads (reklamy, za zgodą UMP w EOG) oraz RevenueCat (zakupy w aplikacji przez sklepy).",
  uk: "жоден проєкт, кошторис чи дані клієнта не залишають ваш пристрій. GYPSO не має бекенду: єдині залучені треті сторони — Google Mobile Ads (реклама, за згодою UMP у ЄЕЗ) та RevenueCat (покупки в додатку через магазини).",
  ar: "لا يغادر أي مشروع أو عرض أسعار أو بيانات عميل جهازك مطلقاً. لا يمتلك GYPSO خوادم خلفية: الأطراف الثالثة الوحيدة المعنية هي Google Mobile Ads (الإعلانات، بموافقة UMP في المنطقة الاقتصادية الأوروبية) وRevenueCat (المشتريات داخل التطبيق عبر المتاجر).",
}

/** Chip di testata: etichette brevi tradotte per non lasciare testo italiano. */
const CHIPS: Record<SupportedLang, string[]> = {
  it: ["Privacy by Design", "100% Locale"],
  en: ["Privacy by Design", "100% Local"],
  de: ["Privacy by Design", "100% Lokal"],
  fr: ["Privacy by Design", "100% Local"],
  es: ["Privacy by Design", "100% Local"],
  pt: ["Privacy by Design", "100% Local"],
  ro: ["Privacy by Design", "100% Local"],
  nl: ["Privacy by Design", "100% Lokaal"],
  pl: ["Privacy by Design", "100% Lokalnie"],
  uk: ["Privacy by Design", "100% Локально"],
  ar: ["الخصوصية حسب التصميم", "محلي 100%"],
}

const policyData: Record<SupportedLang, Content> = {
  it: {
    title: "GYPSO — Informativa sulla Privacy",
    lastUpdated: "Ultimo aggiornamento: Settembre 2026 · Release 1.0.0",
    sections: [
      {
        title: "Raccolta e Salvataggio Dati",
        paragraphs: [
          "GYPSO è progettata rispettando il principio della \"Privacy by Design\". Tutti i dati inseriti dall'utente (planimetrie CAD, misurazioni delle superfici, listini prezzi, dati cliente e dati ditta) vengono salvati ESCLUSIVAMENTE all'interno del dispositivo dell'utente tramite database locale criptato.",
          "L'applicazione NON trasmette, archivia né analizza i tuoi progetti ed i tuoi preventivi su server esterni.",
        ],
      },
      {
        title: "Pubblicità e Consenso GDPR / UMP",
        paragraphs: [
          "L'applicazione utilizza i servizi di Google Mobile Ads per la visualizzazione di annunci pubblicitari.",
        ],
        list: [
          "In conformità al Regolamento Generale sulla Protezione dei Dati (GDPR) e alla direttiva ePrivacy, agli utenti residenti nello Spazio Economico Europeo (SEE) viene richiesto il consenso esplicito prima di servire annunci personalizzati.",
          "Puoi modificare o revocare le tue preferenze di consenso pubblicitario in qualsiasi momento tramite il form di consenso dedicato all'interno dell'applicazione.",
        ],
      },
      {
        title: "Acquisti In-App e Versione PRO",
        paragraphs: [
          "Gli acquisti In-App e l'attivazione della versione Premium PRO sono gestiti tramite il servizio RevenueCat, che interagisce direttamente con Google Play Store ed Apple App Store.",
          "I dettagli di pagamento e le carte di credito sono elaborati unicamente dagli store ufficiali di Apple e Google secondo i loro standard di sicurezza (PCI-DSS). GYPSO non ha mai accesso ad alcun dato bancario o finanziario.",
        ],
      },
      {
        title: "Diritti dell'Utente",
        paragraphs: [
          "Essendo tutti i dati conservati in locale nel tuo smartphone o tablet:",
        ],
        list: [
          "Hai il controllo totale ed immediato dei tuoi dati.",
          "Puoi cancellare completamente tutti i progetti, i listini ed i dati salvati disinstallando l'applicazione o cancellando i dati dell'app nelle Impostazioni del sistema operativo.",
          "Puoi esportare o ripristinare i tuoi progetti tramite la funzione di Backup integrata in formato .cart.",
        ],
      },
      {
        title: "Contatti e Supporto",
        paragraphs: [
          "Per qualsiasi domanda o chiarimento riguardante la presente Informativa sulla Privacy o l'utilizzo dell'applicazione GYPSO, puoi contattare il team di sviluppo all'indirizzo email di supporto indicato nella pagina dello store ufficiale.",
        ],
      },
    ],
  },
  en: {
    title: "GYPSO — Privacy Policy",
    lastUpdated: "Last updated: September 2026 · Release 1.0.0",
    sections: [
      {
        title: "Data Collection & Storage",
        paragraphs: [
          "GYPSO is designed strictly following the \"Privacy by Design\" principle. All user data (CAD floor plans, surface measurements, price lists, client and company information) is saved EXCLUSIVELY on the user's device via an encrypted local database.",
          "The application DOES NOT transmit, store, or analyze your projects or estimates on external servers.",
        ],
      },
      {
        title: "Advertising & GDPR / UMP Consent",
        paragraphs: [
          "The application uses Google Mobile Ads to display advertisement banners.",
        ],
        list: [
          "In compliance with the General Data Protection Regulation (GDPR) and the ePrivacy Directive, users residing in the European Economic Area (EEA) are asked for explicit consent before personalized ads are served.",
          "You can modify or revoke your ad consent choices at any time via the dedicated consent form inside the application settings.",
        ],
      },
      {
        title: "In-App Purchases & PRO Version",
        paragraphs: [
          "In-App Purchases and the Premium PRO version are processed via RevenueCat, which directly interfaces with Google Play Store and Apple App Store.",
          "Payment credentials and credit card details are processed exclusively by Apple and Google official stores under strict security standards (PCI-DSS). GYPSO never accesses or stores any banking or financial data.",
        ],
      },
      {
        title: "User Rights",
        paragraphs: [
          "Since all project data remains locally stored on your smartphone or tablet:",
        ],
        list: [
          "You retain full and immediate control over your data.",
          "You can permanently wipe all saved projects and settings by uninstalling the app or clearing app data in your OS settings.",
          "You can export or restore your project backups at any time in .cart format.",
        ],
      },
      {
        title: "Contact & Support",
        paragraphs: [
          "For any questions or clarification regarding this Privacy Policy or GYPSO usage, please contact the development team at the support email provided on the official store listing page.",
        ],
      },
    ],
  },
  de: {
    title: "GYPSO — Datenschutz-Bestimmungen",
    lastUpdated: "Zuletzt aktualisiert: September 2026 · Release 1.0.0",
    sections: [
      {
        title: "Datenerfassung & Speicherung",
        paragraphs: [
          "GYPSO wurde streng nach dem Grundsatz \"Privacy by Design\" entwickelt. Alle Benutzereingaben (CAD-Grundrisse, Flächenmessungen, Preislisten, Kunden- und Firmendaten) werden AUSSCHLIESSLICH lokal auf dem Gerät des Benutzers in einer verschlüsselten Datenbank gespeichert.",
          "Die Anwendung überträgt, speichert oder analysiert Ihre Projekte und Angebote NICHT auf externen Servern.",
        ],
      },
      {
        title: "Werbung & DSGVO / UMP Einwilligung",
        paragraphs: [
          "Die Anwendung nutzt Google Mobile Ads zur Anzeige von Werbebanner.",
        ],
        list: [
          "In Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO) werden Benutzer mit Wohnsitz im Europäischen Wirtschaftsraum (EWR) vor der Bereitstellung personalisierter Werbung um eine ausdrückliche Einwilligung gebeten.",
          "Sie können Ihre Werbeeinstellungen jederzeit über das entsprechende Zustimmungsformular in den App-Einstellungen ändern oder widerrufen.",
        ],
      },
      {
        title: "In-App-Käufe & PRO-Version",
        paragraphs: [
          "In-App-Käufe und die Freischaltung der Premium PRO-Version werden über RevenueCat abgewickelt, das direkt mit dem Google Play Store und Apple App Store kommuniziert.",
          "Zahlungsinformationen und Kreditkartendaten werden ausschließlich von den offiziellen Stores von Apple und Google nach höchsten Sicherheitsstandards (PCI-DSS) verarbeitet. GYPSO hat keinen Zugriff auf Bank- oder Finanzdaten.",
        ],
      },
      {
        title: "Nutzerrechte",
        paragraphs: [
          "Da alle Daten lokal auf Ihrem Smartphone oder Tablet verbleiben:",
        ],
        list: [
          "Behalten Sie die vollständige Kontrolle über Ihre Daten.",
          "Sie können alle gespeicherten Projekte dauerhaft löschen, indem Sie die Anwendung deinstallieren oder die App-Daten in den Betriebssystem-Einstellungen löschen.",
          "Sie können Ihre Projekte jederzeit über die integrierte Backup-Funktion im .cart-Format sichern und wiederherstellen.",
        ],
      },
      {
        title: "Kontakt & Support",
        paragraphs: [
          "Bei Fragen oder Anmerkungen zu dieser Datenschutzerklärung oder der Nutzung von GYPSO wenden Sie sich bitte an das Entwicklerteam unter der auf der offiziellen Store-Seite angegebenen Support-E-Mail-Adresse.",
        ],
      },
    ],
  },
  fr: {
    title: "GYPSO — Politique de Confidentialité",
    lastUpdated: "Dernière mise à jour : Septembre 2026 · Release 1.0.0",
    sections: [
      {
        title: "Collecte et Stockage des Données",
        paragraphs: [
          "GYPSO est conçue selon le principe de la \"Privacy by Design\". Toutes les données saisies par l'utilisateur (plans CAD, mesures de surfaces, grilles de prix, coordonnées clients et entreprise) sont enregistrées EXCLUSIVEMENT sur l'appareil de l'utilisateur via une base de données locale cryptée.",
          "L'application NE transmet, N'héberge et N'analyse AUCUN de vos projets ou devis sur des serveurs externes.",
        ],
      },
      {
        title: "Publicité et Consentement RGPD / UMP",
        paragraphs: [
          "L'application utilise les services Google Mobile Ads pour l'affichage de bannières publicitaires.",
        ],
        list: [
          "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la directive ePrivacy, un consentement explicite est demandé aux utilisateurs résidant dans l'Espace Économique Européen (EEE) avant de diffuser des publicités personnalisées.",
          "Vous pouvez modifier ou retirer vos choix de consentement publicitaire à tout moment depuis le formulaire dédié dans les paramètres de l'application.",
        ],
      },
      {
        title: "Achats In-App & Version PRO",
        paragraphs: [
          "Les achats In-App et l'activation de la version Premium PRO sont traités via RevenueCat, qui communique directement avec le Google Play Store et l'Apple App Store.",
          "Les données de paiement sont traitées exclusivement par les stores officiels d'Apple et Google conformément aux normes PCI-DSS. GYPSO n'a jamais accès à vos coordonnées bancaires.",
        ],
      },
      {
        title: "Droits des Utilisateurs",
        paragraphs: [
          "Toutes vos données restant stockées localement sur votre smartphone ou tablette :",
        ],
        list: [
          "Vous conservez le contrôle total et immédiat de vos données.",
          "Vous pouvez supprimer définitivement l'ensemble des projets en désinstallant l'application ou en effaçant les données dans les paramètres de votre système.",
          "Vous pouvez exporter et restaurer vos sauvegardes de projets au format .cart à tout moment.",
        ],
      },
      {
        title: "Contact et Support",
        paragraphs: [
          "Pour toute question concernant cette Politique de Confidentialité ou l'utilisation de GYPSO, vous pouvez contacter l'équipe de développement à l'adresse e-mail de support figurant sur la fiche du store officiel.",
        ],
      },
    ],
  },
  es: {
    title: "GYPSO — Política de Privacidad",
    lastUpdated: "Última actualización: Septiembre 2026 · Release 1.0.0",
    sections: [
      {
        title: "Recopilación y Almacenamiento de Datos",
        paragraphs: [
          "GYPSO está diseñada respetando el principio de \"Privacidad por Diseño\". Todos los datos ingresados por el usuario (planos CAD, mediciones de superficies, listas de precios, datos de clientes y de la empresa) se guardan EXCLUSIVAMENTE en el dispositivo del usuario mediante una base de datos local encriptada.",
          "La aplicación NO transmite, almacena ni analiza sus proyectos o presupuestos en servidores externos.",
        ],
      },
      {
        title: "Publicidad y Consentimiento RGPD / UMP",
        paragraphs: [
          "La aplicación utiliza Google Mobile Ads para la visualización de anuncios publicitarios.",
        ],
        list: [
          "De conformidad con el Reglamento General de Protección de Datos (RGPD) y la directiva ePrivacy, a los usuarios residentes en el Espacio Económico Europeo (EEE) se les solicita su consentimiento explícito antes de mostrar anuncios personalizados.",
          "Puede modificar o revocar sus preferencias de consentimiento en cualquier momento a través del formulario dentro de la configuración de la aplicación.",
        ],
      },
      {
        title: "Compras In-App y Versión PRO",
        paragraphs: [
          "Las compras dentro de la aplicación y la activación de la versión Premium PRO se gestionan a través de RevenueCat, que interactúa directamente con Google Play Store y Apple App Store.",
          "Los datos de pago son procesados únicamente por las tiendas oficiales de Apple y Google según los estándares de seguridad (PCI-DSS). GYPSO nunca tiene acceso a datos bancarios o financieros.",
        ],
      },
      {
        title: "Derechos del Usuario",
        paragraphs: [
          "Dado que todos los datos se conservan localmente en su dispositivo:",
        ],
        list: [
          "Usted mantiene el control total e inmediato de sus datos.",
          "Puede eliminar permanentemente sus proyectos desinstalando la aplicación o borrando los datos de la app en los Ajustes de su sistema operativo.",
          "Puede exportar o restaurar sus proyectos mediante la función de Copia de Seguridad integradas en formato .cart.",
        ],
      },
      {
        title: "Contacto y Soporte",
        paragraphs: [
          "Para cualquier pregunta sobre esta Política de Privacidad o el uso de la aplicación GYPSO, puede ponerse en contacto con el equipo de desarrollo mediante el correo electrónico de soporte indicado en la tienda oficial.",
        ],
      },
    ],
  },
  /* pt, ro, nl, pl, uk, ar — estratte da lib/config/l10n_*.dart dell'app. */
  ...POLICY_EXTRA,
}

/* Icona associata a ciascun blocco, per lingua indipendente dall'indice. */
const sectionIcons = [<HardDrive size={17} />, <Megaphone size={17} />, <CreditCard size={17} />, <UserCheck size={17} />, <Mail size={17} />]

const slugify = (input: string) =>
  input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")

/** Blocco con indice numerico e icona; entra allo scroll. */
const PolicyBlock: React.FC<{
  id: string
  index: number
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}> = ({ id, index, title, icon, children }) => (
  <GypsoStaggerItem index={index} step={0.05}>
    <GypsoSpotlightCard className="gypso-card" tint="0, 229, 255">
      <section id={id} className="gypso-anchor-target" style={{ position: "relative" }}>
        <span className="gypso-accent-line" aria-hidden="true" />
        <h2 className="gypso-legal-h2" style={{ paddingLeft: 4 }}>
          <span className="gypso-legal-index">{String(index + 1).padStart(2, "0")}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 30,
                height: 30,
                borderRadius: 9,
                background: "rgba(0, 229, 255, 0.1)",
                border: "1px solid rgba(0, 229, 255, 0.22)",
                color: "var(--gypso-cyan)",
                flexShrink: 0,
              }}
            >
              {icon}
            </span>
            {title}
          </span>
        </h2>
        <div className="gypso-legal-body" style={{ paddingLeft: 4 }}>
          {children}
        </div>
      </section>
    </GypsoSpotlightCard>
  </GypsoStaggerItem>
)

/** Indice laterale sticky con evidenziazione della sezione attiva. */
const TocAside: React.FC<{ items: { id: string; title: string }[]; label: string }> = ({ items, label }) => {
  const [active, setActive] = React.useState(items[0]?.id ?? "")

  React.useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "-96px 0px -60% 0px", threshold: 0 }
    )
    items.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [items])

  return (
    <aside className="gypso-legal-aside">
      <div className="gypso-legal-aside-card">
        <h2 className="gypso-legal-aside-title">{label}</h2>
        <ul className="gypso-legal-toc">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={active === item.id ? "is-active" : ""}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

const GypsoPrivacyPolicyPage: React.FC<PageProps> = () => {
  const [currentLang, setCurrentLang] = useState<SupportedLang>("it")
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentLang(detectLanguage(navigator.language || (navigator as any).userLanguage || "it"))
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // L'arabo è RTL: l'intero documento deve seguirne la direzione.
  useEffect(() => {
    if (typeof document === "undefined") return
    document.documentElement.dir = isRtl(currentLang) ? "rtl" : "ltr"
    document.documentElement.lang = currentLang
  }, [currentLang])

  const currentContent = policyData[currentLang]
  const tocItems = currentContent.sections.map((s) => ({ id: slugify(s.title), title: s.title }))

  const ui = UI_STRINGS[currentLang]
  const tocLabel = ui.toc
  const homeLabel = ui.backHome
  const termsLabel = ui.terms
  const backTopLabel = ui.backTop
  const chips = CHIPS[currentLang]
  const rtl = isRtl(currentLang)

  return (
    <LanguageProvider>
      <GypsoMotionProvider>
        <GypsoReadingProgress />
        <Navbar
          mode="gypso-privacy"
          privacyLang={currentLang}
          setPrivacyLang={setCurrentLang}
          fullLanguageList
        />

        <div className="gypso-page" style={{ paddingTop: 0 }} dir={rtl ? "rtl" : "ltr"}>
          <div className="gypso-bg-mesh" />
          <div className="gypso-orb gypso-orb-1" />
          <div className="gypso-orb gypso-orb-2" />

          <div className="gypso-legal-shell">
            <TocAside items={tocItems} label={tocLabel} />

            <main>
              {/* Header */}
              <GypsoReveal>
                <header className="gypso-legal-head">
                  <h1>{currentContent.title}</h1>
                  <div className="gypso-legal-meta">
                    <span className="gypso-chip">
                      <Shield size={14} /> GDPR
                    </span>
                    <span className="gypso-chip" style={{ borderColor: "rgba(0, 230, 118, 0.28)", background: "rgba(0, 230, 118, 0.08)", color: "var(--gypso-green)" }}>
                      {chips[0]}
                    </span>
                    <span className="gypso-chip" style={{ borderColor: "rgba(156, 39, 176, 0.28)", background: "rgba(156, 39, 176, 0.08)", color: "#ce93d8" }}>
                      {chips[1]}
                    </span>
                    <span>{currentContent.lastUpdated}</span>
                  </div>
                </header>
              </GypsoReveal>

              {/* Riepilogo in tre punti: la promessa dell'app, leggibile in 5 secondi */}
              <GypsoReveal delay={0.06}>
                <div className="gypso-legal-note">
                  <strong>{ui.brief}</strong> {BRIEF[currentLang]}
                </div>
              </GypsoReveal>

              {/* Sezioni */}
              {currentContent.sections.map((section, idx) => (
                <PolicyBlock
                  key={`${currentLang}-${idx}`}
                  id={tocItems[idx].id}
                  index={idx}
                  title={section.title}
                  icon={sectionIcons[idx] ?? <FileText size={17} />}
                >
                  {section.paragraphs?.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                  {section.list && (
                    <ul>
                      {section.list.map((item, lIdx) => (
                        <li key={lIdx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </PolicyBlock>
              ))}

              {/* Cross-links */}
              <GypsoReveal>
                <div className="gypso-legal-actions">
                  <Link to="/gypso" className="gypso-btn-secondary" style={{ textDecoration: "none" }}>
                    <ArrowLeft size={16} /> {homeLabel}
                  </Link>
                  <Link to="/gypso/terms" className="gypso-btn-primary" style={{ textDecoration: "none" }}>
                    <FileText size={16} /> {termsLabel}
                  </Link>
                </div>
              </GypsoReveal>

              <footer className="gypso-footer" style={{ marginTop: "3rem" }}>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginBottom: "12px" }}>
                  <Link to="/gypso" style={{ color: "var(--gypso-cyan)", textDecoration: "none", fontSize: "0.85rem" }}>GYPSO App</Link>
                  <span style={{ color: "var(--gypso-text-muted)" }}>•</span>
                  <Link to="/gypso/terms" style={{ color: "var(--gypso-cyan)", textDecoration: "none", fontSize: "0.85rem" }}>{termsLabel}</Link>
                  <span style={{ color: "var(--gypso-text-muted)" }}>•</span>
                  <Link to="/" style={{ color: "var(--gypso-cyan)", textDecoration: "none", fontSize: "0.85rem" }}>Portfolio Antonio Squillace</Link>
                </div>
                <p>© {new Date().getFullYear()} GYPSO — com.tosquidev.gypso. All rights reserved.</p>
              </footer>
            </main>
          </div>
        </div>

        {/* Torna su: appare solo dopo aver scrollato */}
        <motion.button
          type="button"
          className="gypso-back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={backTopLabel}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={showTop ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: MOTION.medium, ease: CURVES.emphasized }}
          style={{ pointerEvents: showTop ? "auto" : "none" }}
        >
          <ArrowUp size={18} />
        </motion.button>
      </GypsoMotionProvider>
    </LanguageProvider>
  )
}

export default GypsoPrivacyPolicyPage

export const Head: HeadFC = () => (
  <>
    <title>GYPSO — Privacy Policy</title>
    <meta name="description" content="Informativa sulla Privacy per l'applicazione GYPSO." />
  </>
)
