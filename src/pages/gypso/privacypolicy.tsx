import * as React from "react"
import { useState, useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Navbar from "../../components/Navbar"
import { LanguageProvider } from "../../context/LanguageContext"
import { Shield, ArrowLeft } from "lucide-react"

type SupportedLang = "it" | "en" | "de" | "fr" | "es"

interface LanguageOption {
  code: SupportedLang
  flag: string
  label: string
}

const languages: LanguageOption[] = [
  { code: "it", flag: "🇮🇹", label: "Italiano" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "es", flag: "🇪🇸", label: "Español" },
]

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
    title: "GYPSO — Informativa sulla Privacy",
    lastUpdated: "Ultimo aggiornamento: Luglio 2026",
    sections: [
      {
        title: "1. Raccolta e Salvataggio Dati",
        paragraphs: [
          "GYPSO è progettata rispettando il principio della \"Privacy by Design\". Tutti i dati inseriti dall'utente (planimetrie CAD, misurazioni delle superfici, listini prezzi, dati cliente e dati ditta) vengono salvati ESCLUSIVAMENTE all'interno del dispositivo dell'utente tramite database locale criptato.",
          "L'applicazione NON trasmette, archivia né analizza i tuoi progetti ed i tuoi preventivi su server esterni.",
        ],
      },
      {
        title: "2. Pubblicità e Consenso GDPR / UMP",
        paragraphs: [
          "L'applicazione utilizza i servizi di Google Mobile Ads per la visualizzazione di annunci pubblicitari.",
        ],
        list: [
          "In conformità al Regolamento Generale sulla Protezione dei Dati (GDPR) e alla direttiva ePrivacy, agli utenti residenti nello Spazio Economico Europeo (SEE) viene richiesto il consenso esplicito prima di servire annunci personalizzati.",
          "Puoi modificare o revocare le tue preferenze di consenso pubblicitario in qualsiasi momento tramite il form di consenso dedicato all'interno dell'applicazione.",
        ],
      },
      {
        title: "3. Gestione Abbonamenti ed Acquisti",
        paragraphs: [
          "Gli acquisti In-App e la gestione dell'abbonamento Premium PRO sono gestiti tramite il servizio RevenueCat, che interagisce direttamente con Apple App Store ed Google Play Store.",
          "I dettagli di pagamento e le carte di credito sono elaborati unicamente dagli store ufficiali di Apple e Google secondo i loro standard di sicurezza (PCI-DSS). GYPSO non ha mai accesso ad alcun dato bancario o finanziario.",
        ],
      },
      {
        title: "4. Diritti dell'Utente",
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
        title: "5. Contatti e Supporto",
        paragraphs: [
          "Per qualsiasi domanda o chiarimento riguardante la presente Informativa sulla Privacy o l'utilizzo dell'applicazione GYPSO, puoi contattare il team di sviluppo all'indirizzo email di supporto indicato nella pagina dello store ufficiale.",
        ],
      },
    ],
  },
  en: {
    title: "GYPSO — Privacy Policy",
    lastUpdated: "Last updated: July 2026",
    sections: [
      {
        title: "1. Data Collection & Storage",
        paragraphs: [
          "GYPSO is designed strictly following the \"Privacy by Design\" principle. All user data (CAD floor plans, surface measurements, price lists, client and company information) is saved EXCLUSIVELY on the user's device via an encrypted local database.",
          "The application DOES NOT transmit, store, or analyze your projects or estimates on external servers.",
        ],
      },
      {
        title: "2. Advertising & GDPR / UMP Consent",
        paragraphs: [
          "The application uses Google Mobile Ads to display advertisement banners.",
        ],
        list: [
          "In compliance with the General Data Protection Regulation (GDPR) and the ePrivacy Directive, users residing in the European Economic Area (EEA) are asked for explicit consent before personalized ads are served.",
          "You can modify or revoke your ad consent choices at any time via the dedicated consent form inside the application settings.",
        ],
      },
      {
        title: "3. Subscriptions & In-App Purchases",
        paragraphs: [
          "In-App Purchases and Premium PRO subscription management are processed via RevenueCat, which directly interfaces with Apple App Store and Google Play Store.",
          "Payment credentials and credit card details are processed exclusively by Apple and Google official stores under strict security standards (PCI-DSS). GYPSO never accesses or stores any banking or financial data.",
        ],
      },
      {
        title: "4. User Rights",
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
        title: "5. Contact & Support",
        paragraphs: [
          "For any questions or clarification regarding this Privacy Policy or GYPSO usage, please contact the development team at the support email provided on the official store listing page.",
        ],
      },
    ],
  },
  de: {
    title: "GYPSO — Datenschutz-Bestimmungen",
    lastUpdated: "Zuletzt aktualisiert: Juli 2026",
    sections: [
      {
        title: "1. Datenerfassung & Speicherung",
        paragraphs: [
          "GYPSO wurde streng nach dem Grundsatz \"Privacy by Design\" entwickelt. Alle Benutzereingaben (CAD-Grundrisse, Flächenmessungen, Preislisten, Kunden- und Firmendaten) werden AUSSCHLIESSLICH lokal auf dem Gerät des Benutzers in einer verschlüsselten Datenbank gespeichert.",
          "Die Anwendung überträgt, speichert oder analysiert Ihre Projekte und Angebote NICHT auf externen Servern.",
        ],
      },
      {
        title: "2. Werbung & DSGVO / UMP Einwilligung",
        paragraphs: [
          "Die Anwendung nutzt Google Mobile Ads zur Anzeige von Werbebanner.",
        ],
        list: [
          "In Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO) werden Benutzer mit Wohnsitz im Europäischen Wirtschaftsraum (EWR) vor der Bereitstellung personalisierter Werbung um eine ausdrückliche Einwilligung gebeten.",
          "Sie können Ihre Werbeeinstellungen jederzeit über das entsprechende Zustimmungsformular in den App-Einstellungen ändern oder widerrufen.",
        ],
      },
      {
        title: "3. Abonnements & In-App-Käufe",
        paragraphs: [
          "In-App-Käufe und die Verwaltung des Premium PRO Abonnements werden über den Dienst RevenueCat abgewickelt, der direkt mit dem Apple App Store und dem Google Play Store kommuniziert.",
          "Zahlungsinformationen und Kreditkartendaten werden ausschließlich von den offiziellen Stores von Apple und Google nach höchsten Sicherheitsstandards (PCI-DSS) verarbeitet. GYPSO hat keinen Zugriff auf Bank- oder Finanzdaten.",
        ],
      },
      {
        title: "4. Nutzerrechte",
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
        title: "5. Kontakt & Support",
        paragraphs: [
          "Bei Fragen oder Anmerkungen zu dieser Datenschutzerklärung oder der Nutzung von GYPSO wenden Sie sich bitte an das Entwicklerteam unter der auf der offiziellen Store-Seite angegebenen Support-E-Mail-Adresse.",
        ],
      },
    ],
  },
  fr: {
    title: "GYPSO — Politique de Confidentialité",
    lastUpdated: "Dernière mise à jour : Juillet 2026",
    sections: [
      {
        title: "1. Collecte et Stockage des Données",
        paragraphs: [
          "GYPSO est conçue selon le principe de la \"Privacy by Design\". Toutes les données saisies par l'utilisateur (plans CAD, mesures de surfaces, grilles de prix, coordonnées clients et entreprise) sont enregistrées EXCLUSIVEMENT sur l'appareil de l'utilisateur via une base de données locale cryptée.",
          "L'application NE transmet, N'héberge et N'analyse AUCUN de vos projets ou devis sur des serveurs externes.",
        ],
      },
      {
        title: "2. Publicité et Consentement RGPD / UMP",
        paragraphs: [
          "L'application utilise les services Google Mobile Ads pour l'affichage de bannières publicitaires.",
        ],
        list: [
          "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la directive ePrivacy, un consentement explicite est demandé aux utilisateurs résidant dans l'Espace Économique Européen (EEE) avant de diffuser des publicités personnalisées.",
          "Vous pouvez modifier ou retirer vos choix de consentement publicitaire à tout moment depuis le formulaire dédié dans les paramètres de l'application.",
        ],
      },
      {
        title: "3. Abonnements et Achats In-App",
        paragraphs: [
          "Les achats In-App et la gestion de l'abonnement Premium PRO sont traités via RevenueCat, qui communique directement avec l'Apple App Store et le Google Play Store.",
          "Les données de paiement sont traitées exclusivement par les stores officiels d'Apple et Google conformément aux normes PCI-DSS. GYPSO n'a jamais accès à vos coordonnées bancaires.",
        ],
      },
      {
        title: "4. Droits des Utilisateurs",
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
        title: "5. Contact et Support",
        paragraphs: [
          "Pour toute question concernant cette Politique de Confidentialité ou l'utilisation de GYPSO, vous pouvez contacter l'équipe de développement à l'adresse e-mail de support figurant sur la fiche du store officiel.",
        ],
      },
    ],
  },
  es: {
    title: "GYPSO — Política de Privacidad",
    lastUpdated: "Última actualización: Julio 2026",
    sections: [
      {
        title: "1. Recopilación y Almacenamiento de Datos",
        paragraphs: [
          "GYPSO está diseñada respetando el principio de \"Privacidad por Diseño\". Todos los datos ingresados por el usuario (planos CAD, mediciones de superficies, listas de precios, datos de clientes y de la empresa) se guardan EXCLUSIVAMENTE en el dispositivo del usuario mediante una base de datos local encriptada.",
          "La aplicación NO transmite, almacena ni analiza sus proyectos o presupuestos en servidores externos.",
        ],
      },
      {
        title: "2. Publicidad y Consentimiento RGPD / UMP",
        paragraphs: [
          "La aplicación utiliza Google Mobile Ads para la visualización de anuncios publicitarios.",
        ],
        list: [
          "De conformidad con el Reglamento General de Protección de Datos (RGPD) y la directiva ePrivacy, a los usuarios residentes en el Espacio Económico Europeo (EEE) se les solicita su consentimiento explícito antes de mostrar anuncios personalizados.",
          "Puede modificar o revocar sus preferencias de consentimiento en cualquier momento a través del formulario dentro de la configuración de la aplicación.",
        ],
      },
      {
        title: "3. Gestión de Suscripciones y Compras In-App",
        paragraphs: [
          "Las compras In-App y la gestión de la suscripción Premium PRO se realizan a través del servicio RevenueCat, que interactúa directamente con Apple App Store y Google Play Store.",
          "Los datos de pago son procesados únicamente por las tiendas oficiales de Apple y Google según los estándares de seguridad (PCI-DSS). GYPSO nunca tiene acceso a datos bancarios o financieros.",
        ],
      },
      {
        title: "4. Derechos del Usuario",
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
        title: "5. Contacto y Soporte",
        paragraphs: [
          "Para cualquier pregunta sobre esta Política de Privacidad o el uso de la aplicación GYPSO, puede ponerse en contacto con el equipo de desarrollo mediante el correo electrónico de soporte indicado en la tienda oficial.",
        ],
      },
    ],
  },
}

