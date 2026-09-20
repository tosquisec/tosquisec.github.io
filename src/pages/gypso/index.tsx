import * as React from "react"
import { useState } from "react"
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
  Sun,
  Moon,
  Eye,
  Flame,
  Volume2,
  MessageSquare,
  Triangle,
  Compass,
} from "lucide-react"

import "../../styles/gypso.css"

const GypsoIndexPage: React.FC<PageProps> = () => {
  const [visualMode, setVisualMode] = useState<"standard" | "cantiere" | "sole">("standard")

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
          Lo Studio Tecnico Tascabile per il Cartongessista Moderno: Rilievo CAD 2D anche Fuori Squadra, Distinta Base Materiali, Posa a Norma UNI 11424, Stima Peso Furgone Patente B, Ordine WhatsApp e Preventivi PDF con Firma su Schermo.
        </p>

        <div className="gypso-hero-actions">
          <a href="#features" className="gypso-btn-primary">
            <Ruler size={18} /> Scopri le Funzionalità
          </a>
          <a href="#pro-features" className="gypso-btn-secondary">
            <Zap size={18} /> Versione PRO
          </a>
          <Link to="/gypso/privacy" className="gypso-btn-secondary">
            <Shield size={18} /> Informativa Privacy
          </Link>
          <Link to="/gypso/terms" className="gypso-btn-secondary">
            <FileText size={18} /> Termini di Servizio
          </Link>
        </div>

        {/* Highlight Stats Row (6 metriche chiave) */}
        <div className="gypso-stats-row" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          <div className="gypso-stat-card">
            <div className="gypso-stat-val">100% Offline</div>
            <div className="gypso-stat-lbl">Zero Cloud · Storage Locale Cifrato</div>
          </div>
          <div className="gypso-stat-card">
            <div className="gypso-stat-val">11 Lingue</div>
            <div className="gypso-stat-lbl">IT, EN, ES, FR, DE, PT, RO, PL, NL, UK, AR</div>
          </div>
          <div className="gypso-stat-card">
            <div className="gypso-stat-val">AutoCAD DXF</div>
            <div className="gypso-stat-lbl">Export Planimetrie Vettoriali a Livelli</div>
          </div>
          <div className="gypso-stat-card">
            <div className="gypso-stat-val">Sfrido &lt; 4%</div>
            <div className="gypso-stat-lbl">Algoritmo 1D Bin-Packing Taglio Barre</div>
          </div>
          <div className="gypso-stat-card">
            <div className="gypso-stat-val">Portata Furgone</div>
            <div className="gypso-stat-lbl">Stima Peso Carico CdS (Patente B 1.200 kg)</div>
          </div>
          <div className="gypso-stat-card">
            <div className="gypso-stat-val">Preventivo PDF</div>
            <div className="gypso-stat-lbl">Firma su Touchscreen & Ordine WhatsApp</div>
          </div>
        </div>
      </section>

      {/* CAD Preview & 3 Modalità Visive di Cantiere */}
      <section id="cad-preview" className="gypso-section">
        <h2 className="gypso-section-title">Editor CAD 2D & Geometrie Fuori Squadra</h2>
        <p className="gypso-section-desc">
          Disegna pareti, contropareti e controsoffitti su touch screen con coordinate cartesiane, snapping magnetico, visualizzazione dell'orditura metallica a norma UNI 11424 e funzione esclusiva <strong>Fuori Squadra</strong> con triangolazione di Erone.
        </p>

        {/* Visual Mode Selector Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
          <button
            onClick={() => setVisualMode("standard")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "10px",
              border: visualMode === "standard" ? "1px solid var(--gypso-cyan)" : "1px solid rgba(255, 255, 255, 0.1)",
              background: visualMode === "standard" ? "rgba(0, 229, 255, 0.15)" : "rgba(255, 255, 255, 0.04)",
              color: visualMode === "standard" ? "var(--gypso-cyan)" : "var(--gypso-text-secondary)",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            <Moon size={14} /> Modalità Standard (Glass Scuro)
          </button>
          <button
            onClick={() => setVisualMode("cantiere")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "10px",
              border: visualMode === "cantiere" ? "1px solid #f59e0b" : "1px solid rgba(255, 255, 255, 0.1)",
              background: visualMode === "cantiere" ? "rgba(245, 158, 11, 0.2)" : "rgba(255, 255, 255, 0.04)",
              color: visualMode === "cantiere" ? "#fbbf24" : "var(--gypso-text-secondary)",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            <Eye size={14} /> Modalità Cantiere (Alto Contrasto)
          </button>
          <button
            onClick={() => setVisualMode("sole")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "10px",
              border: visualMode === "sole" ? "1px solid #38bdf8" : "1px solid rgba(255, 255, 255, 0.1)",
              background: visualMode === "sole" ? "rgba(56, 189, 248, 0.2)" : "rgba(255, 255, 255, 0.04)",
              color: visualMode === "sole" ? "#38bdf8" : "var(--gypso-text-secondary)",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            <Sun size={14} /> Modalità Sole (Antiriflesso)
          </button>
        </div>

        {/* CAD Canvas Mockup */}
        <div className="gypso-cad-mockup">
          <div className="gypso-cad-header">
            <div className="gypso-cad-dots">
              <span className="gypso-dot gypso-dot-red" />
              <span className="gypso-dot gypso-dot-yellow" />
              <span className="gypso-dot gypso-dot-green" />
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--gypso-text-secondary)", fontFamily: "monospace" }}>
              GYPSO CAD Canvas 2D — Progetto: Soggiorno_Residenziale.cart (Modo: {visualMode.toUpperCase()})
            </div>
            <div style={{ display: "flex", gap: "12px", color: "var(--gypso-cyan)", fontSize: "0.8rem" }}>
              <span>SNAP: ON</span>
              <span>ORDITURA: 60cm</span>
              <span>UNI 11424: OK</span>
            </div>
          </div>

          <div
            className="gypso-cad-body"
            style={{
              background:
                visualMode === "sole"
                  ? "#f1f5f9"
                  : visualMode === "cantiere"
                  ? "#050508"
                  : "radial-gradient(circle at center, #0f172a 0%, #090d16 100%)",
            }}
          >
            <div
              className="gypso-cad-room"
              style={{
                borderColor: visualMode === "sole" ? "#0284c7" : visualMode === "cantiere" ? "#f59e0b" : "var(--gypso-cyan)",
              }}
            >
              <div
                className="gypso-cad-label-w"
                style={{ color: visualMode === "sole" ? "#0f172a" : "var(--gypso-cyan)" }}
              >
                LARGHEZZA: 5.00 m (+10 / +50 / +100 cm)
              </div>
              <div
                className="gypso-cad-label-h"
                style={{ color: visualMode === "sole" ? "#0f172a" : "var(--gypso-cyan)" }}
              >
                ALTEZZA: 4.00 m
              </div>

              {/* Ostacoli e aperture realistiche del motore GYPSO */}
              <div
                className="gypso-cad-obstacle"
                style={{
                  top: "24px",
                  left: "24px",
                  width: "64px",
                  height: "42px",
                  borderColor: visualMode === "sole" ? "#0284c7" : "var(--gypso-cyan)",
                  color: visualMode === "sole" ? "#0f172a" : "white",
                }}
              >
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
                  color: visualMode === "sole" ? "#0f172a" : "white",
                }}
              >
                Porta 80x210
              </div>
              <div
                className="gypso-cad-obstacle"
                style={{
                  top: "80px",
                  right: "60px",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "rgba(156, 39, 176, 0.35)",
                  borderColor: "var(--gypso-purple)",
                  color: visualMode === "sole" ? "#0f172a" : "white",
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
                  color: visualMode === "sole" ? "#0f172a" : "white",
                }}
              >
                Gola LED 15x8
              </div>

              {/* Box di stato cantiere */}
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "14px",
                  color: visualMode === "sole" ? "#0f172a" : "var(--gypso-cyan)",
                  fontSize: "0.78rem",
                  fontFamily: "monospace",
                  background: visualMode === "sole" ? "rgba(255, 255, 255, 0.9)" : "rgba(10, 14, 23, 0.8)",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: "1px solid rgba(0, 229, 255, 0.2)",
                }}
              >
                Sup. Netta: 18.32 m² · Montanti C50: 9 pz · Guide U50: 18 m · Sfrido Tagli: 2.8%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section id="features" className="gypso-section">
        <h2 className="gypso-section-title">Strumenti Ingegnerizzati per il Cantiere</h2>
        <p className="gypso-section-desc">
          Dalla misura col distanziometro laser all'ordine materiali su WhatsApp e alla firma d'accettazione del committente.
        </p>

        <div className="gypso-features-grid">
          {/* Feature 1: CAD & Fuori Squadra */}
          <div className="gypso-card gypso-feature-card">
            <div className="gypso-feature-icon">
              <Compass size={26} />
            </div>
            <h3 className="gypso-feature-title">Rilievo Vettoriale & Stanze Fuori Squadra</h3>
            <p className="gypso-feature-text">
              Risolve stanze fuori squadra inserendo i 4 lati e la diagonale (triangolazione con <strong>Formula di Erone</strong>). Include calcolo dell'area poligonale con la <strong>Formula di Gauss (Shoelace)</strong>, snapping magnetico e tasti rapidi laser (+10 cm, +50 cm, +100 cm).
            </p>
          </div>

          {/* Feature 2: AutoCAD DXF */}
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
            <h3 className="gypso-feature-title">Esportazione AutoCAD DXF (.dxf)</h3>
            <p className="gypso-feature-text">
              Esporta planimetrie vettoriali 2D standard compatibili con AutoCAD, DWG FastView, progeCAD e nanoCAD. Strutturato a layer separati per perimetro murario, orditura metallica, lastre e forometrie con quote.
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
            <h3 className="gypso-feature-title">Ottimizzazione Taglio Barre 1D (CSP)</h3>
            <p className="gypso-feature-text">
              Risolve il <em>Cutting Stock Problem</em> unidimensionale con euristica First-Fit Decreasing (FFD) su barre commerciali da 300 cm o 400 cm. Fornisce la guida sequenziale di taglio per abbattere lo sfrido sotto al 4%.
            </p>
          </div>

          {/* Feature 4: Logistica Furgone */}
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
            <h3 className="gypso-feature-title">Controllo Carico Furgone & WhatsApp</h3>
            <p className="gypso-feature-text">
              Calcola il peso totale del carico in Kg e Quintali secondo matrici certificate di densità (lastre standard, idro, fuoco, profili zincati, sacchi stucco da 25 kg). Verifica la conformità al Codice della Strada (Patente B, soglia 1.200 kg) e genera il messaggio d'ordine preformattato per WhatsApp.
            </p>
          </div>

          {/* Feature 5: Preventivi PDF & Firma Touch */}
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
            <h3 className="gypso-feature-title">Preventivi PDF con Firma Touchscreen</h3>
            <p className="gypso-feature-text">
              Computo estimativo completo con intestazione ditta, logo, costi manodopera (a ore o a m²), ricarico d'impresa, aliquote IVA agevolate (4%, 10%, 22%), sconto commerciale, arrotondamento rapido a € 50 e riquadro firma cliente su touchscreen (FES eIDAS).
            </p>
          </div>

          {/* Feature 6: Posa UNI 11424 & Stratigrafie */}
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
            <h3 className="gypso-feature-title">Posa a Norma UNI 11424 & Finiture Q1-Q4</h3>
            <p className="gypso-feature-text">
              Sfalsamento automatico dei giunti longitudinale e trasversale anti-fessurazione. Gestione lastre Standard (A), Idro (H2), Fuoco (F), Acustiche, orditure a passo 40/60 cm, controsoffitti autoportanti o inclinati per mansarde, e 4 livelli di stuccatura da Q1 a Q4.
            </p>
          </div>

          {/* Feature 7: Sistemi Certificati */}
          <div className="gypso-card gypso-feature-card">
            <div
              className="gypso-feature-icon"
              style={{
                color: "#f59e0b",
                borderColor: "rgba(245, 158, 11, 0.3)",
                background: "rgba(245, 158, 11, 0.1)",
              }}
            >
              <Flame size={26} />
            </div>
            <h3 className="gypso-feature-title">Sistemi Certificati REI & Acustica</h3>
            <p className="gypso-feature-text">
              Preset tecnici certificati dei principali produttori per pareti tagliafuoco (REI 60, REI 120), divisori fonoisolanti ad alto abbattimento acustico (fino a 55 dB) e contropareti termiche con isolante integrato in lana minerale o EPS.
            </p>
          </div>

          {/* Feature 8: Foto Cantiere */}
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
              Scatta o allega immagini di cantiere organizzate per stanza e stato dei lavori: rilievo iniziale, orditura metallica, impianti passanti e finitura ultimata con didascalie tecniche, pronte per documentare SAL o perizie.
            </p>
          </div>

          {/* Feature 9: 11 Lingue & Accessibilità */}
          <div className="gypso-card gypso-feature-card">
            <div className="gypso-feature-icon">
              <Globe size={26} />
            </div>
            <h3 className="gypso-feature-title">11 Lingue Native & Standard WCAG</h3>
            <p className="gypso-feature-text">
              Traduzione nativa in <strong>11 lingue</strong>: Italiano 🇮🇹, English 🇬🇧, Español 🇪🇸, Français 🇫🇷, Deutsch 🇩🇪, Português 🇵🇹, Română 🇷🇴, Polski 🇵🇱, Nederlands 🇳🇱, Українська 🇺🇦 e العربية 🇸🇦 (con supporto completo interfaccia RTL). Include conformità WCAG 2.3.3 con modalità "Riduci animazioni".
            </p>
          </div>
        </div>
      </section>

      {/* Free vs PRO Comparison Section */}
      <section id="pro-features" className="gypso-section">
        <h2 className="gypso-section-title">Funzionalità Free & Versione PRO</h2>
        <p className="gypso-section-desc">
          Scegli la configurazione più adatta alle tue esigenze di cantiere: inizia con la versione gratuita o passa alla versione PRO per sbloccare tutti gli strumenti avanzati.
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
              <h3 style={{ fontFamily: "Outfit, sans-serif", fontSize: "1.8rem", margin: "0 0 12px 0" }}>
                GYPSO Free
              </h3>
              <p style={{ color: "var(--gypso-text-secondary)", fontSize: "0.92rem", lineHeight: "1.6", marginBottom: "24px" }}>
                Tutti i calcoli tecnici a tua disposizione per rilievi, verifica di fattibilità e dimensionamento materiali.
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
                  <span>Editor CAD 2D, forometrie e fuori squadra</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <Check size={18} style={{ color: "var(--gypso-cyan)", flexShrink: 0 }} />
                  <span>Distinta base materiali e stima peso veicolo</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <Check size={18} style={{ color: "var(--gypso-cyan)", flexShrink: 0 }} />
                  <span>11 lingue native incluse con manuale d'uso</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem", color: "var(--gypso-text-secondary)" }}>
                  <Check size={18} style={{ color: "var(--gypso-cyan)", flexShrink: 0 }} />
                  <span>Preventivi PDF di prova con watermark</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem", color: "var(--gypso-text-muted)" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1" }}>ℹ️</span>
                  <span>Banner discreti solo nella Home passiva</span>
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
              Versione Completa
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
              <h3 style={{ fontFamily: "Outfit, sans-serif", fontSize: "1.8rem", margin: "0 0 12px 0" }}>
                GYPSO PRO
              </h3>
              <p style={{ color: "var(--gypso-text-secondary)", fontSize: "0.92rem", lineHeight: "1.6", marginBottom: "24px" }}>
                Tutto ciò che serve per gestire commesse, contratti e preventivi aziendali con il massimo rigore formale.
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
                  <span><strong>PDF professionali senza watermark</strong> con logo ditta</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gypso-green)", flexShrink: 0 }} />
                  <span><strong>Firma cliente su touchscreen</strong> per accettazione offerta</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gypso-green)", flexShrink: 0 }} />
                  <span><strong>Listino prezzi personalizzato</strong> (materiali e posa oraria/m²)</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gypso-green)", flexShrink: 0 }} />
                  <span><strong>Backup completo ed esportazione</strong> cantieri <code>.cart</code> e <code>.zip</code></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gypso-green)", flexShrink: 0 }} />
                  <span><strong>Documentazione fotografica cantiere</strong> illimitata</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gypso-green)", flexShrink: 0 }} />
                  <span><strong>Rimozione definitiva di tutta la pubblicità</strong></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--gypso-green)", flexShrink: 0 }} />
                  <span>Acquisto verificato e ripristinabile tramite Google Play / App Store</span>
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

      {/* Technical Architecture Section */}
      <section id="specs" className="gypso-section">
        <h2 className="gypso-section-title">Architettura & Specifiche Tecniche</h2>
        <p className="gypso-section-desc">
          Progettata secondo principi di ingegneria del software enterprise per garantire massima fluidità e affidabilità operativa in cantiere.
        </p>

        <div className="gypso-features-grid">
          <div className="gypso-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
              <Cpu size={24} color="var(--gypso-cyan)" />
              <h3 style={{ fontFamily: "Outfit", fontSize: "1.2rem", margin: 0 }}>Flutter 3.35+ & Impeller</h3>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--gypso-text-secondary)", lineHeight: "1.6" }}>
              Compilazione nativa AOT (Ahead-of-Time) per smartphone e tablet Android & iOS con rendering a 60 fps e reattività immediata su touch screen.
            </p>
          </div>

          <div className="gypso-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
              <Lock size={24} color="var(--gypso-purple)" />
              <h3 style={{ fontFamily: "Outfit", fontSize: "1.2rem", margin: 0 }}>Storage Locale Cifrato (100% Offline)</h3>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--gypso-text-secondary)", lineHeight: "1.6" }}>
              Nessun dato o preventivo transita su server esterni. Storage locale isolato in sandbox sicura con possibilità di backup esportabile in file compresso <code>.cart</code>.
            </p>
          </div>

          <div className="gypso-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
              <PackageCheck size={24} color="var(--gypso-green)" />
              <h3 style={{ fontFamily: "Outfit", fontSize: "1.2rem", margin: 0 }}>Identità Store & In-App Purchase</h3>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--gypso-text-secondary)", lineHeight: "1.6" }}>
              Package Android ufficiale: <code>com.tosquidev.gypso</code>. Gestione acquisti in-app integrata tramite RevenueCat SDK (Product ID: <code>gypso_full_v1</code>).
            </p>
          </div>

          <div className="gypso-card">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
              <Globe size={24} color="var(--gypso-orange)" />
              <h3 style={{ fontFamily: "Outfit", fontSize: "1.2rem", margin: 0 }}>11 Lingue con Supporto RTL</h3>
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--gypso-text-secondary)", lineHeight: "1.6" }}>
              Supporto completo per 11 mercati linguistici internazionali compreso l'Arabo (con direzione Right-to-Left) e dizionario di cantiere localizzato.
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
              Consulta la nostra Informativa sulla Privacy conforme al Regolamento Generale sulla Protezione dei Dati (GDPR) e i Termini di Servizio (EULA) con il disclaimer tecnico di cantiere e i dettagli della licenza PRO.
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
          <a href="#pro-features" style={{ color: "var(--gypso-cyan)", textDecoration: "none", fontSize: "0.85rem" }}>
            Versione PRO
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
    <title>GYPSO — Calcolo Professionale Cartongesso, CAD 2D & Computo Metrico</title>
    <meta
      name="description"
      content="GYPSO è l'applicazione professionale per cartongessisti, artigiani e geometri. Editor CAD 2D con rilievo fuori squadra, export AutoCAD DXF, calcolo sfrido barre 1D, stima carico furgone e preventivi PDF con firma cliente."
    />
  </>
)
