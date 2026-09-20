import * as React from "react"
import { useState, useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Navbar from "../../components/Navbar"
import { LanguageProvider } from "../../context/LanguageContext"
import { Shield, ArrowLeft, Lock, FileText } from "lucide-react"

type SupportedLang = "it" | "en" | "de" | "fr" | "es"

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

const policyData: Record<SupportedLang, Content> = {
  it: {
    title: "Cartongessista — Informativa sulla Privacy (Privacy Policy)",
    lastUpdated: "Ultimo aggiornamento: Settembre 2026 · Versione 1.0.0",
    sections: [
      {
        title: "1. Modello di Sicurezza Zero-Cloud e Conservazione Sandbox",
        paragraphs: [
          "L'applicazione Cartongessista (GYPSO) è progettata nativamente secondo il paradigma \"Zero-Cloud & Zero-Knowledge\" e rispetta il principio della Privacy by Design (Art. 25 GDPR).",
          "Tutti i dati inseriti dall'utente (planimetrie CAD 2D, rilievi metrici, distinte materiali, anagrafiche clienti, listini prezzi e preventivi PDF) vengono memorizzati ESCLUSIVAMENTE all'interno dello storage locale protetto (sandbox) del dispositivo.",
          "L'applicazione non comunica con alcun server proprietario per la sincronizzazione dei dati. Nessun dato di cantiere viene trasmesso o archiviato su cloud esterni.",
        ],
      },
      {
        title: "2. Firme Digitali su Touchscreen (Dati Grafometrici)",
        paragraphs: [
          "L'applicazione consente l'acquisizione della firma autografa su touchscreen per la sottoscrizione dei preventivi:",
        ],
        list: [
          "Il tracciato vettoriale della firma viene impiegato unicamente per essere impresso nel documento preventivo PDF generato sul dispositivo.",
          "Non viene registrato né analizzato alcun dato biometrico o dinamico (come velocità del tratto, angolo di scrittura o pressione).",
          "Le firme grafiche non vengono trasmesse a terzi e possono essere cancellate in qualsiasi momento eliminando il preventivo associato.",
        ],
      },
      {
        title: "3. Pubblicità e Consenso GDPR / Google UMP",
        paragraphs: [
          "Nella versione gratuita (Free), l'applicazione utilizza il servizio Google Mobile Ads (AdMob) per la visualizzazione di banner pubblicitari nella sola schermata Home passiva.",
        ],
        list: [
          "In conformità al Regolamento Generale sulla Protezione dei Dati (GDPR) e alla direttiva ePrivacy, agli utenti residenti nello Spazio Economico Europeo (SEE) viene richiesto il consenso esplicito prima di servire annunci personalizzati.",
          "Puoi modificare o revocare le tue preferenze di consenso in qualsiasi momento tramite il modulo di gestione consensi nelle Impostazioni dell'applicazione.",
          "La versione PRO / Premium rimuove definitivamente ogni forma di annuncio pubblicitario e disabilita ogni richiesta verso la rete pubblicitaria.",
        ],
      },
      {
        title: "4. Gestione Acquisti In-App e Sicurezza Finanziaria",
        paragraphs: [
          "Gli acquisti della licenza PRO (acquisto una tantum a vita) sono gestiti ed elaborati in modo sicuro tramite RevenueCat, Google Play Store ed Apple App Store.",
          "Nessun dato finanziario (numeri di carte di credito, conti correnti o coordinate bancarie) transita o viene mai memorizzato dall'applicazione. Tutti i pagamenti avvengono unicamente sulle infrastrutture certificate PCI-DSS di Google ed Apple.",
        ],
      },
      {
        title: "5. Misure di Sicurezza del Codice Sorgente e Protezione Dati",
        paragraphs: [
          "Per garantire l'integrità del software e proteggere i dati dell'utente:",
        ],
        list: [
          "Offuscamento del codice compilato per impedire manomissioni o reverse-engineering.",
          "Minificazione dei binari tramite R8 e regole ProGuard dedicate su Android.",
          "Nessun segreto, chiave crittografica o credenziale privata è inserita nel codice dell'app.",
        ],
      },
      {
        title: "6. Diritti dell'Utente (Art. 15, 17, 20 GDPR)",
        paragraphs: [
          "Poiché tutti i dati risiedono localmente nel tuo dispositivo:",
        ],
        list: [
          "Pieno controllo: hai la titolarità esclusiva ed il controllo diretto sui tuoi dati di lavoro.",
          "Diritto alla portabilità: puoi esportare l'intero archivio progetti in qualsiasi momento in formato standard (.zip e .cart).",
          "Diritto all'oblio e cancellazione: la disinstallazione dell'applicazione o la cancellazione dei dati dell'app nelle impostazioni di sistema rimuove istantaneamente e in modo irreversibile ogni dato dal dispositivo.",
        ],
      },
      {
        title: "7. Titolare del Trattamento e Contatti",
        paragraphs: [
          "Il Titolare del Trattamento per i dati inseriti nei propri progetti è l'utente utilizzatore (artigiano o impresa). Per quesiti sull'applicazione o sull'informativa privacy, puoi contattare lo sviluppatore all'indirizzo dev@tosqui.it.",
        ],
      },
    ],
  },
  en: {
    title: "Cartongessista — Privacy Policy",
    lastUpdated: "Last updated: September 2026 · Version 1.0.0",
    sections: [
      {
        title: "1. Zero-Cloud Security Model & Sandboxed Storage",
        paragraphs: [
          "Cartongessista (GYPSO) is architected on a strict \"Zero-Cloud & Zero-Knowledge\" paradigm, complying with the Privacy by Design principle (Art. 25 GDPR).",
          "All data entered by the user (2D CAD layouts, surface measurements, material bills, client lists, price catalogs, and PDF estimates) is stored EXCLUSIVELY in the device's sandboxed local memory.",
          "The application does not maintain a central backend server. No project data is ever transmitted or stored on external cloud infrastructure.",
        ],
      },
      {
        title: "2. Touchscreen Signatures (Graphometric Data)",
        paragraphs: [
          "The application supports handwritten signature capture on touchscreens to sign customer proposals:",
        ],
        list: [
          "The vector signature path is used solely for insertion into the locally generated PDF estimate.",
          "No biometric or dynamic traits (such as stroke pressure, velocity, or pen tilt) are captured or evaluated.",
          "Signatures are never shared with third parties and can be deleted at any time by deleting the associated quote.",
        ],
      },
      {
        title: "3. Advertising & GDPR / Google UMP Consent",
        paragraphs: [
          "In the Free tier, the app utilizes Google Mobile Ads (AdMob) to display advertisements on the passive home screen only.",
        ],
        list: [
          "In compliance with the General Data Protection Regulation (GDPR) and the ePrivacy Directive, European Economic Area (EEA) users are requested explicit consent before personalized ads are displayed.",
          "Consent preferences may be reviewed or changed at any time via the consent form inside the application settings.",
          "Upgrading to the PRO / Premium tier permanently eliminates all advertisements and ad-network requests.",
        ],
      },
      {
        title: "4. In-App Purchases & Financial Security",
        paragraphs: [
          "Lifetime PRO license purchases are securely processed through RevenueCat, Google Play Store, and Apple App Store.",
          "No credit card or banking data is ever collected, seen, or stored by the application. All financial transactions are processed directly by Apple and Google under PCI-DSS standards.",
        ],
      },
      {
        title: "5. Source Code Hardening & Security Standards",
        paragraphs: [
          "To safeguard user safety and software integrity:",
        ],
        list: [
          "Release binaries are fully obfuscated to deter reverse engineering.",
          "Code shrinking and minification via R8 / ProGuard on Android.",
          "Zero private keys or sensitive credentials embedded in source code.",
        ],
      },
      {
        title: "6. User Rights (GDPR Art. 15, 17, 20)",
        paragraphs: [
          "Because all data remains on your physical device:",
        ],
        list: [
          "Full control: You retain complete ownership and sovereignty over your trade data.",
          "Data portability: You can export your entire project database at any time (.zip / .cart open JSON format).",
          "Right to erasure: Uninstalling the application immediately and irreversibly wipes all local application data.",
        ],
      },
      {
        title: "7. Data Controller & Support",
        paragraphs: [
          "The user (installer, contractor, or business entity) acts as the Data Controller for project records stored on their device. For questions regarding this policy, contact dev@tosqui.it.",
        ],
      },
    ],
  },
  de: {
    title: "Cartongessista — Datenschutzerklärung",
    lastUpdated: "Zuletzt aktualisiert: September 2026 · Version 1.0.0",
    sections: [
      {
        title: "1. Zero-Cloud Sicherheitsmodell & Lokale Speicherung",
        paragraphs: [
          "Cartongessista (GYPSO) folgt dem Prinzip \"Privacy by Design\" (Art. 25 DSGVO).",
          "Alle Benutzerdaten (CAD-Pläne, Flächenmaße, Materiallisten, Kundendaten und PDF-Angebote) verbleiben AUSSCHLIESSLICH lokal im geschützten Speicherbereich des Endgeräts.",
          "Es werden keinerlei Projektdaten an externe Server übertragen.",
        ],
      },
      {
        title: "2. Touchscreen-Unterschriften",
        paragraphs: [
          "Die auf dem Display erfasste Unterschrift dient ausschließlich dem Einbetten in das generierte PDF-Dokument. Es werden keine biometrischen Daten verarbeitet.",
        ],
      },
      {
        title: "3. Werbung & DSGVO / UMP",
        paragraphs: [
          "Die kostenlose Version nutzt Google Mobile Ads (AdMob) mit DSGVO-konformer Einwilligung für Nutzer im EWR. Die PRO-Version entfernt jegliche Werbung vollständig.",
        ],
      },
      {
        title: "4. In-App-Käufe",
        paragraphs: [
          "Zahlungen werden direkt über den Google Play Store oder den Apple App Store nach höchsten Sicherheitsstandards (PCI-DSS) abgewickelt.",
        ],
      },
      {
        title: "5. Rechte der Nutzer (DSGVO)",
        paragraphs: [
          "Nutzer können ihre Projekte jederzeit exportieren (.cart) oder durch Deinstallation der App rückstandslos vom Gerät löschen.",
        ],
      },
    ],
  },
  fr: {
    title: "Cartongessista — Politique de Confidentialité",
    lastUpdated: "Dernière mise à jour : Septembre 2026 · Version 1.0.0",
    sections: [
      {
        title: "1. Modèle Zero-Cloud et Stockage Local",
        paragraphs: [
          "Cartongessista (GYPSO) est conçue selon le principe de Privacy by Design (Art. 25 RGPD).",
          "Toutes les données (plans CAD, calculs de matériaux, fichiers clients et devis PDF) sont stockées EXCLUSIVEMENT en local dans l'environnement sécurisé de l'appareil.",
          "Aucune donnée de chantier n'est transmise à des serveurs externes.",
        ],
      },
      {
        title: "2. Signatures sur Écran Tactile",
        paragraphs: [
          "La signature manuscrite est enregistrée sous forme vectorielle pour figurer sur le devis PDF. Aucune donnée biométrique n'est analysée.",
        ],
      },
      {
        title: "3. Publicité et RGPD",
        paragraphs: [
          "La version gratuite affiche des bannières Google AdMob soumises au recueil préalable du consentement (RGPD/UMP). La version PRO désactive toute publicité.",
        ],
      },
      {
        title: "4. Achats In-App et Droits Utilisateurs",
        paragraphs: [
          "Les paiements sont gérés par Apple et Google. L'utilisateur peut exporter ses sauvegardes (.cart) ou effacer ses données à tout moment en désinstallant l'application.",
        ],
      },
    ],
  },
  es: {
    title: "Cartongessista — Política de Privacidad",
    lastUpdated: "Última actualización: Septiembre 2026 · Versión 1.0.0",
    sections: [
      {
        title: "1. Modelo Zero-Cloud y Almacenamiento Local",
        paragraphs: [
          "Cartongessista (GYPSO) está diseñada bajo el principio de Privacidad por Diseño (Art. 25 RGPD).",
          "Todos los datos de proyectos, mediciones CAD, presupuestos y clientes se conservan EXCLUSIVAMENTE en el almacenamiento local del dispositivo.",
          "Ningún dato de trabajo se transfiere a servidores externos.",
        ],
      },
      {
        title: "2. Firmas en Pantalla Táctil",
        paragraphs: [
          "La firma capturada en pantalla se utiliza exclusivamente para insertarse en el presupuesto PDF. No se analizan datos biométricos.",
        ],
      },
      {
        title: "3. Publicidad y RGPD",
        paragraphs: [
          "La versión gratuita utiliza Google Mobile Ads con gestión de consentimiento RGPD/UMP. La versión PRO elimina totalmente los anuncios.",
        ],
      },
      {
        title: "4. Compras In-App y Derechos del Usuario",
        paragraphs: [
          "Los pagos son procesados de forma segura por Google Play Store y Apple App Store. Los usuarios pueden exportar copias de seguridad (.cart) o borrar sus datos en cualquier momento.",
        ],
      },
    ],
  },
}

const CartongessistaPrivacyPage: React.FC<PageProps> = () => {
  const [currentLang, setCurrentLang] = useState<SupportedLang>("it")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userLang = (navigator.language || (navigator as any).userLanguage || "it").toLowerCase()
      if (userLang.startsWith("en")) {
        setCurrentLang("en")
      } else if (userLang.startsWith("de")) {
        setCurrentLang("de")
      } else if (userLang.startsWith("fr")) {
        setCurrentLang("fr")
      } else if (userLang.startsWith("es")) {
        setCurrentLang("es")
      } else {
        setCurrentLang("it")
      }
    }
  }, [])

  const currentContent = policyData[currentLang] || policyData.it

  return (
    <LanguageProvider>
      <Navbar mode="cartongessista-privacy" privacyLang={currentLang} setPrivacyLang={setCurrentLang} />
      <Layout>
        <div style={{ maxWidth: "840px", margin: "0 auto", padding: "40px 16px" }}>
          {/* Quick Navigation Pills */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              to="/cartongessista"
              className="gypso-btn-secondary"
              style={{ padding: "6px 14px", fontSize: "0.85rem", textDecoration: "none" }}
            >
              <ArrowLeft size={15} /> Cartongessista Home
            </Link>
            <Link
              to="/cartongessista/terms"
              className="gypso-btn-secondary"
              style={{ padding: "6px 14px", fontSize: "0.85rem", textDecoration: "none" }}
            >
              <FileText size={15} /> Termini di Servizio (EULA)
            </Link>
            <Link
              to="/gypso/privacy"
              className="gypso-btn-secondary"
              style={{ padding: "6px 14px", fontSize: "0.85rem", textDecoration: "none" }}
            >
              <Shield size={15} /> GYPSO Privacy
            </Link>
          </div>

          {/* Header Card */}
          <div
            className="glass-card"
            style={{
              padding: "28px",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "rgba(0, 210, 255, 0.15)",
                color: "var(--accent-primary)",
                width: "54px",
                height: "54px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                border: "1px solid rgba(0, 210, 255, 0.3)",
              }}
            >
              <Shield size={28} />
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: "24px", fontWeight: 700, color: "var(--text-primary)" }}>
                {currentContent.title}
              </h1>
              <p style={{ margin: "6px 0 0 0", color: "var(--text-secondary)", fontSize: "14px" }}>
                {currentContent.lastUpdated}
              </p>
            </div>
          </div>

          {/* Policy Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {currentContent.sections.map((section, idx) => (
              <div key={idx} className="glass-card" style={{ padding: "24px" }}>
                <h2
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "18px",
                    fontWeight: 600,
                    margin: "0 0 16px 0",
                    color: "var(--accent-primary)",
                  }}
                >
                  {section.title}
                </h2>
                <div style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.6" }}>
                  {section.paragraphs?.map((p, pIdx) => (
                    <p key={pIdx} style={{ margin: "0 0 12px 0" }}>
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul style={{ margin: "8px 0", paddingLeft: "20px" }}>
                      {section.list.map((item, lIdx) => (
                        <li key={lIdx} style={{ marginBottom: "6px" }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer & Cross-links */}
          <footer
            style={{
              textAlign: "center",
              color: "var(--text-muted)",
              fontSize: "13px",
              marginTop: "40px",
              paddingTop: "20px",
              borderTop: "1px solid var(--glass-border)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
              <Link to="/cartongessista" style={{ color: "var(--accent-primary)", textDecoration: "none" }}>
                Cartongessista App
              </Link>
              <span>•</span>
              <Link to="/cartongessista/terms" style={{ color: "var(--accent-primary)", textDecoration: "none" }}>
                Termini di Servizio (EULA)
              </Link>
              <span>•</span>
              <Link to="/" style={{ color: "var(--accent-primary)", textDecoration: "none" }}>
                Portfolio Antonio Squillace
              </Link>
            </div>
            <p style={{ margin: 0 }}>© {new Date().getFullYear()} Cartongessista (GYPSO). All rights reserved.</p>
          </footer>
        </div>
      </Layout>
    </LanguageProvider>
  )
}

export default CartongessistaPrivacyPage

export const Head: HeadFC = () => (
  <>
    <title>Cartongessista — Informativa sulla Privacy (Privacy Policy)</title>
    <meta name="description" content="Informativa sulla Privacy e Conformità GDPR per l'applicazione mobile Cartongessista (GYPSO)." />
  </>
)
