import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Navbar from "../../components/Navbar"
import {
  Ruler,
  Shield,
  FileText,
  Layers,
  Scissors,
  Cpu,
  Globe,
  Smartphone,
  Sparkles,
  HardDrive,
  Truck,
  Camera,
  Check,
  Zap,
  Download,
  PenTool,
  CheckCircle2,
  FolderArchive,
  Ban,
  PackageCheck,
  Lock,
  ArrowRight,
  Sparkle,
} from "lucide-react"

import "../../styles/gypso.css"

const GypsoIndexPage: React.FC<PageProps> = () => {
  return (
    <div className="gypso-page">
      <div className="gypso-bg-mesh" />
      <div className="gypso-orb gypso-orb-1" />
      <div className="gypso-orb gypso-orb-2" />

      {/* Navigation Bar */}
      <Navbar mode="gypso" />

      {/* Hero Section */}
      <section className="gypso-hero">
        <div className="gypso-hero-badge">
          <Sparkles size={14} /> Release 1.0.0 · App Professionale Cartongesso 2026
        </div>

        <img src="/gypso-icon.png" alt="GYPSO App Icon" className="gypso-hero-logo" />

        <h1 className="gypso-hero-title">GYPSO</h1>
        <p className="gypso-hero-subtitle">
          Calcolo Professionale Cartongesso, Editor CAD Nativo 2D, Esportazione AutoCAD DXF, Ottimizzazione Sfrido e Computo Metrico Preventivabile in PDF con Firma Cliente.
        </p>

        <div className="gypso-hero-actions">
          <a href="#features" className="gypso-btn-primary">
            <Ruler size={18} /> Scopri le Funzionalità
          </a>
          <a href="#plans" className="gypso-btn-secondary">
            <Zap size={18} /> Piani & Prezzi
          </a>
          <Link to="/gypso/privacy" className="gypso-btn-secondary">
            <Shield size={18} /> Informativa Privacy
          </Link>
          <Link to="/gypso/terms" className="gypso-btn-secondary">
            <FileText size={18} /> Termini di Servizio
          </Link>
        </div>

        {/* Highlight Stats Row */}
        <div className="gypso-stats-row">
          <div className="gypso-stat-card">
            <div className="gypso-stat-val">100% Offline</div>
            <div className="gypso-stat-lbl">Database Locale Hive AES-256</div>
          </div>
          <div className="gypso-stat-card">
            <div className="gypso-stat-val">AutoCAD DXF</div>
            <div className="gypso-stat-lbl">Export Planimetrie Vettoriali</div>
          </div>
          <div className="gypso-stat-card">
            <div className="gypso-stat-val">Sfrido 1D</div>
            <div className="gypso-stat-lbl">Algoritmo Bin-Packing Tagli</div>
          </div>
          <div className="gypso-stat-card">
            <div className="gypso-stat-val">Firma PDF</div>
            <div className="gypso-stat-lbl">Preventivo con Firma su Touch</div>
          </div>
          <div className="gypso-stat-card">
            <div className="gypso-stat-val">Portata Furgone</div>
            <div className="gypso-stat-lbl">Stima Peso Carico CdS 1.200 kg</div>
          </div>
          <div className="gypso-stat-card">
            <div className="gypso-stat-val">5 Lingue</div>
            <div className="gypso-stat-lbl">IT, EN, ES, DE, FR con Guida</div>
          </div>
        </div>
      </section>

      {/* CAD Preview & Demonstration Section */}
      <section id="cad-preview" className="gypso-section">
        <h2 className="gypso-section-title">Editor CAD Nativo per Planimetrie 2D</h2>
        <p className="gypso-section-desc">
          Disegna pareti, contropareti e controsoffitti direttamente su smartphone o tablet con coordinate cartesiane, snapping magnetico, visualizzazione dell'orditura metallica e inserimento rapido degli ostacoli di cantiere.
        </p>

        <div className="gypso-cad-mockup">
          <div className="gypso-cad-header">
            <div className="gypso-cad-dots">
              <span className="gypso-dot gypso-dot-red" />
              <span className="gypso-dot gypso-dot-yellow" />
              <span className="gypso-dot gypso-dot-green" />
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--gypso-text-secondary)", fontFamily: "monospace" }}>
              GYPSO CAD Canvas 2D — Cantiere: Soggiorno_Residenziale.cart
            </div>
            <div style={{ display: "flex", gap: "12px", color: "var(--gypso-cyan)", fontSize: "0.8rem" }}>
              <span>SNAP: ON</span>
              <span>GRID: 10cm</span>
              <span>ORDITURA: 60cm</span>
            </div>
          </div>

          <div className="gypso-cad-body">
            <div className="gypso-cad-room">
              <div className="gypso-cad-label-w">LARGHEZZA: 5.00 m</div>
              <div className="gypso-cad-label-h">ALTEZZA: 4.00 m</div>

              {/* Ostacoli interattivi e aperture */}
              <div className="gypso-cad-obstacle" style={{ top: "24px", left: "24px", width: "64px", height: "42px" }}>
                Finestra 120x140
              </div>
              <div
                className="gypso-cad-obstacle"
                style={{
                  bottom: "0px",
                  right: "48px",
                  width: "72px",
                  height: "18px",
                  background: "rgba(0, 229, 255, 0.25)",
                  borderColor: "var(--gypso-cyan)",
                }}
              >
                Porta 80x210
              </div>
              <div
                className="gypso-cad-obstacle"
                style={{
                  top: "90px",
                  right: "70px",
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "rgba(156, 39, 176, 0.35)",
                  borderColor: "var(--gypso-purple)",
                }}
              >
                Pilastro Ø40
              </div>
              <div
                className="gypso-cad-obstacle"
                style={{
                  top: "140px",
                  left: "90px",
                  width: "80px",
                  height: "22px",
                  background: "rgba(255, 152, 0, 0.25)",
                  borderColor: "var(--gypso-orange)",
                  fontSize: "0.68rem",
                }}
              >
                Gola LED 15x8
              </div>

              {/* Informazioni progetto nel Canvas */}
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "14px",
                  color: "var(--gypso-cyan)",
                  fontSize: "0.78rem",
                  fontFamily: "monospace",
                  background: "rgba(10, 14, 23, 0.75)",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: "1px solid rgba(0, 229, 255, 0.2)",
                }}
              >
                Superficie Netta: 18.32 m² · Montanti C: 9 pz · Guide U: 18 m
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section id="features" className="gypso-section">
        <h2 className="gypso-section-title">Caratteristiche Principali</h2>
        <p className="gypso-section-desc">
          Progettata sul campo per cartongessisti professionisti, posatori, geometri ed imprese di finiture a secco per abbattere i costi, azzerare gli errori di preventivazione ed eliminare gli sprechi di materiale.
        </p>

        <div className="gypso-features-grid">
          {/* Feature 1 */}
          <div className="gypso-card gypso-feature-card">
            <div className="gypso-feature-icon">
              <Ruler size={26} />
            </div>
            <h3 className="gypso-feature-title">Disegno Vettoriale & Ostacoli Dinamici</h3>
            <p className="gypso-feature-text">
              Rilievo rapido 2D con coordinate cartesiane e inserimento parametrico di finestre, porte, velette ribassate, nicchie, gole luminose per strip LED, bocchette dell'aria e pilastri (sia circolari che quadrati), con ricalcolo immediato della superficie netta.
            </p>
          </div>

          {/* Feature 2: DXF Export */}
          <div className="gypso-card gypso-feature-card">
            <div
              className="gypso-feature-icon"
              style={{
                color: "var(--gypso-blue)",
                borderColor: "rgba(0, 176, 255, 0.3)",
                background: "rgba(0, 176, 255, 0.1)",
              }}
            >
              <Download size={26} />
            </div>
            <h3 className="gypso-feature-title">Esportazione AutoCAD DXF</h3>
            <p className="gypso-feature-text">
              Genera file vettoriali standard <code>.dxf</code> compatibili con AutoCAD, progeCAD, DWG FastView o nanoCAD. Strutturato a layer separati per perimetro murario, orditura metallica, lastre e quote di cantiere.
            </p>
          </div>

          {/* Feature 3: Sfrido 1D */}
          <div className="gypso-card gypso-feature-card">
            <div
              className="gypso-feature-icon"
              style={{
                color: "var(--gypso-purple)",
                borderColor: "rgba(156, 39, 176, 0.3)",
                background: "rgba(156, 39, 176, 0.1)",
              }}
            >
              <Scissors size={26} />
            </div>
            <h3 className="gypso-feature-title">Ottimizzazione Taglio Barra 1D (Bin-Packing)</h3>
            <p className="gypso-feature-text">
              Algoritmo di taglio monodimensionale che distribuisce gli spezzoni di montanti e guide sulle barre commerciali standard (300 cm o 400 cm), fornendo lo schema di taglio sequenziale e riducendo lo scarto di officina al minimo teorico.
            </p>
          </div>

          {/* Feature 4: Preventivi & Firma */}
          <div className="gypso-card gypso-feature-card">
            <div
              className="gypso-feature-icon"
              style={{
                color: "var(--gypso-green)",
                borderColor: "rgba(0, 230, 118, 0.3)",
                background: "rgba(0, 230, 118, 0.1)",
              }}
            >
              <FileText size={26} />
            </div>
            <h3 className="gypso-feature-title">Preventivi PDF & Firma Cliente su Touch</h3>
            <p className="gypso-feature-text">
              Genera preventivi completi e computi estimativi in PDF con logo della tua ditta, dati fiscali (P.IVA, SDI, IBAN), distinta costi materiale, manodopera, ricarico marginale e riquadro per l'acquisizione della firma d'accettazione su touchscreen (FES eIDAS).
            </p>
          </div>

          {/* Feature 5: Portata Veicolo */}
          <div className="gypso-card gypso-feature-card">
            <div
              className="gypso-feature-icon"
              style={{
                color: "var(--gypso-orange)",
                borderColor: "rgba(255, 152, 0, 0.3)",
                background: "rgba(255, 152, 0, 0.1)",
              }}
            >
              <Truck size={26} />
            </div>
            <h3 className="gypso-feature-title">Stima Carico & Portata Furgone (CdS)</h3>
            <p className="gypso-feature-text">
              Calcola in tempo reale il peso complessivo dei materiali ordinati (lastre, profili in acciaio, secchi di stucco, isolanti) e verifica la compatibilità con la portata utile dei veicoli commerciali leggeri (Patente B, soglia 1.200 kg).
            </p>
          </div>

          {/* Feature 6: Sovrapposizioni e Orditura UNI 11424 */}
          <div className="gypso-card gypso-feature-card">
            <div
              className="gypso-feature-icon"
              style={{
                color: "var(--gypso-pink)",
                borderColor: "rgba(233, 30, 99, 0.3)",
                background: "rgba(233, 30, 99, 0.1)",
              }}
            >
              <Layers size={26} />
            </div>
            <h3 className="gypso-feature-title">Stratigrafie Multiple & Livelli di Stuccatura</h3>
            <p className="gypso-feature-text">
              Supporto per lastre Standard (A), Idrorepellenti (H2), Antifuoco (F), Acustiche ed Alta Resistenza. Gestione lastre singole o a doppio strato con sfalsamento giunti, orditure a passo 40cm o 60cm e livelli di finitura superficie da Q1 a Q4.
            </p>
          </div>

          {/* Feature 7: Foto Cantiere */}
          <div className="gypso-card gypso-feature-card">
            <div
              className="gypso-feature-icon"
              style={{
                color: "var(--gypso-cyan)",
                borderColor: "rgba(0, 229, 255, 0.3)",
                background: "rgba(0, 229, 255, 0.1)",
              }}
            >
              <Camera size={26} />
            </div>
            <h3 className="gypso-feature-title">Fascicolo Fotografico di Cantiere</h3>
            <p className="gypso-feature-text">
              Scatta e allega direttamente al fascicolo di progetto le fotografie delle fasi esecutive: stato di fatto iniziale, posa dell'orditura metallica, impianti passanti e risultato finito per perizie, archivio e SAL.
            </p>
          </div>

          {/* Feature 8: Database Locale Cifrato Hive */}
          <div className="gypso-card gypso-feature-card">
            <div
              className="gypso-feature-icon"
              style={{
                color: "var(--gypso-purple)",
                borderColor: "rgba(156, 39, 176, 0.3)",
                background: "rgba(156, 39, 176, 0.1)",
              }}
            >
              <HardDrive size={26} />
            </div>
            <h3 className="gypso-feature-title">Database Locale Cifrato Hive (100% Offline)</h3>
            <p className="gypso-feature-text">
              Funziona al 100% senza connessione internet nei seminterrati e cantieri isolati. Tutti i progetti, i preventivi e i listini sono salvati localmente con cifratura AES-256 ed esportabili in archivio protetto <code>.cart</code>.
            </p>
          </div>

          {/* Feature 9: Privacy by Design */}
          <div className="gypso-card gypso-feature-card">
            <div className="gypso-feature-icon">
              <Shield size={26} />
            </div>
            <h3 className="gypso-feature-title">Privacy by Design & Trasparenza GDPR</h3>
            <p className="gypso-feature-text">
              Nessun dato aziendale, cliente o preventivo viene inviato o profilato su server remoti. Piena conformità al Regolamento UE 2016/679 (GDPR) con gestione trasparente del consenso pubblicitario tramite Google UMP SDK.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing & Plans Section (Free vs Premium PRO) */}
      <section id="plans" className="gypso-section">
        <h2 className="gypso-section-title">Modello Trasparente: Zero Abbonamenti</h2>
        <p className="gypso-section-desc">
          GYPSO crede nel rispetto del professionista: niente abbonamenti mensili ricorrenti o canoni nascosti. La versione Free è subito utile, e il passaggio a PRO è un acquisto a vita una tantum (Lifetime).
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px", maxWidth: "940px", margin: "0 auto" }}>
          {/* Card FREE */}
          <div
            className="gypso-card"
            style={{
              padding: "36px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              border: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  background: "rgba(255, 255, 255, 0.08)",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--gypso-text-secondary)",
                  marginBottom: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Versione Base
              </div>
              <h3 style={{ fontFamily: "Outfit, sans-serif", fontSize: "1.8rem", margin: "0 0 8px 0" }}>
                GYPSO Free
              </h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "16px" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: "2.4rem", fontWeight: 700, color: "white" }}>
                  0 €
                </span>
                <span style={{ color: "var(--gypso-text-muted)", fontSize: "0.95rem" }}>
                  / per sempre
                </span>
              </div>
              <p style={{ color: "var(--gypso-text-secondary)", fontSize: "0.92rem", lineHeight: "1.6", marginBottom: "24px" }}>
                Ideale per calcoli rapidi in cantiere, verifica delle superfici e dimensionamento orditure.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <Check size={18} style={{ color: "var(--gypso-cyan)", flexShrink: 0 }} />
                  <span>Calcolo rapido e risultati tecnici completi</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <Check size={18} style={{ color: "var(--gypso-cyan)", flexShrink: 0 }} />
                  <span>Fino a <strong>3 progetti salvati</strong> (demo escluso)</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <Check size={18} style={{ color: "var(--gypso-cyan)", flexShrink: 0 }} />
                  <span>Editor CAD 2D e calcolo ostacoli</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <Check size={18} style={{ color: "var(--gypso-cyan)", flexShrink: 0 }} />
                  <span>Distinta base materiali e stima peso veicolo</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem", color: "var(--gypso-text-secondary)" }}>
                  <Check size={18} style={{ color: "var(--gypso-cyan)", flexShrink: 0 }} />
                  <span>Esportazione PDF con watermark di prova</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem", color: "var(--gypso-text-muted)" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1" }}>ℹ️</span>
                  <span>Annunci discreti (mai durante CAD o calcolo)</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#cad-preview"
                className="gypso-btn-secondary"
                style={{ width: "100%", justifyContent: "center", textAlign: "center" }}
              >
                Inizia Subito Gratis
              </a>
            </div>
          </div>

          {/* Card PREMIUM PRO */}
          <div
            className="gypso-card"
            style={{
              padding: "36px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              border: "1px solid rgba(0, 229, 255, 0.4)",
              background: "linear-gradient(135deg, rgba(0, 229, 255, 0.08) 0%, rgba(18, 22, 33, 0.85) 100%)",
              boxShadow: "0 10px 40px rgba(0, 229, 255, 0.15)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "20px",
                background: "linear-gradient(135deg, var(--gypso-cyan), var(--gypso-blue))",
                color: "#0c0e14",
                fontWeight: 700,
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                padding: "4px 12px",
                borderRadius: "20px",
              }}
            >
              Lifetime Una Tantum
            </div>

            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  background: "rgba(0, 229, 255, 0.15)",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--gypso-cyan)",
                  marginBottom: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Consigliato per Professionisti
              </div>
              <h3 style={{ fontFamily: "Outfit, sans-serif", fontSize: "1.8rem", margin: "0 0 8px 0" }}>
                GYPSO PRO
              </h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "16px" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: "2.4rem", fontWeight: 700, color: "var(--gypso-cyan)" }}>
                  Licenza PRO
                </span>
                <span style={{ color: "var(--gypso-text-secondary)", fontSize: "0.95rem" }}>
                  / acquisto a vita
                </span>
              </div>
              <p style={{ color: "var(--gypso-text-secondary)", fontSize: "0.92rem", lineHeight: "1.6", marginBottom: "24px" }}>
                Lo strumento completo per artigiani e imprese: preventivi commerciali, CAD DXF e cantieri illimitati.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gypso-green)", flexShrink: 0 }} />
                  <span><strong>Progetti e cantieri illimitati</strong></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gypso-green)", flexShrink: 0 }} />
                  <span><strong>Esportazione AutoCAD DXF (.dxf)</strong> a livelli</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gypso-green)", flexShrink: 0 }} />
                  <span><strong>PDF senza watermark</strong> con logo della tua ditta</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gypso-green)", flexShrink: 0 }} />
                  <span><strong>Firma cliente su touchscreen</strong> per accettazione offerta</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gypso-green)", flexShrink: 0 }} />
                  <span><strong>Listino prezzi interno</strong> (materiali e posa oraria/m²)</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gypso-green)", flexShrink: 0 }} />
                  <span><strong>Backup completo ed esportazione</strong> cantieri <code>.cart</code></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gypso-green)", flexShrink: 0 }} />
                  <span><strong>Rimozione definitiva di tutta la pubblicità</strong></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gypso-green)", flexShrink: 0 }} />
                  <span>Acquisto certificato via Google Play / App Store (Ripristina sempre)</span>
                </div>
              </div>
            </div>

            <div>
              <Link
                to="/gypso/terms"
                className="gypso-btn-primary"
                style={{ width: "100%", justifyContent: "center", textAlign: "center" }}
              >
                Scopri Termini & Licenza PRO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture & Specs Section */}
      <section id="specs" className="gypso-section">
        <h2 className="gypso-section-title">Architettura & Stack Tecnologico</h2>
        <p className="gypso-section-desc">
          Costruita con tecnologia all'avanguardia per garantire prestazioni istantanee a 60 fps, stabilità assoluta e conformità agli standard di cantiere.
        </p>

        <div className="gypso-features-grid">
          <div className="gypso-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
              <Cpu size={24} color="var(--gypso-cyan)" />
              <h3 style={{ fontFamily: "Outfit", fontSize: "1.2rem", margin: 0 }}>Motore Flutter 3.9+ & Riverpod</h3>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--gypso-text-secondary)", lineHeight: "1.6" }}>
              Compilazione nativa AOT (Ahead-of-Time) per smartphone e tablet Android & iOS con reattività istantanea anche su planimetrie estese.
            </p>
          </div>

          <div className="gypso-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
              <Lock size={24} color="var(--gypso-purple)" />
              <h3 style={{ fontFamily: "Outfit", fontSize: "1.2rem", margin: 0 }}>Hive NoSQL Cifrato AES-256</h3>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--gypso-text-secondary)", lineHeight: "1.6" }}>
              Storage locale ad altissima velocità. Nessuna latenza di rete, nessun login obbligatorio e massima riservatezza per listini e dati clienti.
            </p>
          </div>

          <div className="gypso-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
              <PackageCheck size={24} color="var(--gypso-green)" />
              <h3 style={{ fontFamily: "Outfit", fontSize: "1.2rem", margin: 0 }}>Store & Package Identity</h3>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--gypso-text-secondary)", lineHeight: "1.6" }}>
              Package Android ufficiale: <code>com.tosquidev.gypso</code>. Integrazione verificata con RevenueCat per acquisti In-App sicuri e ripristinabili.
            </p>
          </div>

          <div className="gypso-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
              <Globe size={24} color="var(--gypso-orange)" />
              <h3 style={{ fontFamily: "Outfit", fontSize: "1.2rem", margin: 0 }}>Guida & 5 Lingue Native</h3>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--gypso-text-secondary)", lineHeight: "1.6" }}>
              Manuale operativo integrato nell'app tradotto interamente in Italiano 🇮🇹, English 🇬🇧, Deutsch 🇩🇪, Français 🇫🇷 ed Español 🇪🇸.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy & Legal Call-to-action Banner */}
      <section className="gypso-section">
        <div className="gypso-privacy-banner">
          <div className="gypso-privacy-text">
            <h3>Trasparenza Legale, Privacy & EULA</h3>
            <p>
              Consulta la nostra Informativa sulla Privacy conforme al Regolamento Generale sulla Protezione dei Dati (GDPR) e i Termini di Servizio (EULA) con il disclaimer di cantiere e i dettagli della licenza PRO.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link to="/gypso/privacy" className="gypso-btn-primary">
              <Shield size={18} /> Privacy Policy
            </Link>
            <Link to="/gypso/terms" className="gypso-btn-secondary">
              <FileText size={18} /> Termini di Servizio (EULA)
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gypso-footer">
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginBottom: "12px" }}>
          <a href="#features" style={{ color: "var(--gypso-cyan)", textDecoration: "none", fontSize: "0.85rem" }}>
            Funzionalità
          </a>
          <span style={{ color: "var(--gypso-text-muted)" }}>•</span>
          <a href="#cad-preview" style={{ color: "var(--gypso-cyan)", textDecoration: "none", fontSize: "0.85rem" }}>
            Editor CAD 2D
          </a>
          <span style={{ color: "var(--gypso-text-muted)" }}>•</span>
          <a href="#plans" style={{ color: "var(--gypso-cyan)", textDecoration: "none", fontSize: "0.85rem" }}>
            Piani & Prezzi
          </a>
          <span style={{ color: "var(--gypso-text-muted)" }}>•</span>
          <Link to="/gypso/privacy" style={{ color: "var(--gypso-cyan)", textDecoration: "none", fontSize: "0.85rem" }}>
            Informativa Privacy
          </Link>
          <span style={{ color: "var(--gypso-text-muted)" }}>•</span>
          <Link to="/gypso/terms" style={{ color: "var(--gypso-cyan)", textDecoration: "none", fontSize: "0.85rem" }}>
            Termini di Servizio (EULA)
          </Link>
          <span style={{ color: "var(--gypso-text-muted)" }}>•</span>
          <Link to="/" style={{ color: "var(--gypso-cyan)", textDecoration: "none", fontSize: "0.85rem" }}>
            Portfolio Antonio Squillace
          </Link>
        </div>
        <p>© {new Date().getFullYear()} GYPSO — com.tosquidev.gypso. Tutti i diritti riservati.</p>
      </footer>
    </div>
  )
}

export default GypsoIndexPage

export const Head: HeadFC = () => (
  <>
    <title>GYPSO — Calcolo Professionale Cartongesso, Editor CAD 2D & Computo Metrico</title>
    <meta
      name="description"
      content="GYPSO è l'applicazione professionale per cartongessisti, artigiani e geometri. Editor CAD 2D, esportazione AutoCAD DXF, calcolo sfrido barre 1D e preventivi PDF con firma cliente su touchscreen."
    />
  </>
)