const GypsoPrivacyPolicyPage: React.FC<PageProps> = () => {
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

  const currentContent = policyData[currentLang]

  return (
    <LanguageProvider>
      <Navbar mode="gypso-privacy" privacyLang={currentLang} setPrivacyLang={setCurrentLang} />
      <Layout>
        <div style={{ maxWidth: "840px", margin: "0 auto", padding: "40px 16px" }}>
          {/* Quick Navigation Pills */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              to="/gypso"
              className="gypso-btn-secondary"
              style={{ padding: "6px 14px", fontSize: "0.85rem", textDecoration: "none" }}
            >
              <ArrowLeft size={15} /> GYPSO Home
            </Link>
            <Link
              to="/gypso/terms"
              className="gypso-btn-secondary"
              style={{ padding: "6px 14px", fontSize: "0.85rem", textDecoration: "none" }}
            >
              Termini di Servizio (EULA)
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
              <Link to="/gypso" style={{ color: "var(--accent-primary)", textDecoration: "none" }}>
                GYPSO App
              </Link>
              <span>•</span>
              <Link to="/gypso/terms" style={{ color: "var(--accent-primary)", textDecoration: "none" }}>
                Termini di Servizio (EULA)
              </Link>
              <span>•</span>
              <Link to="/" style={{ color: "var(--accent-primary)", textDecoration: "none" }}>
                Portfolio Antonio Squillace
              </Link>
            </div>
            <p style={{ margin: 0 }}>© {new Date().getFullYear()} GYPSO. All rights reserved.</p>
          </footer>
        </div>
      </Layout>
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
