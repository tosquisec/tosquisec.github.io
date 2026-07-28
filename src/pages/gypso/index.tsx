import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Navbar from "../../components/Navbar"
import {
  ArrowLeft,
  Ruler,
  Shield,
  FileText,
  Layers,
  Scissors,
  Cpu,
  Globe,
  Smartphone,
  Sparkles,
  HardDrive
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
          <Sparkles size={14} /> App Professionale Cartongesso 2026
        </div>

        <img src="/gypso-icon.png" alt="GYPSO App Icon" className="gypso-hero-logo" />

        <h1 className="gypso-hero-title">GYPSO</h1>
        <p className="gypso-hero-subtitle">
          Calcolo Professionale Cartongesso, Editor CAD Nativo 2D, Ottimizzazione Sfrido e Computo Metrico Preventivabile in PDF.
        </p>

        <div className="gypso-hero-actions">
          <a href="#features" className="gypso-btn-primary">
            <Ruler size={18} /> Scopri le Funzionalità
          </a>
          <Link to="/gypso/privacypolicy" className="gypso-btn-secondary">
            <Shield size={18} /> Informativa Privacy
          </Link>
        </div>

        {/* Highlight Stats */}
        <div className="gypso-stats-row">
          <div className="gypso-stat-card">
            <div className="gypso-stat-val">100% Offline</div>
            <div className="gypso-stat-lbl">Database Locale Cifrato</div>
          </div>
          <div className="gypso-stat-card">
            <div className="gypso-stat-val">Sfrido Reale</div>
            <div className="gypso-stat-lbl">Algoritmo Ottimizzazione Barre</div>
          </div>
          <div className="gypso-stat-card">
            <div className="gypso-stat-val">Export PDF</div>
            <div className="gypso-stat-lbl">Preventivo con Firma Cliente</div>
          </div>
          <div className="gypso-stat-card">
            <div className="gypso-stat-val">5 Lingue</div>
            <div className="gypso-stat-lbl">IT, EN, ES, DE, FR</div>
          </div>
        </div>
      </section>

      {/* CAD Preview & Demonstration */}
      <section id="cad-preview" className="gypso-section">
        <h2 className="gypso-section-title">Editor CAD Nativo per Planimetrie 2D</h2>
        <p className="gypso-section-desc">
          Disegna pareti, controsoffitti e contropareti direttamente su touch screen o tablet con coordinate cartesiane, snapping intelligente e inserimento dinamico degli ostacoli.
        </p>

        <div className="gypso-cad-mockup">
          <div className="gypso-cad-header">
            <div className="gypso-cad-dots">
              <span className="gypso-dot gypso-dot-red" />
              <span className="gypso-dot gypso-dot-yellow" />
              <span className="gypso-dot gypso-dot-green" />
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--gypso-text-secondary)", fontFamily: "monospace" }}>
              GYPSO CAD Canvas 2D — Progetto: Soggiorno_Residenziale.cart
            </div>
            <div style={{ display: "flex", gap: "10px", color: "var(--gypso-cyan)", fontSize: "0.8rem" }}>
              <span>SNAP: ON</span>
              <span>GRID: 10cm</span>
            </div>
          </div>

          <div className="gypso-cad-body">
            <div className="gypso-cad-room">
              <div className="gypso-cad-label-w">LARGHEZZA: 5.00 m</div>
              <div className="gypso-cad-label-h">ALTEZZA: 4.00 m</div>

              <div className="gypso-cad-obstacle" style={{ top: "20px", left: "20px", width: "60px", height: "40px" }}>
                Finestra 120x140
              </div>
              <div className="gypso-cad-obstacle" style={{ bottom: "0px", right: "40px", width: "70px", height: "16px", background: "rgba(0, 229, 255, 0.2)" }}>
                Porta 80x210
              </div>
              <div className="gypso-cad-obstacle" style={{ top: "80px", right: "60px", width: "50px", height: "50px", borderRadius: "50%", background: "rgba(156, 39, 176, 0.3)", borderColor: "var(--gypso-purple)" }}>
                Pilastro Ø40
              </div>

              <div style={{ position: "absolute", bottom: "10px", left: "10px", color: "var(--gypso-cyan)", fontSize: "0.75rem", fontFamily: "monospace" }}>
                Superficie Netta: 20.00 m²
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section id="features" className="gypso-section">
        <h2 className="gypso-section-title">Caratteristiche Principali</h2>
        <p className="gypso-section-desc">
          Progettata su misura per artigiani cartongessisti, geometri ed imprese di ristrutturazione per eliminare gli sprechi di cantiere.
        </p>

        <div className="gypso-features-grid">
          <div className="gypso-card gypso-feature-card">
            <div className="gypso-feature-icon">
              <Ruler size={26} />
            </div>
            <h3 className="gypso-feature-title">Disegno Vettoriale & Ostacoli</h3>
            <p className="gypso-feature-text">
              Inserisci finestre, porte, velette, nicchie, gole luminose, bocchette dell'aria condizionata e pilastri (tondi e quadri) ricalcolando automaticamente la superficie netta.
            </p>
          </div>

          <div className="gypso-card gypso-feature-card">
            <div className="gypso-feature-icon" style={{ color: "var(--gypso-purple)", borderColor: "rgba(156, 39, 176, 0.3)", background: "rgba(156, 39, 176, 0.1)" }}>
              <Scissors size={26} />
            </div>
            <h3 className="gypso-feature-title">Ottimizzazione Taglio Barra 1D</h3>
            <p className="gypso-feature-text">
              Algoritmo di bin-packing che calcola il miglior schema di taglio delle barre metalliche commerciali (300 cm) riducendo lo scarto e lo sfrido ai minimi termini.
            </p>
          </div>

          <div className="gypso-card gypso-feature-card">
            <div className="gypso-feature-icon" style={{ color: "var(--gypso-green)", borderColor: "rgba(0, 230, 118, 0.3)", background: "rgba(0, 230, 118, 0.1)" }}>
              <FileText size={26} />
            </div>
            <h3 className="gypso-feature-title">Preventivi PDF & Firma Cliente</h3>
            <p className="gypso-feature-text">
              Genera preventivi completi e computi metrici in PDF con ripartizione imponibile, ricarico marginale, logo della ditta e riquadro per la firma di accettazione diretta.
            </p>
          </div>

          <div className="gypso-card gypso-feature-card">
            <div className="gypso-feature-icon" style={{ color: "var(--gypso-orange)", borderColor: "rgba(255, 152, 0, 0.3)", background: "rgba(255, 152, 0, 0.1)" }}>
              <Layers size={26} />
            </div>
            <h3 className="gypso-feature-title">Calcolo Sovrapposizioni (Q1-Q4)</h3>
            <p className="gypso-feature-text">
              Supporto per lastre Standard, Idrorepellenti, Antifuoco ed Acustiche. Gestione dei singoli strati e sfalsamento dei giunti per orditura a 40cm o 60cm.
            </p>
          </div>

          <div className="gypso-card gypso-feature-card">
            <div className="gypso-feature-icon" style={{ color: "var(--gypso-pink)", borderColor: "rgba(233, 30, 99, 0.3)", background: "rgba(233, 30, 99, 0.1)" }}>
              <HardDrive size={26} />
            </div>
            <h3 className="gypso-feature-title">Database Locale Cifrato Hive</h3>
            <p className="gypso-feature-text">
              100% Offline e velocissimo. Nessun bisogno di connessione internet nei cantieri o sotterranei. Esporta ed importa i tuoi cantieri nel formato sicuro <code>.cart</code>.
            </p>
          </div>

          <div className="gypso-card gypso-feature-card">
            <div className="gypso-feature-icon">
              <Shield size={26} />
            </div>
            <h3 className="gypso-feature-title">Privacy by Design & UMP SDK</h3>
            <p className="gypso-feature-text">
              Nessun tracciamento dati su server proprietari. Piena conformità al Regolamento Europeo GDPR tramite Google UMP SDK e consenso trasparente.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section id="specs" className="gypso-section">
        <h2 className="gypso-section-title">Architettura & Stack Tecnologico</h2>
        <p className="gypso-section-desc">
          Sviluppata per offrire prestazioni native ed istantanee sia su sistemi iOS che Android.
        </p>

        <div className="gypso-features-grid">
          <div className="gypso-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
              <Cpu size={24} color="var(--gypso-cyan)" />
              <h3 style={{ fontFamily: "Outfit", fontSize: "1.2rem", margin: 0 }}>Prestazioni Native</h3>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--gypso-text-secondary)" }}>
              Applicazione compilata nativamente per garantire massima fluidità e reattività anche su progetti complessi.
            </p>
          </div>

          <div className="gypso-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
              <Smartphone size={24} color="var(--gypso-purple)" />
              <h3 style={{ fontFamily: "Outfit", fontSize: "1.2rem", margin: 0 }}>Cross-Platform iOS & Android</h3>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--gypso-text-secondary)" }}>
              Esperienza coerente e responsiva adattata a smartphone e tablet con supporto per Apple App Store e Google Play Store.
            </p>
          </div>

          <div className="gypso-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
              <Globe size={24} color="var(--gypso-green)" />
              <h3 style={{ fontFamily: "Outfit", fontSize: "1.2rem", margin: 0 }}>Internazionalizzazione (i18n)</h3>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--gypso-text-secondary)" }}>
              Dizionario dinamico multilingua nativo con traduzioni localizzate per 5 mercati europei principali.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Call-to-action Banner */}
      <section className="gypso-section">
        <div className="gypso-privacy-banner">
          <div className="gypso-privacy-text">
            <h3>Trasparenza e Privacy</h3>
            <p>
              Consulta la nostra Informativa sulla Privacy dettagliata e conforme al GDPR per conoscere la nostra gestione dei dati locali e dei consensi pubblicitari.
            </p>
          </div>
          <Link to="/gypso/privacypolicy" className="gypso-btn-primary">
            <Shield size={18} /> Leggi la Privacy Policy
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="gypso-footer">
        <p>© {new Date().getFullYear()} GYPSO . Tutti i diritti riservati.</p>
        <p style={{ marginTop: "6px", fontSize: "0.8rem", color: "var(--gypso-text-muted)" }}>
        </p>
      </footer>
    </div>
  )
}

export default GypsoIndexPage

export const Head: HeadFC = () => (
  <>
    <title>GYPSO — Calcolo Professionale Cartongesso & Computo Metrico 2D</title>
    <meta name="description" content="GYPSO è l'applicazione professionale per cartongessisti, artigiani e geometri. Editor CAD 2D, calcolo dello sfrido reale e preventivi PDF." />
  </>
)

