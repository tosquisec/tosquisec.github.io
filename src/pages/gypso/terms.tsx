import * as React from "react"
import { useState, useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import Navbar from "../../components/Navbar"
import { LanguageProvider } from "../../context/LanguageContext"
import { FileText, Shield, AlertTriangle, ArrowLeft } from "lucide-react"

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
  alert?: string
}

interface Content {
  title: string
  lastUpdated: string
  sections: Section[]
}

const termsData: Record<SupportedLang, Content> = {
  it: {
    title: "GYPSO — Termini e Condizioni di Servizio (EULA)",
    lastUpdated: "Ultimo aggiornamento: Settembre 2026 · Versione 1.0.0",
    sections: [
      {
        title: "1. Oggetto e Ambito del Servizio",
        paragraphs: [
          "Il presente Contratto di Licenza con l'Utente Finale (EULA) disciplina l'utilizzo dell'applicazione mobile GYPSO, sviluppata da Tosqui per dispositivi Android e iOS. Scaricando, installando o utilizzando l'applicazione, l'utente accetta integralmente i presenti Termini.",
          "GYPSO è uno strumento software di supporto per l'artigiano cartongessista, posatori ed imprese di finiture a secco. Offre funzionalità di rilievo geometrico 2D, disegno CAD, stima indicativa dei quantitativi materiali (lastre, profili montanti e guide, pendini, viti, stucchi, isolanti), calcolo orientativo del peso del carico per veicoli commerciali e redazione di preventivi in formato PDF.",
        ],
      },
      {
        title: "2. Disclaimer Tecnico e Ingegneristico (Cantiere Edile)",
        alert: "AVVERTENZA CRITICA: I calcoli dei quantitativi, le superfici nette, l'interasse dell'orditura metallica e gli schemi di posa elaborati da GYPSO hanno natura puramente teorica e orientativa.",
        paragraphs: [
          "L'applicazione NON è un software di calcolo strutturale asseverato e NON sostituisce in alcun caso il lavoro, i dimensionamenti o le perizie di tecnici abilitati (ingegneri, architetti, geometri).",
          "Per opere soggette a requisiti antisismici, carichi sospesi speciali o resistenza al fuoco certificata (REI), l'utente ha l'onere esclusivo di consultare i manuali tecnici dei produttori dei sistemi e le prescrizioni della Direzione Lavori.",
          "La corretta esecuzione della posa in opera a regola d'arte (secondo la norma UNI 11424) e la tenuta dei fissaggi restano sotto l'esclusiva responsabilità dell'artigiano o dell'impresa esecutrice.",
        ],
      },
      {
        title: "3. Responsabilità sul Carico del Veicolo (Codice della Strada)",
        paragraphs: [
          "La funzione di stima del peso complessivo dei materiali e l'indicatore di compatibilità con la portata di furgoni e veicoli leggeri (Patente B, soglia convenzionale di 1.200 kg) sono forniti a titolo puramente orientativo basato su valori nominali medi.",
        ],
        list: [
          "I pesi specifici effettivi variano a seconda del produttore, delle finiture e del tasso di umidità assorbito dai materiali.",
          "Ai sensi del vigente Codice della Strada, il conducente del veicolo è l'unico ed esclusivo responsabile del rispetto della massa massima a pieno carico (carta di circolazione, voce F.2), del corretto bilanciamento dei carichi sugli assi e dell'ancoraggio sicuro del carico in transito.",
        ],
      },
      {
        title: "4. Validità Economica dei Preventivi e Firme su Touchscreen",
        paragraphs: [
          "I preventivi, i computi metrici e le offerte economiche generati dall'applicazione rappresentano proposte commerciali formulate autonomamente dall'utente verso i propri committenti. Lo sviluppatore è totalmente estraneo a qualsiasi rapporto contrattuale, contestazione o transazione economica.",
          "L'acquisizione della firma grafica su touchscreen costituisce una Firma Elettronica Semplice (FES) ai sensi del Regolamento UE n. 910/2014 (eIDAS). La sua efficacia probatoria è liberamente valutabile in sede giudiziale.",
        ],
      },
      {
        title: "5. Limitazione di Responsabilità e Dati Locali",
        paragraphs: [
          "L'applicazione GYPSO è fornita \"COSÌ COM'È\" (\"AS IS\"), senza garanzie di alcun tipo, esplicite o implicite.",
          "Nei limiti massimi consentiti dalla legge applicabile, lo sviluppatore non sarà responsabile per danni diretti o indiretti, ritardi di cantiere, mancati guadagni o perdite di dati.",
          "Tutti i dati risiedono esclusivamente nella memoria locale del dispositivo dell'utente: l'utente è l'unico responsabile della custodia e della creazione di backup periodici (.cart / .zip).",
        ],
      },
      {
        title: "6. Modello di Licenza: Versione Free e Versione PRO",
        paragraphs: [
          "GYPSO adotta un modello chiaro a supporto del professionista:",
        ],
        list: [
          "Versione Free: Include calcoli rapidi e risultati tecnici per un massimo di 3 progetti salvati (il progetto dimostrativo non è conteggiato). I PDF includono un watermark di prova. Richiede connessione internet attiva per annunci pubblicitari (Google Mobile Ads).",
          "Versione PRO / Premium: Sbloccabile tramite acquisto in-app (licenza PRO). Include progetti illimitati, operatività 100% offline, esportazione PDF senza watermark, firma cliente su touchscreen, esportazione DXF CAD e rimozione definitiva della pubblicità.",
          "Acquisti e Rimborsi: I pagamenti sono elaborati unicamente da Google Play Store o Apple App Store, secondo i loro termini di servizio. La licenza può essere ripristinata in qualsiasi momento tramite il tasto 'Ripristina acquisti'.",
        ],
      },
      {
        title: "7. Contatti e Legge Applicabile",
        paragraphs: [
          "I presenti Termini di Servizio sono regolati dalla legge italiana. Per qualsiasi chiarimento o richiesta di supporto commerciale, puoi contattare il team di sviluppo all'indirizzo dev@tosqui.it.",
        ],
      },
    ],
  },
  en: {
    title: "GYPSO — Terms and Conditions of Service (EULA)",
    lastUpdated: "Last updated: September 2026 · Version 1.0.0",
    sections: [
      {
        title: "1. Purpose and Scope of the Service",
        paragraphs: [
          "This End User License Agreement (EULA) governs your use of the mobile application GYPSO, developed by Tosqui for Android and iOS devices. By downloading, installing, or using the app, you agree to be bound by these Terms.",
          "GYPSO is a utility software application designed to assist drywall installers and drywall construction contractors with 2D room layouts, material estimates (plasterboards, studs, tracks, hangers, screws, joint compound, insulation), van payload weight checks, and PDF estimate creation.",
        ],
      },
      {
        title: "2. Technical & Structural Disclaimer (Construction Site)",
        alert: "CRITICAL NOTICE: All board counts, net surface measurements, metal framing layouts, and pitch calculations provided by GYPSO are indicative theoretical estimates only.",
        paragraphs: [
          "The application is NOT a certified structural engineering tool and does NOT replace the calculations, specifications, or surveys of qualified professionals (structural engineers, architects, licensed surveyors).",
          "For works subject to fire-resistance ratings (REI), seismic resistance, or specialized suspended loads, the user is solely responsible for verifying manufacturer technical manuals and site management requirements.",
          "Proper installation workmanship (according to relevant building standards, e.g. UNI 11424) and fixing anchoring remain the sole responsibility of the contractor or installer.",
        ],
      },
      {
        title: "3. Vehicle Payload & Road Safety Disclaimer",
        paragraphs: [
          "The total weight calculation and commercial van threshold checker (~1,200 kg standard light commercial vehicle limit) are theoretical approximations based on nominal averages.",
        ],
        list: [
          "Actual material weights vary depending on manufacturer specifications, finishes, and ambient moisture absorbed.",
          "Under applicable road traffic laws, the driver remains solely and exclusively responsible for verifying maximum gross vehicle weight, axle balance, and load tie-down security.",
        ],
      },
      {
        title: "4. Commercial Estimates & Touchscreen Signatures",
        paragraphs: [
          "Estimates and PDF proposals generated by GYPSO represent commercial proposals between the user and their customers. The software developer is not a party to any contract, dispute, or payment between the contractor and their clients.",
          "Touchscreen signatures qualify as simple electronic signatures (SES) under EU Regulation 910/2014 (eIDAS). Their probative value is subject to judicial assessment.",
        ],
      },
      {
        title: "5. Limitation of Liability & Local Data Storage",
        paragraphs: [
          "GYPSO is provided on an \"AS IS\" and \"AS AVAILABLE\" basis without warranties of any kind, express or implied.",
          "To the fullest extent permissible by law, the developer shall not be liable for any direct or indirect damages, lost profits, job delays, or data loss.",
          "All data is stored locally on your device: you are solely responsible for creating regular backups (.cart / .zip) of your work.",
        ],
      },
      {
        title: "6. Licensing Model: Free Tier and PRO Version",
        paragraphs: [
          "GYPSO employs a clear licensing structure:",
        ],
        list: [
          "Free Tier: Full technical calculations for up to 3 saved projects (demo project excluded). Generated PDFs contain a watermark. Requires an active internet connection to serve ads (Google Mobile Ads).",
          "PRO / Premium Tier: Unlocked via an in-app purchase (PRO license). Unlocks unlimited projects, 100% offline operation, unwatermarked PDFs, touchscreen signatures, DXF CAD export, and complete ad removal.",
          "Billing & Refunds: Payments and refund requests are handled exclusively by Google Play Store or Apple App Store according to their store terms. Licenses can be restored at any time using the 'Restore Purchases' feature.",
        ],
      },
      {
        title: "7. Contact and Governing Law",
        paragraphs: [
          "These Terms are governed by the laws of Italy. For questions or support, you can contact the developer team at dev@tosqui.it.",
        ],
      },
    ],
  },
  de: {
    title: "GYPSO — Nutzungsbedingungen & EULA",
    lastUpdated: "Zuletzt aktualisiert: September 2026 · Version 1.0.0",
    sections: [
      {
        title: "1. Gegenstand und Anwendungsbereich",
        paragraphs: [
          "Diese Endbenutzer-Lizenzvereinbarung (EULA) regelt die Nutzung der mobilen Anwendung GYPSO für Android und iOS. Durch das Herunterladen oder Verwenden der App stimmen Sie diesen Bedingungen zu.",
          "GYPSO ist ein technisches Hilfswerkzeug für Trockenbauer, Handwerker und Bauunternehmen zur 2D-Flächenplanung, Materialberechnung, Nutzlastabschätzung für Transporter und PDF-Angebotserstellung.",
        ],
      },
      {
        title: "2. Technischer und statischer Haftungsausschluss (Baustelle)",
        alert: "WICHTIGER HINWEIS: Alle von GYPSO ermittelten Materialmengen, Ständerachsmaße und Schnittpläne sind unverbindliche theoretische Schätzungen.",
        paragraphs: [
          "Die App ist KEINE bauaufsichtlich zugelassene Statik-Software und ersetzt in keinem Fall die Fachplanung oder Prüfung durch qualifizierte Ingenieure oder Statiker.",
          "Bei brandschutzrelevanten Konstruktionen (Feuerwiderstandsklasse), Schallschutzanforderungen oder schweren Deckenlasten ist der Anwender verpflichtet, die technischen Richtlinien der Systemhersteller einzuhalten.",
          "Die fachgerechte Ausführung nach anerkannten Regeln der Technik obliegt allein dem ausführenden Fachbetrieb.",
        ],
      },
      {
        title: "3. Fahrzeugnutzlast und Straßenverkehrsordnung",
        paragraphs: [
          "Die Schätzung des Materialgewichts und der Abgleich mit Transporter-Nutzlasten (~1.200 kg Grenze) dienen als Orientierungshilfe.",
        ],
        list: [
          "Tatsächliche Gewichte variieren je nach Hersteller und Feuchtigkeitsgehalt.",
          "Der Fahrzeugführer ist allein verantwortlich für die Einhaltung des zulässigen Gesamtgewichts und die vorschriftsmäßige Ladungssicherung.",
        ],
      },
      {
        title: "4. Angebote und Touchscreen-Unterschrift",
        paragraphs: [
          "Mit GYPSO erstellte Angebote sind gewerbliche Offerten zwischen dem Anwender und seinen Kunden. Der Softwareanbieter ist an diesen Rechtsgeschäften nicht beteiligt.",
          "Die digitale Touchscreen-Unterschrift stellt eine einfache elektronische Signatur gemäß EU-Verordnung 910/2014 (eIDAS) dar.",
        ],
      },
      {
        title: "5. Haftungsbeschränkung und lokale Speicherung",
        paragraphs: [
          "GYPSO wird \"WIE BESEHEN\" (\"AS IS\") ohne Gewährleistung bereitgestellt.",
          "Der Entwickler haftet nicht für Baustellenstillstände, Verzögerungen oder Datenverluste. Alle Projektdaten werden ausschließlich lokal auf dem Gerät gespeichert; der Nutzer ist für regelmäßige Datensicherungen verantwortlich.",
        ],
      },
      {
        title: "6. Lizenzmodell: Kostenlose Version und PRO-Version",
        paragraphs: [
          "GYPSO bietet ein transparentes Lizenzmodell:",
        ],
        list: [
          "Kostenlose Version: Berechnungen für bis zu 3 gespeicherte Projekte. PDF mit Wasserzeichen. Erfordert Internetverbindung für Werbeeinblendungen.",
          "PRO / Premium Version: Freischaltung über In-App-Kauf (PRO-Lizenz). Unbegrenzte Projekte, vollständige Offline-Funktion, PDFs ohne Wasserzeichen, Unterschrift auf dem Touchscreen und Werbefreiheit.",
          "Abrechnung: Zahlungen erfolgen über den Google Play Store oder Apple App Store.",
        ],
      },
      {
        title: "7. Kontakt & Geltendes Recht",
        paragraphs: [
          "Es gilt italienisches Recht. Für Anfragen wenden Sie sich an dev@tosqui.it.",
        ],
      },
    ],
  },
  fr: {
    title: "GYPSO — Conditions Générales d'Utilisation (CLUF)",
    lastUpdated: "Dernière mise à jour : Septembre 2026 · Version 1.0.0",
    sections: [
      {
        title: "1. Objet et Champ d'Application",
        paragraphs: [
          "Le présent Contrat de Licence Utilisateur Final (CLUF) régit l'utilisation de l'application mobile GYPSO pour Android et iOS.",
          "GYPSO est un outil logiciel d'aide au calcul destiné aux plaquistes et entreprises de second œuvre pour le dessin CAD 2D, l'estimation des besoins en matériaux (plaques, ossatures métalliques, suspentes, vis, enduits), la vérification de la charge utile pour utilitaires et l'édition de devis PDF.",
        ],
      },
      {
        title: "2. Avertissement Technique et Structurel (Chantier)",
        alert: "AVERTISSEMENT ESSENTIEL : Les quantitatifs, surfaces et entraxes calculés par GYPSO ont une valeur purement indicative et prévisionnelle.",
        paragraphs: [
          "L'application N'EST PAS un logiciel de calcul structurel certifié et NE remplace en aucun cas les études techniques ou notes de calcul des bureaux d'études ou architectes habilités.",
          "Pour les ouvrages soumis à des exigences particulières (coupe-feu REI, isolation acoustique ou charges suspendues lourdes), l'utilisateur doit respecter scrupuleusement les prescriptions des fabricants et du CCTP.",
          "La mise en œuvre dans les règles de l'art (DTU 25.41 et normes applicables) relève de la responsabilité exclusive de l'entreprise exécutante.",
        ],
      },
      {
        title: "3. Charge du Véhicule et Sécurité Routière",
        paragraphs: [
          "L'estimation de la masse totale des matériaux et le contrôle de charge utile pour véhicules utilitaires (Permis B, seuil 1 200 kg) constituent des indications théoriques moyennes.",
        ],
        list: [
          "Les poids réels varient selon les fabricants et l'humidité ambiante.",
          "Le conducteur demeure seul responsable du respect du PTAC (poids total autorisé en charge) et de l'arrimage sécurisé de son chargement.",
        ],
      },
      {
        title: "4. Devis Commerciaux et Signature sur Écran Tactile",
        paragraphs: [
          "Les devis édités sont des propositions contractuelles entre l'artisan et ses donneurs d'ordre. L'éditeur de l'application est totalement étranger à ces relations commerciales.",
          "La signature manuscrite sur écran constitue une signature électronique simple (SES) au sens du règlement eIDAS (UE n° 910/2014).",
        ],
      },
      {
        title: "5. Limitation de Responsabilité et Données Locales",
        paragraphs: [
          "L'application est fournie \"EN L'ÉTAT\" (\"AS IS\"). L'éditeur ne saurait être tenu responsable des pertes d'exploitation ou pertes de données.",
          "Toutes les données sont hébergées localement sur l'appareil. La sauvegarde périodique des chantiers (.cart) incombe exclusivement à l'utilisateur.",
        ],
      },
      {
        title: "6. Modèle de Licence : Version Gratuite et Version PRO",
        paragraphs: [
          "GYPSO propose un modèle transparent :",
        ],
        list: [
          "Version Gratuite : Permet jusqu'à 3 projets enregistrés. Devis PDF avec filigrane. Connexion internet requise pour les annonces publicitaires.",
          "Version PRO / Premium : Déblocage par achat in-app (licence PRO). Projets illimités, 100% hors-ligne, PDF sans filigrane, signature tactile, export DXF et suppression intégrale des publicités.",
          "Paiements : Traités directement par le Google Play Store ou l'Apple App Store.",
        ],
      },
      {
        title: "7. Contact et Droit Applicable",
        paragraphs: [
          "Les présentes conditions sont régies par le droit italien. Pour toute question, contactez dev@tosqui.it.",
        ],
      },
    ],
  },
  es: {
    title: "GYPSO — Términos y Condiciones de Servicio (EULA)",
    lastUpdated: "Última actualización: Septiembre 2026 · Versión 1.0.0",
    sections: [
      {
        title: "1. Objeto y Ámbito del Servicio",
        paragraphs: [
          "Este Contrato de Licencia de Usuario Final (EULA) rige el uso de la aplicación móvil GYPSO para Android e iOS. Al descargar o usar la aplicación, usted acepta estos Términos.",
          "GYPSO es una herramienta de asistencia profesional para instaladores de cartón yeso y empresas de construcción en seco para el trazado CAD 2D, estimación de materiales (placas, perfiles, tornillos, pastas), comprobación de carga útil de furgonetas y generación de presupuestos en PDF.",
        ],
      },
      {
        title: "2. Descargo Técnico y Estructural (Obra y Construcción)",
        alert: "AVISO IMPORTANTE: Todas las estimaciones de materiales, superficies y modulación de perfilería calculadas por GYPSO tienen carácter orientativo y teórico.",
        paragraphs: [
          "La aplicación NO es un software de cálculo estructural certificado ni sustituye los proyectos, dimensionamientos o peritajes de arquitectos o ingenieros colegiados.",
          "En obras con requisitos específicos (resistencia al fuego REI, aislamiento acústico o cargas pesadas), el usuario es responsable de consultar los manuales técnicos del fabricante y las directrices de la Dirección Facultativa.",
          "La correcta ejecución de la instalación y anclajes es responsabilidad exclusiva del profesional instalador.",
        ],
      },
      {
        title: "3. Carga del Vehículo y Normativa de Tráfico",
        paragraphs: [
          "La función de peso estimado de materiales y comprobación para furgonetas comerciales (Permiso B, umbral 1.200 kg) es meramente orientativa.",
        ],
        list: [
          "Los pesos reales pueden variar según el fabricante y la humedad absorbida.",
          "El conductor del vehículo es el único responsable del cumplimiento de la masa máxima autorizada (MMA) y de la sujeción segura de la carga.",
        ],
      },
      {
        title: "4. Validez de los Presupuestos y Firmas en Pantalla",
        paragraphs: [
          "Los presupuestos generados constituyen propuestas comerciales entre el instalador y sus clientes. El desarrollador no interviene en dichas relaciones comerciales ni transacciones.",
          "La firma sobre pantalla táctil constituye una firma electrónica simple (FES) conforme al Reglamento UE 910/2014 (eIDAS).",
        ],
      },
      {
        title: "5. Limitación de Responsabilidad y Datos Locales",
        paragraphs: [
          "GYPSO se proporciona \"TAL CUAL\" (\"AS IS\"). El desarrollador no será responsable de pérdidas de beneficios o interrupciones de obra.",
          "Todos los proyectos se almacenan exclusivamente en la memoria local del dispositivo; el usuario es el único responsable de realizar copias de seguridad periódicas (.cart).",
        ],
      },
      {
        title: "6. Modelo de Licencia: Versión Gratuita y Versión PRO",
        paragraphs: [
          "GYPSO utiliza un modelo transparente:",
        ],
        list: [
          "Versión Gratuita: Hasta 3 proyectos guardados. PDF con marca de agua. Requiere conexión a internet para anuncios publicitarios.",
          "Versión PRO / Premium: Desbloqueo mediante compra in-app (licencia PRO). Proyectos ilimitados, funcionamiento 100% sin conexión, PDF sin marca de agua, firma en pantalla, exportación DXF y eliminación total de publicidad.",
          "Facturación: Los pagos son procesados directamente por Google Play Store o Apple App Store.",
        ],
      },
      {
        title: "7. Contacto y Ley Aplicable",
        paragraphs: [
          "Estos términos se rigen por la legislación italiana. Para consultas o asistencia, contacte con dev@tosqui.it.",
        ],
      },
    ],
  },
}

const GypsoTermsPage: React.FC<PageProps> = () => {
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

  const currentContent = termsData[currentLang]

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
              to="/gypso/privacy"
              className="gypso-btn-secondary"
              style={{ padding: "6px 14px", fontSize: "0.85rem", textDecoration: "none" }}
            >
              <Shield size={15} /> Privacy Policy
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
              <Link to="/gypso" style={{ color: "var(--accent-primary)", textDecoration: "none" }}>
                GYPSO App
              </Link>
              <span>•</span>
              <Link to="/gypso/privacy" style={{ color: "var(--accent-primary)", textDecoration: "none" }}>
                Privacy Policy
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

export default GypsoTermsPage

export const Head: HeadFC = () => (
  <>
    <title>GYPSO — Termini e Condizioni di Servizio (EULA)</title>
    <meta name="description" content="Termini e Condizioni d'Uso, Licenza EULA e Disclaimer Tecnico per l'applicazione mobile GYPSO." />
  </>
)
