import * as React from "react"
import { useState, useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Navbar from "../../components/Navbar"
import { LanguageProvider } from "../../context/LanguageContext"
import { FileText, Shield, AlertTriangle, ArrowLeft } from "lucide-react"

type SupportedLang = "it" | "en" | "de" | "fr" | "es"

interface Section {
  title: string
  paragraphs?: string[]
  list?: string[]
  alert?: string
}

interface Content {
  title: string
  lastUpdated: string
  sections: Section[]
}

const termsData: Record<SupportedLang, Content> = {
  it: {
    title: "Cartongessista — Termini e Condizioni di Servizio ed EULA",
    lastUpdated: "Ultimo aggiornamento: Settembre 2026 · Versione 1.0.0",
    sections: [
      {
        title: "1. Oggetto e Scopo dell'Applicazione",
        paragraphs: [
          "I presenti Termini e Condizioni di Servizio ed Accordo di Licenza con l'Utente Finale (EULA) disciplinano l'utilizzo dell'applicazione mobile Cartongessista (GYPSO), distribuita per sistemi operativi Android e iOS.",
          "Cartongessista è un applicativo software sviluppato come strumento di ausilio operativo, computo metrico estimativo, rilievo planimetrico 2D e logistica per l'artigiano cartongessista, i posatori, le imprese di finiture a secco ed i tecnici di cantiere.",
        ],
        list: [
          "Rilievo e disegno di superfici, pareti divisorie, contropareti e controsoffitti su display touch con coordinate cartesiane e snapping.",
          "Calcolo indicativo dei consumi dei materiali (lastre, montanti, guide, pendini, viti, stucchi, isolanti termoacustici).",
          "Ottimizzazione dello schema di taglio delle barre commerciali da 300 cm per ridurre lo sfrido reale di cantiere.",
          "Stima orientativa della massa del carico per la verifica di compatibilità con furgoni commerciali leggeri (Patente B).",
          "Generazione di computi metrici e preventivi PDF personalizzati con logo aziendale e riquadro per firma su touchscreen.",
        ],
      },
      {
        title: "2. Concessione della Licenza d'Uso (EULA) e Divieti",
        paragraphs: [
          "Lo sviluppatore concede all'utente una licenza d'uso personale o professionale, non esclusiva, non trasferibile e revocabile per singolo dispositivo.",
        ],
        list: [
          "È fatto espresso divieto di de-compilare, disassemblare, tentare di estrarre il codice sorgente o compiere reverse-engineering dell'applicazione o dei suoi algoritmi proprietari.",
          "È vietato noleggiare, concedere in sublicenza, commercializzare o ridistribuire i file binari dell'applicazione a terzi al di fuori degli store ufficiali (Google Play Store e Apple App Store).",
        ],
      },
      {
        title: "3. Esclusione di Responsabilità Tecnica e Ingegneristica (Disclaimer di Cantiere)",
        alert: "AVVERTENZA FONDAMENTALE DI CANTIERE: I calcoli, le geometrie, le disposizioni strutturali dell'orditura metallica ed i quantitativi elaborati da Cartongessista hanno natura puramente indicativa e di stima teorica.",
        paragraphs: [
          "Nessun Valore di Progetto Esecutivo: Cartongessista NON è un software di calcolo strutturale asseverato e non sostituisce in alcun caso il progetto esecutivo, le verifiche di portata o le perizie redatte da ingegneri, architetti o geometri abilitati.",
          "Requisiti Speciali (Antincendio / Acustica / Antisismica): Per opere soggette a requisiti antisismici, carichi speciali sospesi a soffitto, resistenza al fuoco certificata (REI) o isolamento acustico di legge, l'utente ha l'onere esclusivo di consultare i manuali tecnici dei produttori dei sistemi e le prescrizioni della Direzione Lavori.",
          "Standard di Posa (UNI 11424): La corretta esecuzione della posa a regola d'arte, la planarità del supporto murario, la tenuta dei tasselli perimetrali e il fissaggio meccanico rimangono sotto l'esclusiva responsabilità dell'artigiano posatore.",
        ],
      },
      {
        title: "4. Disclaimer Logistico sui Pesi e Portata Veicoli (Codice della Strada)",
        paragraphs: [
          "La funzione di stima logistica del peso complessivo dei materiali e l'indicatore di compatibilità con la portata di furgoni commerciali (Patente B, soglia convenzionale di 1.200 kg) sono forniti a titolo puramente orientativo basato su valori nominali medi.",
        ],
        list: [
          "I pesi effettivi variano a seconda del produttore, delle specifiche di fabbricazione e del tasso di umidità assorbito dai materiali.",
          "Ai sensi del Codice della Strada italiano ed europeo, il conducente del veicolo è l'unico ed esclusivo responsabile del rispetto della massa massima a pieno carico (carta di circolazione, voce F.2), del bilanciamento del carico sugli assi e dell'ancoraggio sicuro del materiale in transito.",
          "Lo sviluppatore declina ogni responsabilità per contravvenzioni, fermo del veicolo o sanzioni per sovraccarico stradale.",
        ],
      },
      {
        title: "5. Validità Economica dei Preventivi e Firme su Touchscreen (FES eIDAS)",
        paragraphs: [
          "I preventivi, i computi metrici e le offerte economiche generati dall'applicazione costituiscono proposte commerciali formulate autonomamente dall'utente verso i propri committenti. Lo sviluppatore è totalmente estraneo a qualsiasi rapporto contrattuale, controversia o transazione economica.",
          "L'acquisizione della firma grafica su touchscreen costituisce una Firma Elettronica Semplice (FES) ai sensi del Regolamento UE n. 910/2014 (eIDAS). La sua efficacia probatoria è liberamente valutabile in sede giudiziale.",
        ],
      },
      {
        title: "6. Archiviazione dei Dati e Obbligo di Backup a Carico dell'Utente",
        paragraphs: [
          "L'applicazione opera in modalità locale (\"offline-first\"); tutti i progetti risiedono unicamente nella memoria locale del dispositivo dell'utente.",
          "L'utente ha l'onere di eseguire regolarmente copie di sicurezza dei propri progetti tramite la funzione integrata Esporta Backup (.zip / .cart). Lo sviluppatore non ha accesso ai dati dell'utente e non risponde di eventuali perdite di dati derivanti da smarrimento, guasto del dispositivo o cancellazione accidentale.",
        ],
      },
      {
        title: "7. Modello di Licenza Freemium e Acquisto PRO Una Tantum",
        paragraphs: [
          "Cartongessista garantisce un modello di licenza chiaro e trasparente:",
        ],
        list: [
          "Versione Free: Calcoli tecnici completi e fino a 3 progetti salvati (progetto dimostrativo escluso dal computo). Preventivi PDF con watermark di prova. Supportata da annunci pubblicitari (Google Mobile Ads) limitati alla sola schermata Home passiva.",
          "Versione PRO / Premium: Sblocco tramite acquisto in-app una tantum (licenza a vita non-consumable, senza canoni o abbonamenti ricorrenti). Progetti illimitati, operatività offline 100%, preventivi PDF ad alta risoluzione senza watermark, firma cliente su touchscreen, esportazione CAD DXF e rimozione definitiva della pubblicità.",
          "Acquisti e Ripristino: I pagamenti sono elaborati unicamente dagli store ufficiali Google Play ed Apple App Store. La licenza è ripristinabile in qualsiasi momento sullo stesso account tramite il tasto 'Ripristina acquisti'.",
        ],
      },
      {
        title: "8. Limitazione di Responsabilità e Foro Competente",
        paragraphs: [
          "Il software è concesso in licenza \"COSÌ COM'È\" (\"AS IS\"), senza garanzie implicite o esplicite di commerciabilità o idoneità a scopi specifici. Nei limiti consentiti dalla legge, lo sviluppatore non risponde di danni indiretti o perdite di profitto.",
          "I presenti Termini sono regolati dalla Legge Italiana. Per qualsiasi controversia sarà competente in via esclusiva il Foro di residenza o sede dello sviluppatore, fatte salve le disposizioni inderogabili a tutela del consumatore.",
        ],
      },
    ],
  },
  en: {
    title: "Cartongessista — Terms and Conditions of Service (EULA)",
    lastUpdated: "Last updated: September 2026 · Version 1.0.0",
    sections: [
      {
        title: "1. Scope and Purpose of the Software",
        paragraphs: [
          "These Terms of Service and End User License Agreement (EULA) govern your use of the mobile application Cartongessista (GYPSO), distributed for Android and iOS.",
          "Cartongessista is a specialized software utility for drywall installers, ceiling contractors, and construction technicians offering 2D room layouts, material estimates, offcut minimization, vehicle weight estimates, and PDF proposals.",
        ],
      },
      {
        title: "2. Technical & Structural Disclaimer (Construction Site)",
        alert: "CRITICAL SITE WARNING: All board counts, net surface calculations, stud spacing, and pitch values provided by Cartongessista are purely indicative theoretical estimates.",
        paragraphs: [
          "The software is NOT certified structural calculation software and does NOT replace the calculations or oversight of licensed structural engineers, architects, or certified surveyors.",
          "For fire-resistance rated works (REI), seismic safety, or heavy suspended ceiling fixtures, the user must consult manufacturer system manuals and project management specifications.",
          "Workmanship in accordance with trade standards (e.g. UNI 11424) and mechanical anchoring security remain the exclusive responsibility of the contractor.",
        ],
      },
      {
        title: "3. Vehicle Payload & Road Safety (Traffic Regulations)",
        paragraphs: [
          "The material payload calculation and light commercial van threshold checker (~1,200 kg standard B-license payload) are approximations based on nominal averages.",
        ],
        list: [
          "Actual weights vary depending on brand, drywall type, and moisture absorbed on site.",
          "The vehicle operator remains exclusively responsible for complying with the legal gross vehicle weight rating (GVWR, item F.2 on vehicle registration documents), axle balance, and safe cargo tie-down.",
        ],
      },
      {
        title: "4. Commercial Quotes & Touchscreen Signatures (eIDAS)",
        paragraphs: [
          "Quotes and PDF documents generated by Cartongessista represent commercial proposals issued by the user to their clients. The software developer is not a party to any customer contract or payment dispute.",
          "Signatures on touchscreens qualify as simple electronic signatures (SES) under EU Regulation 910/2014 (eIDAS).",
        ],
      },
      {
        title: "5. Local Storage and Backup Duty",
        paragraphs: [
          "Cartongessista operates offline-first. All data resides solely on the user's device. Users must maintain regular backups (.cart / .zip format). The developer bears no liability for data loss due to device damage or accidental deletion.",
        ],
      },
      {
        title: "6. Freemium Licensing & Lifetime PRO Purchase",
        paragraphs: [
          "Free tier: Full calculation algorithms, up to 3 saved projects, watermarked PDFs, light banner ads.",
          "PRO tier: Single one-time lifetime purchase (no subscriptions). Unlimited projects, 100% offline use, watermark-free PDFs, touchscreen client signatures, DXF export, and ad removal.",
        ],
      },
      {
        title: "7. Governing Law",
        paragraphs: [
          "These Terms are governed by the laws of Italy. For any inquiries, contact dev@tosqui.it.",
        ],
      },
    ],
  },
  de: {
    title: "Cartongessista — Nutzungsbedingungen (EULA)",
    lastUpdated: "Zuletzt aktualisiert: September 2026 · Version 1.0.0",
    sections: [
      {
        title: "1. Gegenstand der Software",
        paragraphs: [
          "Cartongessista (GYPSO) ist ein digitales Werkzeug für Trockenbauer zur 2D-Flächenplanung, Materialberechnung, Verschnittoptimierung und PDF-Angebotserstellung.",
        ],
      },
      {
        title: "2. Baustellen- und Statik-Haftungsausschluss",
        alert: "WICHTIGER HINWEIS: Alle Berechnungen sind theoretische Schätzungen und ersetzen keine statische Fachplanung oder Brandschutznachweise.",
        paragraphs: [
          "Die fachgerechte Ausführung nach den anerkannten Regeln der Technik obliegt allein dem Fachbetrieb.",
        ],
      },
      {
        title: "3. Fahrzeugnutzlast und Straßenverkehr",
        paragraphs: [
          "Die Gewichtsberechnung für Transporter ist unverbindlich. Der Fahrer trägt die alleinige Verantwortung für das Einhalten des zulässigen Gesamtgewichts.",
        ],
      },
      {
        title: "4. Lokale Datensicherung & Lizenz",
        paragraphs: [
          "Alle Projektdaten verbleiben lokal auf dem Gerät. Die PRO-Version ist ein einmaliger Kauf ohne wiederkehrende Abonnements.",
        ],
      },
    ],
  },
  fr: {
    title: "Cartongessista — Conditions Générales d'Utilisation (CLUF)",
    lastUpdated: "Dernière mise à jour : Septembre 2026 · Version 1.0.0",
    sections: [
      {
        title: "1. Objet du Logiciel",
        paragraphs: [
          "Cartongessista (GYPSO) est une solution logicielle d'aide au calcul de surfaces, fournitures de plaques de plâtre et devis pour professionnels plaquistes.",
        ],
      },
      {
        title: "2. Avertissement Technique de Chantier",
        alert: "AVERTISSEMENT : Les estimations fournies n'ont aucune valeur de note de calcul structurelle ou de certification coupe-feu.",
        paragraphs: [
          "Le respect des normes de mise en œuvre incombe exclusivement à l'artisan poseur.",
        ],
      },
      {
        title: "3. Charge des Véhicules et Sécurité",
        paragraphs: [
          "L'estimation du poids des matériaux est indicative. Le conducteur reste seul responsable du respect du PTAC.",
        ],
      },
      {
        title: "4. Sauvegarde Locale & Modèle de Licence",
        paragraphs: [
          "Toutes les données sont stockées en local. La version PRO est un achat unique sans abonnement récurrent.",
        ],
      },
    ],
  },
  es: {
    title: "Cartongessista — Términos y Condiciones de Servicio (EULA)",
    lastUpdated: "Última actualización: Septiembre 2026 · Versión 1.0.0",
    sections: [
      {
        title: "1. Objeto de la Aplicación",
        paragraphs: [
          "Cartongessista (GYPSO) es una herramienta profesional para instaladores de placas de yeso laminado (pladur) para replanteo 2D, cálculo de materiales y presupuestos PDF.",
        ],
      },
      {
        title: "2. Descargo Técnico y Estructural de Obra",
        alert: "AVISO IMPORTANTE: Las cantidades y modulación calculadas son estimaciones teóricas y no sustituyen un proyecto técnico visado.",
        paragraphs: [
          "La correcta instalación según normativa técnica es responsabilidad exclusiva del instalador.",
        ],
      },
      {
        title: "3. Carga del Vehículo y Normativa",
        paragraphs: [
          "El cálculo de masa para furgonetas es orientativo. El conductor es el único responsable del cumplimiento de la masa máxima autorizada.",
        ],
      },
      {
        title: "4. Datos Locales y Licencia PRO",
        paragraphs: [
          "Los proyectos se guardan localmente en el dispositivo. La versión PRO se adquiere mediante pago único sin cuotas recurrentes.",
        ],
      },
    ],
  },
}

const CartongessistaTermsPage: React.FC<PageProps> = () => {
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

  const currentContent = termsData[currentLang] || termsData.it

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
              to="/cartongessista/privacy"
              className="gypso-btn-secondary"
              style={{ padding: "6px 14px", fontSize: "0.85rem", textDecoration: "none" }}
            >
              <Shield size={15} /> Privacy Policy
            </Link>
            <Link
              to="/gypso/terms"
              className="gypso-btn-secondary"
              style={{ padding: "6px 14px", fontSize: "0.85rem", textDecoration: "none" }}
            >
              <FileText size={15} /> GYPSO Terms
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
                background: "rgba(245, 158, 11, 0.15)",
                color: "var(--accent-amber, #f59e0b)",
                width: "54px",
                height: "54px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                border: "1px solid rgba(245, 158, 11, 0.3)",
              }}
            >
              <FileText size={28} />
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

          {/* Terms Sections */}
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
                    color: "var(--accent-primary, #00e5ff)",
                  }}
                >
                  {section.title}
                </h2>

                {section.alert && (
                  <div
                    style={{
                      background: "rgba(245, 158, 11, 0.12)",
                      borderLeft: "4px solid #f59e0b",
                      padding: "12px 16px",
                      borderRadius: "6px",
                      marginBottom: "16px",
                      color: "#fbbf24",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <AlertTriangle size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div>{section.alert}</div>
                  </div>
                )}

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
              <Link to="/cartongessista/privacy" style={{ color: "var(--accent-primary)", textDecoration: "none" }}>
                Privacy Policy
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

export default CartongessistaTermsPage

export const Head: HeadFC = () => (
  <>
    <title>Cartongessista — Termini e Condizioni di Servizio (EULA)</title>
    <meta name="description" content="Condizioni d'Uso, Licenza EULA e Disclaimer Tecnico per l'applicazione mobile Cartongessista (GYPSO)." />
  </>
)
