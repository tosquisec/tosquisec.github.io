import * as React from "react"
import { useState, useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Navbar, { SupportedPrivacyLang } from "../../components/Navbar"
import { LanguageProvider } from "../../context/LanguageContext"
import {
  Shield,
  ArrowLeft,
  Lock,
  EyeOff,
  Scale,
  Building2,
  Mail,
  Globe,
  CheckCircle2,
  AlertCircle,
  Database,
  ExternalLink,
} from "lucide-react"

interface Section {
  title: string
  intro?: string
  paragraphs?: string[]
  list?: string[]
  alert?: string
}

interface TableRow {
  data: string
  purpose: string
  requirement: "Necessario" | "Facoltativo" | "Automatico" | "Required" | "Optional" | "Automatic"
}

interface RetentionRow {
  data: string
  duration: string
}

interface Content {
  title: string
  subtitle: string
  lastUpdated: string
  controllerTitle: string
  controllerCompany: string
  controllerAddress: string
  controllerContactEmail: string
  controllerPrivacyEmail: string
  controllerWebsite: string
  tableTitle: string
  tableHeaders: { col1: string; col2: string; col3: string }
  tableData: TableRow[]
  nonCollectedTitle: string
  nonCollectedIntro: string
  nonCollectedItems: string[]
  legalBasesTitle: string
  legalBasesItems: string[]
  thirdPartyTitle: string
  thirdPartyItems: { name: string; desc: string; linkText?: string; linkUrl?: string }[]
  retentionTitle: string
  retentionHeaders: { col1: string; col2: string }
  retentionData: RetentionRow[]
  securityTitle: string
  securityItems: string[]
  rightsTitle: string
  rightsIntro: string
  rightsList: string[]
  rightsContact: string
  rightsGarante: string
  transferTitle: string
  transferText: string
  minorsTitle: string
  minorsText: string
  changesTitle: string
  changesText: string
  contactsTitle: string
}

const policyData: Record<"it" | "en", Content> = {
  it: {
    title: "Informativa sulla Privacy",
    subtitle: "Allerta Italia — Sistema di Allertamento della Protezione Civile",
    lastUpdated: "Ultimo aggiornamento: Aprile 2026",
    controllerTitle: "1. Titolare del Trattamento",
    controllerCompany: "Artaud S.r.l.",
    controllerAddress: "Sede Legale: Rende (CS), Italia",
    controllerContactEmail: "asquillace.seclab@gmail.com",
    controllerPrivacyEmail: "privacy@allertaitalia.tosqui.it",
    controllerWebsite: "https://allertaitalia.tosqui.it",
    tableTitle: "2. Dati Raccolti",
    tableHeaders: { col1: "Dato Personale / Tecnico", col2: "Finalità del Trattamento", col3: "Natura / Base" },
    tableData: [
      {
        data: "Comuni salvati (codice ISTAT)",
        purpose: "Invio di notifiche mirate per l'area geografica di interesse",
        requirement: "Necessario",
      },
      {
        data: "Token FCM (Firebase Cloud Messaging)",
        purpose: "Instradamento e recapito delle notifiche push di emergenza",
        requirement: "Necessario",
      },
      {
        data: "Posizione GPS (se autorizzata)",
        purpose: "Identificazione istantanea del comune più vicino (elaborazione locale)",
        requirement: "Facoltativo",
      },
      {
        data: "Preferenza lingua",
        purpose: "Localizzazione coerente dell'interfaccia dell'applicazione",
        requirement: "Necessario",
      },
      {
        data: "Preferenze tema (chiaro/scuro)",
        purpose: "Personalizzazione grafica del layout sul dispositivo",
        requirement: "Facoltativo",
      },
      {
        data: "Dati diagnostici e di crash (Crashlytics)",
        purpose: "Rilevamento anonimo e risoluzione tempestiva di bug e anomalie software",
        requirement: "Automatico",
      },
    ],
    nonCollectedTitle: "2.1 Dati NON Raccolti",
    nonCollectedIntro: "Allerta Italia è concepita secondo i principi di minimizzazione e non raccoglie in nessun caso:",
    nonCollectedItems: [
      "Nome, cognome, indirizzo di residenza o codice fiscale",
      "Indirizzo email dell'utente (salvo contatto volontario avviato dall'utente per supporto)",
      "Numero di cellulare o identificativo telefonico (MSISDN)",
      "Rubrica contatti, galleria fotografica, microfono o archivio file del dispositivo",
      "Dati di navigazione web esterni o cronologia consultazione",
      "Identificatori pubblicitari (l'applicazione è totalmente priva di annunci e tracciamento commerciale)",
    ],
    legalBasesTitle: "3. Base Giuridica del Trattamento",
    legalBasesItems: [
      "Legittimo interesse (Art. 6.1.f GDPR): erogazione efficiente del servizio pubblico di informazione e allertamento meteorologico/idrogeologico a tutela della sicurezza.",
      "Consenso dell'interessato (Art. 6.1.a GDPR): per l'accesso facoltativo alle coordinate GPS e per la ricezione attiva delle notifiche push.",
    ],
    thirdPartyTitle: "4. Servizi di Terze Parti e Fornitori Tecnologici",
    thirdPartyItems: [
      {
        name: "Firebase Cloud Messaging (Google LLC)",
        desc: "Utilizzato per recapitare le notifiche push di allerta della Protezione Civile. Google riceve un identificativo anonimo univoco del dispositivo (token FCM).",
        linkText: "Informativa Privacy Firebase",
        linkUrl: "https://firebase.google.com/support/privacy",
      },
      {
        name: "Firebase Crashlytics (Google LLC)",
        desc: "Raccolta anonimizzata dei report di crash (modello dispositivo, release SO, stack trace dell'eccezione). Nessun dato identificativo dell'utente viene inviato.",
        linkText: "Crashlytics Data Retention",
        linkUrl: "https://firebase.google.com/terms/crashlytics",
      },
      {
        name: "Firebase App Check (Google LLC)",
        desc: "Verifica che le richieste API provengano dall'applicazione ufficiale mediante Play Integrity (Android) e App Attest (iOS).",
      },
      {
        name: "OpenStreetMap Foundation",
        desc: "Le mappe interattive mostrano dati cartografici OpenStreetMap. Il caricamento comporta il download di tile cartografiche dai server OSM.",
        linkText: "Informativa Privacy OSM",
        linkUrl: "https://wiki.osmfoundation.org/wiki/Privacy_Policy",
      },
    ],
    retentionTitle: "5. Tempi di Conservazione dei Dati",
    retentionHeaders: { col1: "Tipologia di Dato", col2: "Periodo di Conservazione" },
    retentionData: [
      {
        data: "Comuni salvati e preferenze utente",
        duration: "Conservati esclusivamente in locale fino alla disinstallazione dell'app o rimozione manuale",
      },
      {
        data: "Token FCM (notifiche push)",
        duration: "Fino alla disinstallazione dell'app o revoca dell'autorizzazione notifiche",
      },
      {
        data: "Dati di crash e diagnostica",
        duration: "Massimo 90 giorni (standard Firebase Crashlytics)",
      },
      {
        data: "Coordinate GPS",
        duration: "Non conservate su alcun server; elaborate in tempo reale solo sul dispositivo",
      },
    ],
    securityTitle: "6. Misure di Sicurezza Tecniche e Organizzative",
    securityItems: [
      "Cifratura end-to-end su canale di transito: tutte le comunicazioni tra app e server avvengono tramite HTTPS con TLS 1.3.",
      "Archiviazione sicura: le preferenze sul dispositivo risiedono in sandbox isolate e storage crittografato di sistema.",
      "Protezione delle infrastrutture API con mitigazione DDoS, rate limiting stringente e verifica crittografica con Firebase App Check.",
      "Isolamento delle credenziali server gestite esclusivamente mediante variabili d'ambiente protette e cluster di database inaccessibile dall'esterno.",
    ],
    rightsTitle: "7. Diritti dell'Interessato (GDPR artt. 15-22)",
    rightsIntro: "In qualità di interessato, il Regolamento UE 2016/679 ti conferisce i seguenti diritti:",
    rightsList: [
      "Diritto di accesso (Art. 15): verificare quali dati sono oggetto di trattamento.",
      "Diritto di rettifica (Art. 16): richiedere l'aggiornamento o la correzione di dati inesatti.",
      "Diritto alla cancellazione / Oblio (Art. 17): richiedere la cancellazione tempestiva dei dati.",
      "Diritto di limitazione (Art. 18) e opposizione (Art. 21) al trattamento.",
      "Diritto alla portabilità dei dati (Art. 20) in un formato strutturato e leggibile da dispositivo automatico.",
      "Diritto di revoca del consenso (Art. 7) in qualsiasi momento per geolocalizzazione o notifiche push.",
    ],
    rightsContact:
      "Per esercitare qualunque diritto GDPR puoi inviare una richiesta all'indirizzo email dedicato:",
    rightsGarante:
      "Hai inoltre il diritto di proporre reclamo formale all'Autorità Garante per la Protezione dei Dati Personali italiana (Piazza Venezia 11, 00187 Roma — www.garanteprivacy.it).",
    transferTitle: "8. Trasferimento Dati all'Estero",
    transferText:
      "I servizi cloud Firebase forniti da Google LLC possono comportare il transito o la conservazione di log tecnici su server situati negli Stati Uniti. Google aderisce ufficialmente al Data Privacy Framework UE-USA, garantendo un livello di protezione pienamente conforme all'Art. 45 del GDPR.",
    minorsTitle: "9. Tutela dei Minori",
    minorsText:
      "L'applicazione non è destinata a minori di 14 anni. Qualora un genitore o tutore dovesse ravvisare la trasmissione involontaria di dati relativi a minori, può richiederne l'immediata eliminazione contattando il Titolare.",
    changesTitle: "10. Aggiornamenti dell'Informativa",
    changesText:
      "Il Titolare del Trattamento si riserva il diritto di modificare o aggiornare la presente Privacy Policy per adeguarla all'evoluzione legislativa o a nuovi rilasci software. Gli aggiornamenti saranno resi noti tempestivamente su questa pagina e all'interno dell'app.",
    contactsTitle: "11. Riferimenti Societari e Contatti DPO",
  },
  en: {
    title: "Privacy Policy",
    subtitle: "Allerta Italia — Civil Protection Early Warning System",
    lastUpdated: "Last updated: April 2026",
    controllerTitle: "1. Data Controller",
    controllerCompany: "Artaud S.r.l.",
    controllerAddress: "Registered Office: Rende (CS), Italy",
    controllerContactEmail: "asquillace.seclab@gmail.com",
    controllerPrivacyEmail: "privacy@allertaitalia.tosqui.it",
    controllerWebsite: "https://allertaitalia.tosqui.it",
    tableTitle: "2. Collected Data",
    tableHeaders: { col1: "Data Type", col2: "Purpose of Processing", col3: "Legal Basis / Nature" },
    tableData: [
      {
        data: "Saved Municipalities (ISTAT code)",
        purpose: "Targeted push notifications for the selected geographic alert zones",
        requirement: "Required",
      },
      {
        data: "FCM Push Token (Firebase)",
        purpose: "Routing and instant delivery of alert notifications to your device",
        requirement: "Required",
      },
      {
        data: "GPS Location (if allowed)",
        purpose: "Automatic on-device lookup of nearest municipality",
        requirement: "Optional",
      },
      {
        data: "Language preference",
        purpose: "Consistent app interface localization",
        requirement: "Required",
      },
      {
        data: "Theme preference (light/dark)",
        purpose: "Visual display personalization stored locally",
        requirement: "Optional",
      },
      {
        data: "Crash and diagnostics (Crashlytics)",
        purpose: "Anonymous bug diagnostics and software stability improvement",
        requirement: "Automatic",
      },
    ],
    nonCollectedTitle: "2.1 Data NOT Collected",
    nonCollectedIntro: "Allerta Italia is built with strict privacy minimization principles and never collects:",
    nonCollectedItems: [
      "User name, personal identity, residential address, or national ID",
      "Email address (unless voluntarily sent by the user for technical support)",
      "Phone number or cellular identifier (MSISDN)",
      "Device contacts, camera, photo gallery, microphone, or storage files",
      "External web browsing history or third-party web tracking",
      "Advertising IDs (the application contains zero commercial ads or behavioral trackers)",
    ],
    legalBasesTitle: "3. Legal Basis for Processing",
    legalBasesItems: [
      "Legitimate Interest (Art. 6.1.f GDPR): providing public utility weather and civil protection alert data for public safety.",
      "User Consent (Art. 6.1.a GDPR): for optional real-time GPS location and push notification delivery.",
    ],
    thirdPartyTitle: "4. Third-Party Service Providers",
    thirdPartyItems: [
      {
        name: "Firebase Cloud Messaging (Google LLC)",
        desc: "Used to deliver civil protection push alerts. Google receives an anonymous device push token.",
        linkText: "Firebase Privacy Support",
        linkUrl: "https://firebase.google.com/support/privacy",
      },
      {
        name: "Firebase Crashlytics (Google LLC)",
        desc: "Automated anonymous crash reports (device model, OS version, exception stack trace) to fix crashes.",
        linkText: "Crashlytics Data Retention",
        linkUrl: "https://firebase.google.com/terms/crashlytics",
      },
      {
        name: "Firebase App Check (Google LLC)",
        desc: "Verifies backend API integrity with Play Integrity (Android) and App Attest (iOS).",
      },
      {
        name: "OpenStreetMap Foundation",
        desc: "Interactive map visualization downloads cartographic tiles directly from OpenStreetMap servers.",
        linkText: "OSM Privacy Policy",
        linkUrl: "https://wiki.osmfoundation.org/wiki/Privacy_Policy",
      },
    ],
    retentionTitle: "5. Data Retention Periods",
    retentionHeaders: { col1: "Data Category", col2: "Retention Schedule" },
    retentionData: [
      {
        data: "Saved municipalities and UI preferences",
        duration: "Kept locally on device until app uninstallation or manual removal",
      },
      {
        data: "FCM notification token",
        duration: "Retained until app uninstallation or notification permission revocation",
      },
      {
        data: "Crash diagnostics",
        duration: "Maximum 90 days (standard Firebase Crashlytics retention)",
      },
      {
        data: "GPS coordinates",
        duration: "Not stored on servers; processed in real-time only on the device",
      },
    ],
    securityTitle: "6. Security Measures",
    securityItems: [
      "HTTPS / TLS 1.3 end-to-end encrypted transmission for all client-backend traffic.",
      "Operating system sandboxing and encrypted local key storage on device.",
      "DDoS mitigation, rate limiting, and cryptographic device attestation via App Check.",
      "Isolated server backend credentials and private database subnet.",
    ],
    rightsTitle: "7. User Rights under GDPR (Arts. 15-22)",
    rightsIntro: "Under the EU General Data Protection Regulation (GDPR), you possess the following rights:",
    rightsList: [
      "Right of Access (Art. 15) to your personal data.",
      "Right to Rectification (Art. 16) of inaccurate information.",
      "Right to Erasure / Right to be Forgotten (Art. 17).",
      "Right to Restriction of Processing (Art. 18) and Right to Object (Art. 21).",
      "Right to Data Portability (Art. 20) in a structured, machine-readable format.",
      "Right to Withdraw Consent (Art. 7) at any time for notifications or GPS.",
    ],
    rightsContact: "To exercise any GDPR rights, send a written request to:",
    rightsGarante:
      "You also have the right to lodge a complaint with the Italian Data Protection Authority (Garante per la Protezione dei Dati Personali — www.garanteprivacy.it).",
    transferTitle: "8. International Data Transfers",
    transferText:
      "Firebase cloud services provided by Google LLC adhere to the EU-U.S. Data Privacy Framework, ensuring an adequate level of data protection in compliance with Article 45 GDPR.",
    minorsTitle: "9. Protection of Minors",
    minorsText:
      "The app is not directed to children under 14. If a parent or guardian becomes aware that personal data has been transmitted, please contact us for immediate deletion.",
    changesTitle: "10. Policy Changes",
    changesText:
      "We reserve the right to modify this Privacy Policy. Substantial amendments will be notified through the app and updated on this page.",
    contactsTitle: "11. Corporate Details & Contacts",
  },
}

const AllertaItaliaPrivacyPage: React.FC<PageProps> = () => {
  const [currentLang, setCurrentLang] = useState<SupportedPrivacyLang>("it")

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const userLang = navigator.language?.slice(0, 2).toLowerCase()
      if (userLang === "en") {
        setCurrentLang("en")
      } else {
        setCurrentLang("it")
      }
    }
  }, [])

  const langKey = currentLang === "en" ? "en" : "it"
  const content = policyData[langKey]

  const getRequirementBadgeStyle = (req: string) => {
    if (req === "Necessario" || req === "Required") {
      return {
        background: "rgba(59, 130, 246, 0.15)",
        color: "#60a5fa",
        border: "1px solid rgba(59, 130, 246, 0.3)",
      }
    }
    if (req === "Facoltativo" || req === "Optional") {
      return {
        background: "rgba(245, 158, 11, 0.15)",
        color: "#fbbf24",
        border: "1px solid rgba(245, 158, 11, 0.3)",
      }
    }
    return {
      background: "rgba(16, 185, 129, 0.15)",
      color: "#34d399",
      border: "1px solid rgba(16, 185, 129, 0.3)",
    }
  }

  return (
    <LanguageProvider>
      <Layout>
        <Navbar
          mode="allertaitalia-privacy"
          privacyLang={currentLang}
          setPrivacyLang={setCurrentLang}
        />

        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            padding: "100px 20px 80px",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          {/* Back Button */}
          <div style={{ marginBottom: "28px" }}>
            <Link
              to="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--accent-primary)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                padding: "8px 16px",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--glass-border)",
                backdropFilter: "blur(8px)",
                transition: "all 0.2s ease",
              }}
            >
              <ArrowLeft size={16} />
              {currentLang === "en" ? "Back to Portfolio" : "Torna al Portfolio"}
            </Link>
          </div>

          {/* Header Banner */}
          <div
            className="glass-card"
            style={{
              padding: "36px",
              marginBottom: "32px",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(255, 152, 0, 0.25)",
              background:
                "linear-gradient(135deg, rgba(255, 152, 0, 0.08) 0%, rgba(15, 23, 42, 0.6) 100%)",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, rgba(255, 152, 0, 0.25) 0%, rgba(245, 158, 11, 0.1) 100%)",
                  border: "1px solid rgba(255, 152, 0, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ff9800",
                  flexShrink: 0,
                  boxShadow: "0 8px 24px rgba(255, 152, 0, 0.15)",
                }}
              >
                <Shield size={28} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "8px" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "4px 10px",
                      borderRadius: "20px",
                      background: "rgba(255, 152, 0, 0.15)",
                      border: "1px solid rgba(255, 152, 0, 0.3)",
                      color: "#ff9800",
                      fontSize: "12px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Protezione Civile Open Data
                  </span>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: "20px",
                      background: "rgba(16, 185, 129, 0.15)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      color: "#34d399",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    GDPR Compliant
                  </span>
                </div>
                <h1
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    margin: "0 0 6px 0",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {content.title}
                </h1>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    margin: "0 0 10px 0",
                  }}
                >
                  {content.subtitle}
                </p>
                <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "13px" }}>
                  {content.lastUpdated}
                </p>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {/* 1. Titolare del Trattamento */}
            <div className="glass-card" style={{ padding: "28px" }}>
              <h2
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "18px",
                  fontWeight: 600,
                  margin: "0 0 16px 0",
                  color: "#ff9800",
                }}
              >
                <Building2 size={20} />
                {content.controllerTitle}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.7", margin: "0 0 16px 0" }}>
                {currentLang === "en"
                  ? "The data controller under Regulation (EU) 2016/679 (GDPR) is:"
                  : "Il titolare del trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679 (GDPR) è:"}
              </p>
              <div
                style={{
                  background: "rgba(255, 152, 0, 0.05)",
                  borderLeft: "4px solid #ff9800",
                  padding: "18px 20px",
                  borderRadius: "0 12px 12px 0",
                  color: "var(--text-primary)",
                  fontSize: "14px",
                  lineHeight: "1.8",
                }}
              >
                <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>
                  {content.controllerCompany}
                </div>
                <div>{content.controllerAddress}</div>
                <div style={{ marginTop: "8px", display: "flex", flexWrap: "wrap", gap: "16px" }}>
                  <a
                    href={`mailto:${content.controllerContactEmail}`}
                    style={{ color: "#ff9800", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  >
                    <Mail size={14} />
                    {content.controllerContactEmail}
                  </a>
                  <a
                    href={`mailto:${content.controllerPrivacyEmail}`}
                    style={{ color: "#ff9800", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  >
                    <Lock size={14} />
                    {content.controllerPrivacyEmail}
                  </a>
                  <a
                    href={content.controllerWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#ff9800", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  >
                    <Globe size={14} />
                    allertaitalia.tosqui.it
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Dati Raccolti */}
            <div className="glass-card" style={{ padding: "28px" }}>
              <h2
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "18px",
                  fontWeight: 600,
                  margin: "0 0 14px 0",
                  color: "#ff9800",
                }}
              >
                <Database size={20} />
                {content.tableTitle}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.7", margin: "0 0 16px 0" }}>
                {currentLang === "en"
                  ? "Allerta Italia strictly collects only technical data required for emergency alert notification delivery:"
                  : "L'app Allerta Italia raccoglie esclusivamente i dati strettamente necessari al funzionamento del servizio di allertamento:"}
              </p>

              {/* Data Table */}
              <div style={{ overflowX: "auto", margin: "16px 0" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", minWidth: "550px" }}>
                  <thead>
                    <tr style={{ background: "rgba(255, 152, 0, 0.08)", borderBottom: "2px solid var(--glass-border)" }}>
                      <th style={{ padding: "12px 14px", textAlign: "left", color: "#ff9800", fontWeight: 600 }}>
                        {content.tableHeaders.col1}
                      </th>
                      <th style={{ padding: "12px 14px", textAlign: "left", color: "#ff9800", fontWeight: 600 }}>
                        {content.tableHeaders.col2}
                      </th>
                      <th style={{ padding: "12px 14px", textAlign: "left", color: "#ff9800", fontWeight: 600 }}>
                        {content.tableHeaders.col3}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.tableData.map((row, idx) => (
                      <tr
                        key={idx}
                        style={{
                          borderBottom: "1px solid var(--glass-border)",
                          background: idx % 2 === 0 ? "transparent" : "rgba(255, 255, 255, 0.02)",
                        }}
                      >
                        <td style={{ padding: "12px 14px", color: "var(--text-primary)", fontWeight: 500 }}>
                          {row.data}
                        </td>
                        <td style={{ padding: "12px 14px", color: "var(--text-secondary)" }}>
                          {row.purpose}
                        </td>
                        <td style={{ padding: "12px 14px" }}>
                          <span
                            style={{
                              padding: "4px 10px",
                              borderRadius: "12px",
                              fontSize: "11px",
                              fontWeight: 600,
                              display: "inline-block",
                              ...getRequirementBadgeStyle(row.requirement),
                            }}
                          >
                            {row.requirement}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 2.1 Dati NON Raccolti */}
              <div
                style={{
                  marginTop: "24px",
                  padding: "18px 20px",
                  borderRadius: "12px",
                  background: "rgba(239, 68, 68, 0.06)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                }}
              >
                <h3
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "15px",
                    fontWeight: 600,
                    margin: "0 0 8px 0",
                    color: "#f87171",
                  }}
                >
                  <EyeOff size={18} />
                  {content.nonCollectedTitle}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "13px", margin: "0 0 10px 0" }}>
                  {content.nonCollectedIntro}
                </p>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--text-secondary)", fontSize: "13px", lineHeight: "1.7" }}>
                  {content.nonCollectedItems.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: "4px" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. Base Giuridica */}
            <div className="glass-card" style={{ padding: "28px" }}>
              <h2
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "18px",
                  fontWeight: 600,
                  margin: "0 0 14px 0",
                  color: "#ff9800",
                }}
              >
                <Scale size={20} />
                {content.legalBasesTitle}
              </h2>
              <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.8" }}>
                {content.legalBasesItems.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: "8px" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Servizi di Terze Parti */}
            <div className="glass-card" style={{ padding: "28px" }}>
              <h2
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "18px",
                  fontWeight: 600,
                  margin: "0 0 16px 0",
                  color: "#ff9800",
                }}
              >
                <Globe size={20} />
                {content.thirdPartyTitle}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {content.thirdPartyItems.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "16px 18px",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid var(--glass-border)",
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: "15px", color: "var(--text-primary)", marginBottom: "4px" }}>
                      {item.name}
                    </div>
                    <p style={{ margin: 0, color: "var(--text-secondary)", fontSize: "13px", lineHeight: "1.6" }}>
                      {item.desc}
                    </p>
                    {item.linkUrl && item.linkText && (
                      <a
                        href={item.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          color: "#ff9800",
                          fontSize: "12px",
                          marginTop: "8px",
                          textDecoration: "none",
                        }}
                      >
                        {item.linkText}
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Conservazione dei Dati */}
            <div className="glass-card" style={{ padding: "28px" }}>
              <h2
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "18px",
                  fontWeight: 600,
                  margin: "0 0 14px 0",
                  color: "#ff9800",
                }}
              >
                <Lock size={20} />
                {content.retentionTitle}
              </h2>
              <div style={{ overflowX: "auto", margin: "16px 0" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", minWidth: "480px" }}>
                  <thead>
                    <tr style={{ background: "rgba(255, 152, 0, 0.08)", borderBottom: "2px solid var(--glass-border)" }}>
                      <th style={{ padding: "12px 14px", textAlign: "left", color: "#ff9800", fontWeight: 600 }}>
                        {content.retentionHeaders.col1}
                      </th>
                      <th style={{ padding: "12px 14px", textAlign: "left", color: "#ff9800", fontWeight: 600 }}>
                        {content.retentionHeaders.col2}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.retentionData.map((row, idx) => (
                      <tr
                        key={idx}
                        style={{
                          borderBottom: "1px solid var(--glass-border)",
                          background: idx % 2 === 0 ? "transparent" : "rgba(255, 255, 255, 0.02)",
                        }}
                      >
                        <td style={{ padding: "12px 14px", color: "var(--text-primary)", fontWeight: 500 }}>
                          {row.data}
                        </td>
                        <td style={{ padding: "12px 14px", color: "var(--text-secondary)" }}>
                          {row.duration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6. Sicurezza dei Dati */}
            <div className="glass-card" style={{ padding: "28px" }}>
              <h2
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "18px",
                  fontWeight: 600,
                  margin: "0 0 14px 0",
                  color: "#ff9800",
                }}
              >
                <Shield size={20} />
                {content.securityTitle}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {content.securityItems.map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={16} style={{ color: "#34d399", marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Diritti dell'Utente */}
            <div className="glass-card" style={{ padding: "28px" }}>
              <h2
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "18px",
                  fontWeight: 600,
                  margin: "0 0 14px 0",
                  color: "#ff9800",
                }}
              >
                <Scale size={20} />
                {content.rightsTitle}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", margin: "0 0 12px 0" }}>
                {content.rightsIntro}
              </p>
              <ul style={{ margin: "0 0 18px 0", paddingLeft: "20px", color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.8" }}>
                {content.rightsList.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: "6px" }}>
                    {item}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  background: "rgba(59, 130, 246, 0.08)",
                  borderLeft: "4px solid #3b82f6",
                  padding: "14px 18px",
                  borderRadius: "0 10px 10px 0",
                  fontSize: "13px",
                  color: "var(--text-primary)",
                  lineHeight: "1.7",
                }}
              >
                <p style={{ margin: "0 0 6px 0" }}>
                  {content.rightsContact}{" "}
                  <a href="mailto:privacy@allertaitalia.tosqui.it" style={{ color: "#60a5fa", fontWeight: 600 }}>
                    privacy@allertaitalia.tosqui.it
                  </a>{" "}
                  oppure{" "}
                  <a href="mailto:asquillace.seclab@gmail.com" style={{ color: "#60a5fa", fontWeight: 600 }}>
                    asquillace.seclab@gmail.com
                  </a>
                </p>
                <p style={{ margin: 0, color: "var(--text-secondary)" }}>
                  {content.rightsGarante}
                </p>
              </div>
            </div>

            {/* 8, 9, 10: Trasferimento, Minori, Modifiche */}
            <div className="glass-card" style={{ padding: "28px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 12px 0", color: "#ff9800" }}>
                {content.transferTitle}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.7", margin: "0 0 20px 0" }}>
                {content.transferText}
              </p>

              <h2 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 12px 0", color: "#ff9800" }}>
                {content.minorsTitle}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.7", margin: "0 0 20px 0" }}>
                {content.minorsText}
              </p>

              <h2 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 12px 0", color: "#ff9800" }}>
                {content.changesTitle}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>
                {content.changesText}
              </p>
            </div>

            {/* 11. Contatti */}
            <div
              className="glass-card"
              style={{
                padding: "28px",
                border: "1px solid rgba(255, 152, 0, 0.3)",
                background: "linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(15, 23, 42, 0.4) 100%)",
              }}
            >
              <h2 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 14px 0", color: "#ff9800" }}>
                {content.contactsTitle}
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                <div>
                  <div style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "2px" }}>
                    Titolare del Trattamento
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)" }}>
                    Artaud S.r.l.
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                    Rende (CS), Italia
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "2px" }}>
                    Ufficio Privacy & DPO
                  </div>
                  <a
                    href="mailto:privacy@allertaitalia.tosqui.it"
                    style={{ fontSize: "14px", color: "#ff9800", textDecoration: "none", fontWeight: 500 }}
                  >
                    privacy@allertaitalia.tosqui.it
                  </a>
                  <div style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                    Risposta entro 30 giorni
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "2px" }}>
                    Sito Ufficiale
                  </div>
                  <a
                    href="https://allertaitalia.tosqui.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "14px", color: "#ff9800", textDecoration: "none", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "4px" }}
                  >
                    allertaitalia.tosqui.it
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer & Cross-links */}
          <footer
            style={{
              textAlign: "center",
              color: "var(--text-muted)",
              fontSize: "13px",
              marginTop: "48px",
              paddingTop: "24px",
              borderTop: "1px solid var(--glass-border)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <Link to="/allertaitalia/privacy" style={{ color: "#ff9800", textDecoration: "none", fontWeight: 500 }}>
                Informativa Privacy
              </Link>
              <span>•</span>
              <Link to="/allertaitalia/terms" style={{ color: "#ff9800", textDecoration: "none", fontWeight: 500 }}>
                Termini di Servizio
              </Link>
              <span>•</span>
              <a
                href="https://allertaitalia.tosqui.it"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ff9800", textDecoration: "none", fontWeight: 500 }}
              >
                allertaitalia.tosqui.it
              </a>
              <span>•</span>
              <Link to="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
                Portfolio Antonio Squillace
              </Link>
            </div>
            <p style={{ margin: 0 }}>
              © 2026 Artaud S.r.l. — Allerta Italia. Tutti i diritti riservati.
            </p>
          </footer>
        </div>
      </Layout>
    </LanguageProvider>
  )
}

export default AllertaItaliaPrivacyPage

export const Head: HeadFC = () => (
  <>
    <title>Informativa sulla Privacy — Allerta Italia</title>
    <meta
      name="description"
      content="Informativa sulla privacy dell'app Allerta Italia - Sistema di Allertamento della Protezione Civile conforme GDPR."
    />
  </>
)
