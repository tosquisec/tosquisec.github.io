import * as React from "react"
import { useState, useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Navbar, { SupportedPrivacyLang } from "../../components/Navbar"
import { LanguageProvider } from "../../context/LanguageContext"
import {
  FileText,
  Shield,
  AlertTriangle,
  ArrowLeft,
  Scale,
  Building2,
  Lock,
  ExternalLink,
  Info,
  Radio,
  CheckCircle2,
} from "lucide-react"

interface Section {
  title: string
  alert?: string
  paragraphs?: string[]
  list?: string[]
}

interface OpenDataSource {
  entity: string
  license: string
  licenseUrl: string
  desc: string
}

interface Content {
  title: string
  subtitle: string
  lastUpdated: string
  criticalWarningTitle: string
  criticalWarningText: string
  criticalWarningSubtext: string
  sections: Section[]
  openDataTitle: string
  openDataIntro: string
  openDataSources: OpenDataSource[]
  openDataDisclaimer: string
  corporateTitle: string
  corporateCompany: string
  corporateAddress: string
  corporateContactEmail: string
  corporatePrivacyEmail: string
  corporateWebsite: string
}

const termsData: Record<"it" | "en", Content> = {
  it: {
    title: "Termini di Servizio",
    subtitle: "Allerta Italia — Sistema di Allertamento della Protezione Civile",
    lastUpdated: "Ultimo aggiornamento: Aprile 2026",
    criticalWarningTitle: "AVVERTENZA CRITICA — NON SOSTITUISCE I CANALI UFFICIALI",
    criticalWarningText:
      "L'applicazione Allerta Italia è uno strumento INFORMATIVO E COMPLEMENTARE. NON sostituisce in alcun modo i canali ufficiali di allertamento della Protezione Civile, le comunicazioni delle autorità competenti (Prefetture, Sindaci, Dipartimento Protezione Civile), o i sistemi di allarme pubblico di diffusione (IT-alert).",
    criticalWarningSubtext:
      "In situazioni di emergenza o pericolo imminente, l'utente DEVE SEMPRE fare riferimento esclusivo alle direttive e agli ordini impartiti dalle autorità di soccorso e dai canali radio-televisivi istituzionali.",
    sections: [
      {
        title: "1. Accettazione dei Termini",
        paragraphs: [
          "Scaricando, installando, aprendo o utilizzando l'applicazione mobile \"Allerta Italia\" (di seguito denominata \"l'App\"), l'utente dichiara di aver letto, compreso e accettato senza riserve i presenti Termini di Servizio.",
          "Qualora l'utente non intenda accettare integralmente le presenti condizioni d'uso, è tenuto a non installare o a cessare immediatamente l'utilizzo dell'App disinstallandola dal proprio dispositivo.",
        ],
      },
      {
        title: "2. Descrizione e Scopo del Servizio",
        paragraphs: [
          "Allerta Italia è un'applicazione mobile sviluppata per agevolare la consultazione tempestiva e l'accesso pubblico a informazioni aperte relative a:",
        ],
        list: [
          "Bollettini di vigilanza meteorologica nazionale emessi giornalmente",
          "Bollettini di criticità idrogeologica e idraulica nazionale",
          "Dati di monitoraggio sismico e localizzazione epicentrale degli eventi tellurici in tempo reale",
          "Cartografia del territorio e piani comunali di Protezione Civile ove disponibili",
        ],
      },
      {
        title: "3. Natura del Servizio e Notifiche Push",
        paragraphs: [
          "L'App aggrega e rielabora flussi di dati pubblici istituzionali. L'utente riconosce espressamente che:",
        ],
        list: [
          "Le informazioni fornite dall'App hanno carattere puramente informativo e conoscitivo e non costituiscono un servizio di emergenza o di soccorso pubblico.",
          "Il fornitore non può garantire in modo assoluto la tempestività, l'infallibilità, l'accuratezza o la continuità delle informazioni fornite.",
          "La ricezione delle notifiche push può subire ritardi, mancate consegne o differimenti dovuti a congestione di rete, politiche di risparmio energetico dei singoli produttori di smartphone o malfunzionamenti delle piattaforme push dei sistemi operativi.",
        ],
      },
      {
        title: "4. Limitazione di Responsabilità",
        paragraphs: [
          "L'App viene fornita dal gestore nello stato di fatto e di diritto in cui si trova: \"COSÌ COM'È\" (\"AS-IS\") e \"COME DISPONIBILE\" (\"AS-AVAILABLE\"), senza alcun tipo di garanzia esplicita o implicita.",
          "Nei limiti massimi consentiti dalle norme inderogabili di legge applicabili, il fornitore dell'App:",
        ],
        list: [
          "Non risponde di danni diretti, indiretti, accidentali, punitivi o consequenziali derivanti dall'utilizzo o dall'impossibilità di utilizzo dell'App.",
          "Non risponde delle decisioni, dei comportamenti o delle omissioni posti in essere dall'utente o da terzi basandosi sui dati visualizzati nell'App.",
          "Non risponde per allerte meteorologiche o sismiche ritardate, mancate, incomplete o non recapitate sul dispositivo.",
          "Non garantisce la disponibilità continuativa o ininterrotta dei server o la tempestività di sincronizzazione rispetto alle fonti primarie.",
        ],
      },
      {
        title: "5. Obblighi e Condotta dell'Utente",
        paragraphs: [
          "L'utente si impegna a utilizzare l'App in piena conformità alla legge e per fini strettamente personali:",
        ],
        list: [
          "È vietato tentare accessi non autorizzati all'infrastruttura backend, ai database o ai sistemi informatici dell'App.",
          "È vietata qualsiasi attività di scraping automatizzato, estrazione massiva di dati o reverse engineering del codice sorgente.",
          "È fatto espresso divieto di rivendere, ridistribuire a pagamento o commercializzare i dati e le funzionalità dell'App senza previa autorizzazione scritta.",
          "È vietato intraprendere azioni volte a sovraccaricare, aggirare le protezioni crittografiche o disturbare il regolare funzionamento del servizio.",
        ],
      },
      {
        title: "7. Disponibilità del Servizio e Sospensioni",
        paragraphs: [
          "Il fornitore si riserva la facoltà, a propria esclusiva discrezione e senza necessità di preavviso, di:",
        ],
        list: [
          "Sospendere temporaneamente l'erogazione per interventi tecnici di manutenzione o sicurezza.",
          "Modificare, arricchire, limitare o interrompere del tutto l'accesso a determinate funzionalità o all'intero servizio.",
          "Revocare o limitare l'accesso ai dispositivi che pongano in essere comportamenti anomali o lesivi dell'infrastruttura.",
        ],
      },
      {
        title: "8. Modifiche ai Termini di Servizio",
        paragraphs: [
          "I presenti Termini potranno essere aggiornati periodicamente dal fornitore per rispecchiare modifiche normative o implementazioni tecniche. Le variazioni sostanziali saranno rese note tramite notifica all'interno dell'applicazione o sulla presente pagina.",
          "L'utilizzo continuato dell'App a seguito della pubblicazione delle modifiche comporta l'integrale accettazione dei Termini aggiornati.",
        ],
      },
      {
        title: "9. Legge Applicabile e Foro Competente",
        paragraphs: [
          "I presenti Termini di Servizio sono regolati e devono essere interpretati in ogni loro parte in conformità alla Legge Italiana.",
          "Per ogni controversia derivante dall'interpretazione, validità o esecuzione dei presenti Termini, la competenza territoriale esclusiva è attribuita al Foro di Roma, fatte salve le disposizioni inderogabili di legge a favore del consumatore (Codice del Consumo).",
        ],
      },
    ],
    openDataTitle: "6. Proprietà Intellettuale e Licenze Open Data Istituzionali",
    openDataIntro:
      "L'architettura software, il codice sorgente, l'interfaccia utente, i marchi e i contenuti originali dell'App sono di esclusiva proprietà di Artaud S.r.l. I dati ambientali, meteorologici, sismici e cartografici sono di titolarità dei rispettivi enti e riutilizzati secondo rigorose licenze Open Data:",
    openDataSources: [
      {
        entity: "Dipartimento della Protezione Civile (Presidenza del Consiglio dei Ministri)",
        license: "Creative Commons Attribuzione 4.0 Internazionale (CC-BY 4.0)",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/deed.it",
        desc: "Bollettini di vigilanza meteorologica nazionale, bollettini di criticità idrogeologica e idraulica nazionale, mappe di allertamento.",
      },
      {
        entity: "Istituto Nazionale di Geofisica e Vulcanologia (INGV)",
        license: "Creative Commons Attribuzione 4.0 Internazionale (CC-BY 4.0)",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/deed.it",
        desc: "Banca dati ISIDe (Italian Seismological Instrumental and Parametric Database), dati epicentrali e magnitudo eventi tellurici.",
      },
      {
        entity: "OpenStreetMap Foundation (OSM)",
        license: "Open Database License (ODbL)",
        licenseUrl: "https://opendatacommons.org/licenses/odbl/",
        desc: "Layer cartografici e tile territoriali, © collaboratori di OpenStreetMap.",
      },
    ],
    openDataDisclaimer:
      "IMPORTANTE: La visualizzazione e la rielaborazione dei dati pubblici nell'App non implica in alcun modo associazione, approvazione, patrocinio, affiliazione, mandato o autorizzazione ufficiale dell'App da parte della Presidenza del Consiglio dei Ministri, del Dipartimento della Protezione Civile, dell'INGV o di qualunque altro ente della Pubblica Amministrazione italiana.",
    corporateTitle: "10. Contatti e Dati Societari",
    corporateCompany: "Artaud S.r.l.",
    corporateAddress: "Sede Legale: Rende (CS), Italia",
    corporateContactEmail: "asquillace.seclab@gmail.com",
    corporatePrivacyEmail: "privacy@allertaitalia.tosqui.it",
    corporateWebsite: "https://allertaitalia.tosqui.it",
  },
  en: {
    title: "Terms of Service",
    subtitle: "Allerta Italia — Civil Protection Early Warning System",
    lastUpdated: "Last updated: April 2026",
    criticalWarningTitle: "CRITICAL WARNING — DOES NOT REPLACE OFFICIAL EMERGENCY CHANNELS",
    criticalWarningText:
      "Allerta Italia is strictly an INFORMATIVE AND COMPLEMENTARY tool. It DOES NOT REPLACE under any circumstance the official civil protection early warning channels, official bulletins from competent authorities (Prefectures, Mayors, Department of Civil Protection), or national public broadcast warning systems (IT-alert).",
    criticalWarningSubtext:
      "In imminent danger or active disaster situations, users MUST ALWAYS rely exclusively on emergency instructions issued directly by rescue authorities, first responders, and official broadcast alerts.",
    sections: [
      {
        title: "1. Acceptance of Terms",
        paragraphs: [
          "By downloading, installing, accessing, or using the mobile application \"Allerta Italia\" (hereafter \"the App\"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.",
          "If you do not agree to all terms and conditions set forth herein, you must immediately refrain from downloading, accessing, or using the App.",
        ],
      },
      {
        title: "2. Service Description",
        paragraphs: [
          "Allerta Italia is a mobile application developed to facilitate quick public access to open data regarding:",
        ],
        list: [
          "Daily national weather surveillance bulletins",
          "National hydrogeological and hydraulic hazard alerts",
          "Real-time seismic activity and earthquake epicenter data",
          "Territorial mapping and municipal emergency plans where publicly available",
        ],
      },
      {
        title: "3. Nature of Service & Push Notifications",
        paragraphs: [
          "The App aggregates and restructures institutional open data. You expressly agree that:",
        ],
        list: [
          "Information delivered is for general informational awareness only and does not constitute an official emergency dispatch service.",
          "The provider cannot guarantee zero latency, absolute accuracy, or unbroken continuity of data feeds.",
          "Push notifications are subject to potential delay or dropped packets resulting from carrier network load, device battery saver policies, or third-party operating system notification queues.",
        ],
      },
      {
        title: "4. Limitation of Liability",
        paragraphs: [
          "The App is provided \"AS-IS\" and \"AS-AVAILABLE\" without warranty of any kind, whether express, statutory, or implied.",
          "To the maximum extent permitted by applicable mandatory law, the provider:",
        ],
        list: [
          "Shall not be liable for direct, indirect, incidental, or consequential damages resulting from the use or inability to use the App.",
          "Shall bear no responsibility for operational or personal decisions made by users based on information shown within the App.",
          "Shall not be held liable for missed, delayed, or incomplete alert delivery.",
          "Makes no guarantee of uninterrupted server availability or continuous synchronization with upstream data publishers.",
        ],
      },
      {
        title: "5. User Conduct and Responsibilities",
        paragraphs: [
          "Users agree to utilize the App in compliance with law and for lawful personal use:",
        ],
        list: [
          "Unauthorized access to backend servers, databases, or API infrastructure is strictly prohibited.",
          "Automated scraping, bulk downloading, or reverse engineering of software assets is prohibited.",
          "Commercial redistribution, resale, or sublicensing of the App's data without prior written permission is strictly forbidden.",
          "Interfering with server performance or bypassing cryptographic App Check tokens is prohibited.",
        ],
      },
      {
        title: "7. Service Availability & Termination",
        paragraphs: [
          "The provider reserves the right to:",
        ],
        list: [
          "Temporarily pause service for maintenance, security patching, or infrastructure upgrades.",
          "Update, modify, or permanently discontinue features or the application at any time.",
          "Restrict or revoke access from devices displaying abnormal, abusive, or automated request patterns.",
        ],
      },
      {
        title: "8. Amendments to Terms",
        paragraphs: [
          "We reserve the right to revise these Terms at our discretion. Significant modifications will be communicated via in-app notice or published directly to this page.",
          "Your continued use of the App following posted updates constitutes acceptance of the modified Terms.",
        ],
      },
      {
        title: "9. Governing Law and Jurisdiction",
        paragraphs: [
          "These Terms are governed by and construed under the laws of Italy.",
          "Any dispute arising from or related to the App shall be subject to the exclusive jurisdiction of the Courts of Rome (Italy), without prejudice to mandatory statutory consumer protections.",
        ],
      },
    ],
    openDataTitle: "6. Intellectual Property & Institutional Open Data Licenses",
    openDataIntro:
      "All proprietary software architecture, source code, visual UI design, and logos are the sole property of Artaud S.r.l. Environmental and alert data remain the intellectual property of their respective public institutions, redistributed under Open Data licenses:",
    openDataSources: [
      {
        entity: "Presidency of the Council of Ministers — Civil Protection Department",
        license: "Creative Commons Attribution 4.0 International (CC-BY 4.0)",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/deed.en",
        desc: "National weather hazard bulletins, hydrogeological risk assessments, and alert zone boundaries.",
      },
      {
        entity: "National Institute of Geophysics and Volcanology (INGV)",
        license: "Creative Commons Attribution 4.0 International (CC-BY 4.0)",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/deed.en",
        desc: "ISIDe database, seismic monitoring feeds, earthquake magnitude and epicenter locations.",
      },
      {
        entity: "OpenStreetMap Foundation (OSM)",
        license: "Open Database License (ODbL)",
        licenseUrl: "https://opendatacommons.org/licenses/odbl/",
        desc: "Cartographic tiles and map rendering, © OpenStreetMap contributors.",
      },
    ],
    openDataDisclaimer:
      "NON-AFFILIATION NOTICE: The redistribution and rendering of official public data inside this application does not imply any official affiliation, government endorsement, agency sponsorship, or legal mandate from the Presidency of the Council of Ministers, the Civil Protection Department, or INGV.",
    corporateTitle: "10. Corporate Details & Legal Contacts",
    corporateCompany: "Artaud S.r.l.",
    corporateAddress: "Registered Office: Rende (CS), Italy",
    corporateContactEmail: "asquillace.seclab@gmail.com",
    corporatePrivacyEmail: "privacy@allertaitalia.tosqui.it",
    corporateWebsite: "https://allertaitalia.tosqui.it",
  },
}

const AllertaItaliaTermsPage: React.FC<PageProps> = () => {
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
  const content = termsData[langKey]

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
                <FileText size={28} />
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
                      background: "rgba(59, 130, 246, 0.15)",
                      border: "1px solid rgba(59, 130, 246, 0.3)",
                      color: "#60a5fa",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    EULA & Termini d'Uso
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

          {/* CRITICAL WARNING ALERT CALLOUT */}
          <div
            style={{
              marginBottom: "28px",
              padding: "24px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(245, 158, 11, 0.08) 100%)",
              border: "1px solid rgba(239, 68, 68, 0.4)",
              boxShadow: "0 8px 32px rgba(239, 68, 68, 0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "rgba(239, 68, 68, 0.2)",
                  border: "1px solid rgba(239, 68, 68, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ef4444",
                  flexShrink: 0,
                }}
              >
                <AlertTriangle size={24} />
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    margin: "0 0 8px 0",
                    color: "#f87171",
                    letterSpacing: "0.2px",
                  }}
                >
                  {content.criticalWarningTitle}
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "var(--text-primary)",
                    margin: "0 0 8px 0",
                    fontWeight: 500,
                  }}
                >
                  {content.criticalWarningText}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.6",
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  {content.criticalWarningSubtext}
                </p>
              </div>
            </div>
          </div>

          {/* Sections List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {content.sections.slice(0, 5).map((sec, idx) => (
              <div key={idx} className="glass-card" style={{ padding: "28px" }}>
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
                  <Scale size={20} />
                  {sec.title}
                </h2>
                {sec.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx} style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.7", margin: "0 0 12px 0" }}>
                    {p}
                  </p>
                ))}
                {sec.list && (
                  <ul style={{ margin: "10px 0 0 0", paddingLeft: "20px", color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.7" }}>
                    {sec.list.map((item, lIdx) => (
                      <li key={lIdx} style={{ marginBottom: "6px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Section 6: Proprietà Intellettuale & Open Data */}
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
                <Radio size={20} />
                {content.openDataTitle}
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.7", margin: "0 0 18px 0" }}>
                {content.openDataIntro}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "20px" }}>
                {content.openDataSources.map((source, idx) => (
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
                      {source.entity}
                    </div>
                    <p style={{ margin: "0 0 6px 0", color: "var(--text-secondary)", fontSize: "13px", lineHeight: "1.6" }}>
                      {source.desc}
                    </p>
                    <a
                      href={source.licenseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        color: "#ff9800",
                        fontSize: "12px",
                        fontWeight: 500,
                        textDecoration: "none",
                      }}
                    >
                      Licenza: {source.license}
                      <ExternalLink size={12} />
                    </a>
                  </div>
                ))}
              </div>

              {/* Disclaimer Non Affiliazione */}
              <div
                style={{
                  padding: "14px 18px",
                  borderRadius: "10px",
                  background: "rgba(255, 152, 0, 0.06)",
                  borderLeft: "4px solid #ff9800",
                  fontSize: "13px",
                  lineHeight: "1.7",
                  color: "var(--text-secondary)",
                }}
              >
                {content.openDataDisclaimer}
              </div>
            </div>

            {/* Remaining sections (7, 8, 9) */}
            {content.sections.slice(5).map((sec, idx) => (
              <div key={idx} className="glass-card" style={{ padding: "28px" }}>
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
                  <Scale size={20} />
                  {sec.title}
                </h2>
                {sec.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx} style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.7", margin: "0 0 12px 0" }}>
                    {p}
                  </p>
                ))}
                {sec.list && (
                  <ul style={{ margin: "10px 0 0 0", paddingLeft: "20px", color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.7" }}>
                    {sec.list.map((item, lIdx) => (
                      <li key={lIdx} style={{ marginBottom: "6px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* 10. Contatti e Dati Societari */}
            <div
              className="glass-card"
              style={{
                padding: "28px",
                border: "1px solid rgba(255, 152, 0, 0.3)",
                background: "linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(15, 23, 42, 0.4) 100%)",
              }}
            >
              <h2 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 14px 0", color: "#ff9800" }}>
                {content.corporateTitle}
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                <div>
                  <div style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "2px" }}>
                    Fornitore & Titolare
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)" }}>
                    {content.corporateCompany}
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                    {content.corporateAddress}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "2px" }}>
                    Email Legale & Supporto
                  </div>
                  <a
                    href={`mailto:${content.corporatePrivacyEmail}`}
                    style={{ fontSize: "14px", color: "#ff9800", textDecoration: "none", fontWeight: 500 }}
                  >
                    {content.corporatePrivacyEmail}
                  </a>
                  <div style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                    {content.corporateContactEmail}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "2px" }}>
                    Sito Web Ufficiale
                  </div>
                  <a
                    href={content.corporateWebsite}
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

export default AllertaItaliaTermsPage

export const Head: HeadFC = () => (
  <>
    <title>Termini di Servizio — Allerta Italia</title>
    <meta
      name="description"
      content="Termini e condizioni d'uso dell'applicazione mobile Allerta Italia - Sistema di Allertamento della Protezione Civile."
    />
  </>
)
