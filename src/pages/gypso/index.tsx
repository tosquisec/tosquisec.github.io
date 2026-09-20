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
  ArrowRight,
  Sun,
  Moon,
  Eye,
  Flame,
  Volume2,
  MessageSquare,
  Triangle,
  Compass,
  ChevronLeft,
  Undo2,
  Redo2,
  RotateCw,
  HelpCircle,
  Pencil,
  Hand,
  DoorOpen,
  AppWindow,
  PlusSquare,
  Square,
  Circle,
  Plus,
  Minus,
  Maximize2,
  Grid,
  MapPin,
  Crosshair,
} from "lucide-react"

import "../../styles/gypso.css"

const GypsoIndexPage: React.FC<PageProps> = () => {
  const [visualMode, setVisualMode] = useState<"standard" | "cantiere" | "sole">("standard")
  const [activeCadTool, setActiveCadTool] = useState<"walls" | "select" | "door" | "window" | "special" | "pillarSquare" | "pillarRound">("door")
  const [cadZoom, setCadZoom] = useState<number>(1)

  const isSole = visualMode === "sole"
  const isCantiere = visualMode === "cantiere"

  // Palette matching Flutter CAD Painter & AppVisualMode
  const canvasBg = isSole ? "#f8fafc" : isCantiere ? "#000000" : "#080c14"
  const gridMinor = isSole ? "#e2e8f0" : isCantiere ? "#18181b" : "rgba(0, 229, 255, 0.05)"
  const gridMajor = isSole ? "#cbd5e1" : isCantiere ? "#27272a" : "rgba(0, 229, 255, 0.12)"
  const axisColor = isSole ? "#0284c7" : isCantiere ? "#f59e0b" : "#00e5ff"
  const axisTextColor = isSole ? "#64748b" : isCantiere ? "#a1a1aa" : "rgba(148, 163, 184, 0.55)"
  const wallStroke = isSole ? "#0f172a" : isCantiere ? "#fbbf24" : "#00e5ff"
  const nodeStroke = isSole ? "#0f172a" : isCantiere ? "#ffffff" : "#ffffff"
  const nodeFill = isSole ? "#ffffff" : isCantiere ? "#fbbf24" : "#00e5ff"
  const areaTextColor = isSole ? "#0284c7" : isCantiere ? "#facc15" : "#10b981"
  const pillBg = isSole ? "#ffffff" : isCantiere ? "#18181b" : "#0f172a"
  const pillBorder = isSole ? "#cbd5e1" : isCantiere ? "#f59e0b" : "rgba(0, 229, 255, 0.35)"
  const pillText = isSole ? "#0f172a" : isCantiere ? "#fef08a" : "#e2e8f0"
  const doorColor = isSole ? "#c2410c" : isCantiere ? "#f97316" : "#f59e0b"
  const windowColor = isSole ? "#0369a1" : isCantiere ? "#38bdf8" : "#00e5ff"
  const pillarColor = isSole ? "#6b21a8" : isCantiere ? "#c084fc" : "#a855f7"
  const nicheColor = isSole ? "#0e7490" : isCantiere ? "#22d3ee" : "#06b6d4"
  const spotlightColor = isSole ? "#ca8a04" : isCantiere ? "#facc15" : "#eab308"

  const getToolToast = () => {
    switch (activeCadTool) {
      case "door":
        return "Porta 80×210 cm posizionata · Tocca per ruotare battente o regolare quota dallo spigolo"
      case "window":
        return "Finestra 120×140 cm con davanzale esterno e montante divisorio"
      case "walls":
        return "Tracciamento pareti perimetrali · Vertice ancorato con magnetismo di cantiere"
      case "select":
        return "Modalità selezione attiva · Tocca pareti o aperture per modificare parametri geometrici"
      case "special":
        return "Elementi speciali posizionati: Nicchia a secco 90×30 cm e faretti LED da incasso"
      case "pillarSquare":
        return "Pilastro strutturale quadro 40×40 cm con campitura diagonale a norma"
      case "pillarRound":
        return "Pilastro strutturale tondo Ø40 cm con campitura concentrica"
      default:
        return "Editor CAD 2D per Cartongesso"
    }
  }

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

        {/* Authentic Mobile App CAD Mockup Frame */}
        <div className="gypso-cad-device-wrapper">
          <div className={`gypso-cad-phone mode-${visualMode}`}>
            {/* Phone Status Bar */}
            <div className="gypso-phone-status-bar">
              <span>09:41</span>
              <div className="gypso-phone-notch" />
              <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                <span style={{ fontSize: "10px" }}>5G</span>
                <span>●●●</span>
              </div>
            </div>

            {/* App Top Toolbar (Identica a Flutter _buildTopToolbar) */}
            <div className="gypso-cad-app-header">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  type="button"
                  className="gypso-cad-app-btn"
                  title="Torna indietro"
                  aria-label="Torna indietro"
                >
                  <ChevronLeft size={18} />
                </button>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: "700", color: isSole ? "#0f172a" : "#ffffff", lineHeight: "1.2" }}>
                    Planimetria Stanza
                  </div>
                  <div style={{ fontSize: "10px", color: isSole ? "#64748b" : "var(--gypso-text-secondary)", lineHeight: "1" }}>
                    Disegna perimetro ed ostacoli
                  </div>
                </div>
              </div>

              {/* Top Action Buttons: Undo, Redo, Rotate, Mode, Help */}
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <button type="button" className="gypso-cad-app-btn" title="Annulla" aria-label="Annulla">
                  <Undo2 size={15} />
                </button>
                <button type="button" className="gypso-cad-app-btn" title="Ripeti" aria-label="Ripeti">
                  <Redo2 size={15} />
                </button>
                <button type="button" className="gypso-cad-app-btn" title="Ruota 90°" aria-label="Ruota 90°">
                  <RotateCw size={15} />
                </button>
                <button
                  type="button"
                  className="gypso-cad-app-btn"
                  title={`Modalità: ${visualMode}`}
                  aria-label="Cambia modalità visiva"
                  onClick={() => {
                    if (visualMode === "standard") setVisualMode("cantiere")
                    else if (visualMode === "cantiere") setVisualMode("sole")
                    else setVisualMode("standard")
                  }}
                  style={{
                    color: isSole ? "#0284c7" : isCantiere ? "#f59e0b" : "var(--gypso-cyan)",
                    borderColor: isSole ? "#0284c7" : isCantiere ? "#f59e0b" : "var(--gypso-cyan)",
                  }}
                >
                  {isSole ? <Sun size={15} /> : isCantiere ? <Eye size={15} /> : <Moon size={15} />}
                </button>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: "700",
                    padding: "3px 6px",
                    borderRadius: "6px",
                    background: isSole ? "rgba(2, 132, 199, 0.1)" : "rgba(0, 229, 255, 0.15)",
                    color: isSole ? "#0284c7" : "var(--gypso-cyan)",
                    border: isSole ? "1px solid rgba(2, 132, 199, 0.3)" : "1px solid rgba(0, 229, 255, 0.3)",
                    letterSpacing: "0.5px",
                  }}
                >
                  DXF
                </div>
                <button type="button" className="gypso-cad-app-btn" title="Guida CAD" aria-label="Guida CAD">
                  <HelpCircle size={15} />
                </button>
              </div>
            </div>

            {/* Viewport Canvas: Left Toolbar, Right Zoom, Vector Canvas, Toast */}
            <div className="gypso-cad-viewport">
              {/* Floating Left Toolbar (Identica a Flutter _buildLeftToolbar) */}
              <div className="gypso-cad-left-bar">
                <button
                  type="button"
                  className={`gypso-cad-tool-btn ${activeCadTool === "walls" ? "active" : ""}`}
                  title="Disegna Pareti"
                  onClick={() => setActiveCadTool("walls")}
                >
                  <Pencil size={17} />
                </button>
                <button
                  type="button"
                  className={`gypso-cad-tool-btn ${activeCadTool === "select" ? "active" : ""}`}
                  title="Seleziona & Sposta"
                  onClick={() => setActiveCadTool("select")}
                >
                  <Hand size={17} />
                </button>
                <button
                  type="button"
                  className={`gypso-cad-tool-btn ${activeCadTool === "door" ? "active" : ""}`}
                  title="Inserisci Porta"
                  onClick={() => setActiveCadTool("door")}
                >
                  <DoorOpen size={17} />
                </button>
                <button
                  type="button"
                  className={`gypso-cad-tool-btn ${activeCadTool === "window" ? "active" : ""}`}
                  title="Inserisci Finestra"
                  onClick={() => setActiveCadTool("window")}
                >
                  <AppWindow size={17} />
                </button>
                <button
                  type="button"
                  className={`gypso-cad-tool-btn ${activeCadTool === "special" ? "active" : ""}`}
                  title="Elementi Speciali (Nicchie, Velette)"
                  onClick={() => setActiveCadTool("special")}
                >
                  <PlusSquare size={17} />
                </button>
                <button
                  type="button"
                  className={`gypso-cad-tool-btn ${activeCadTool === "pillarSquare" ? "active" : ""}`}
                  title="Pilastro Quadro"
                  onClick={() => setActiveCadTool("pillarSquare")}
                >
                  <Square size={17} />
                </button>
                <button
                  type="button"
                  className={`gypso-cad-tool-btn ${activeCadTool === "pillarRound" ? "active" : ""}`}
                  title="Pilastro Tondo"
                  onClick={() => setActiveCadTool("pillarRound")}
                >
                  <Circle size={17} />
                </button>
              </div>

              {/* Floating Right Zoom Controls (Identica a Flutter Zoom controls) */}
              <div className="gypso-cad-right-zoom">
                <button
                  type="button"
                  className="gypso-cad-zoom-btn"
                  title="Zoom In"
                  onClick={() => setCadZoom(prev => Math.min(prev + 0.1, 1.3))}
                >
                  <Plus size={16} />
                </button>
                <button
                  type="button"
                  className="gypso-cad-zoom-btn"
                  title="Zoom Out"
                  onClick={() => setCadZoom(prev => Math.max(prev - 0.1, 0.8))}
                >
                  <Minus size={16} />
                </button>
                <button
                  type="button"
                  className="gypso-cad-zoom-btn"
                  title="Adatta Schermo"
                  onClick={() => setCadZoom(1)}
                >
                  <Maximize2 size={16} />
                </button>
              </div>

              {/* Toast Notification (Identica a Flutter Toast in basso) */}
              <div className="gypso-cad-toast">
                <Sparkles size={14} color="#f59e0b" style={{ flexShrink: 0 }} />
                <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {getToolToast()}
                </span>
              </div>

              {/* Vector SVG Canvas (Disegnato secondo CadCanvasPainter, CadCanvasDecorations, CadCanvasObstacles, CadCanvasSymbols) */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  transform: `scale(${cadZoom})`,
                  transformOrigin: "center center",
                  transition: "transform 0.2s ease",
                }}
              >
                <svg viewBox="0 0 460 380" style={{ width: "100%", height: "100%", display: "block" }}>
                  <defs>
                    <pattern id="cad-grid-minor" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke={gridMinor} strokeWidth="0.8" />
                    </pattern>
                    <pattern id="cad-grid-major" width="100" height="100" patternUnits="userSpaceOnUse">
                      <rect width="100" height="100" fill="url(#cad-grid-minor)" />
                      <path d="M 100 0 L 0 0 0 100" fill="none" stroke={gridMajor} strokeWidth="1.2" />
                    </pattern>
                    <pattern id="pillar-hatch" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="6" stroke={pillarColor} strokeWidth="1.5" />
                    </pattern>
                  </defs>

                  {/* Canvas Grid Background */}
                  <rect width="460" height="380" fill={canvasBg} />
                  <rect width="460" height="380" fill="url(#cad-grid-major)" />

                  {/* Coordinate Axes */}
                  <line x1="0" y1="185" x2="460" y2="185" stroke={axisColor} strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4" />
                  <line x1="230" y1="0" x2="230" y2="380" stroke={axisColor} strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4" />

                  {/* Axis Metre Labels */}
                  <text x="35" y="180" fill={axisTextColor} fontSize="9" fontFamily="monospace">-2m</text>
                  <text x="130" y="180" fill={axisTextColor} fontSize="9" fontFamily="monospace">-1m</text>
                  <text x="330" y="180" fill={axisTextColor} fontSize="9" fontFamily="monospace">1m</text>
                  <text x="420" y="180" fill={axisTextColor} fontSize="9" fontFamily="monospace">2m</text>
                  <text x="235" y="45" fill={axisTextColor} fontSize="9" fontFamily="monospace">-2m</text>
                  <text x="235" y="115" fill={axisTextColor} fontSize="9" fontFamily="monospace">-1m</text>
                  <text x="235" y="260" fill={axisTextColor} fontSize="9" fontFamily="monospace">1m</text>
                  <text x="235" y="335" fill={axisTextColor} fontSize="9" fontFamily="monospace">2m</text>

                  {/* Room Fill Polygon */}
                  <polygon
                    points="110,85 350,85 350,275 145,275"
                    fill={isSole ? "rgba(2, 132, 199, 0.04)" : isCantiere ? "rgba(245, 158, 11, 0.04)" : "rgba(0, 229, 255, 0.05)"}
                  />

                  {/* Erone Diagonal (Triangolazione Fuori Squadra V1 -> V3) */}
                  <line
                    x1="110"
                    y1="85"
                    x2="350"
                    y2="275"
                    stroke={axisColor}
                    strokeWidth="1.2"
                    strokeDasharray="5 4"
                    strokeOpacity="0.7"
                  />
                  {/* Erone Diagonal Badge */}
                  <g transform="translate(165, 150)">
                    <rect x="0" y="0" width="130" height="20" rx="6" fill={pillBg} stroke={axisColor} strokeWidth="1" />
                    <text x="65" y="14" fill={axisColor} fontSize="9" fontWeight="bold" textAnchor="middle">
                      Diagonale Erone: 6.25 m
                    </text>
                  </g>

                  {/* Thick Walls (Pareti a spessore secondo _drawThickWall) */}
                  {/* Parete Superiore: 110,85 -> 350,85 */}
                  <line x1="110" y1="85" x2="350" y2="85" stroke={wallStroke} strokeWidth="8" strokeLinecap="round" />
                  {/* Parete Destra: 350,85 -> 350,275 */}
                  <line x1="350" y1="85" x2="350" y2="275" stroke={wallStroke} strokeWidth="8" strokeLinecap="round" />
                  {/* Parete Inferiore: 350,275 -> 145,275 */}
                  <line x1="350" y1="275" x2="145" y2="275" stroke={wallStroke} strokeWidth="8" strokeLinecap="round" />
                  {/* Parete Sinistra Fuori Squadra: 145,275 -> 110,85 */}
                  <line x1="145" y1="275" x2="110" y2="85" stroke={wallStroke} strokeWidth="8" strokeLinecap="round" />

                  {/* Architectural Obstacle 1: Finestra 120x140 cm (secondo _drawWindowSymbol) */}
                  <g id="cad-window">
                    {/* Vano finestra */}
                    <rect x="200" y="80" width="60" height="10" fill={isSole ? "#ffffff" : "#0f172a"} />
                    {/* Davanzale esterno */}
                    <rect x="196" y="74" width="68" height="5" fill="none" stroke={windowColor} strokeWidth="1.5" />
                    {/* Doppio vetro */}
                    <line x1="200" y1="83" x2="260" y2="83" stroke={windowColor} strokeWidth="1.2" />
                    <line x1="200" y1="87" x2="260" y2="87" stroke={windowColor} strokeWidth="1.2" />
                    {/* Montante centrale */}
                    <line x1="230" y1="80" x2="230" y2="90" stroke={windowColor} strokeWidth="1.5" />
                    {/* Stipiti laterali */}
                    <line x1="200" y1="80" x2="200" y2="90" stroke={windowColor} strokeWidth="2" />
                    <line x1="260" y1="80" x2="260" y2="90" stroke={windowColor} strokeWidth="2" />
                    {/* Badge Finestra */}
                    <rect x="195" y="52" width="70" height="18" rx="4" fill={pillBg} stroke={windowColor} strokeWidth="1" />
                    <text x="230" y="65" fill={windowColor} fontSize="8.5" fontWeight="bold" textAnchor="middle">
                      Finestra 120×140
                    </text>
                  </g>

                  {/* Architectural Obstacle 2: Porta 80x210 cm (secondo _drawDoorSymbol) */}
                  <g id="cad-door">
                    {/* Vano porta */}
                    <line x1="120" y1="145" x2="127" y2="185" stroke={isSole ? "#ffffff" : "#0f172a"} strokeWidth="9" />
                    {/* Stipiti porta */}
                    <circle cx="120" cy="145" r="3" fill={doorColor} />
                    <circle cx="127" cy="185" r="3" fill={doorColor} />
                    {/* Anta battente aperta a 90° */}
                    <line x1="127" y1="185" x2="167" y2="185" stroke={doorColor} strokeWidth="2.5" />
                    {/* Arco di apertura 90° */}
                    <path d="M 127 145 A 40 40 0 0 1 167 185" fill="none" stroke={doorColor} strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M 127 185 L 127 145 A 40 40 0 0 1 167 185 Z" fill={doorColor} fillOpacity="0.08" />
                    {/* Pomolo */}
                    <circle cx="163" cy="183" r="2" fill={doorColor} />
                    {/* Quota dallo spigolo (108 cm) */}
                    <line x1="127" y1="190" x2="145" y2="275" stroke={doorColor} strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.6" />
                    <g transform="translate(100, 220)">
                      <rect x="0" y="0" width="46" height="16" rx="4" fill={pillBg} stroke={doorColor} strokeWidth="0.8" />
                      <text x="23" y="12" fill={doorColor} fontSize="8" fontWeight="bold" textAnchor="middle">108 cm</text>
                    </g>
                    {/* Badge Porta */}
                    <g transform="translate(48, 172)">
                      <rect x="0" y="0" width="62" height="18" rx="4" fill={pillBg} stroke={doorColor} strokeWidth="1" />
                      <text x="31" y="13" fill={doorColor} fontSize="8.5" fontWeight="bold" textAnchor="middle">Porta 80×210</text>
                    </g>
                  </g>

                  {/* Architectural Obstacle 3: Pilastro 40x40 cm (secondo _drawRectHatching) */}
                  <g id="cad-pillar">
                    <rect x="285" y="205" width="26" height="26" fill="url(#pillar-hatch)" stroke={pillarColor} strokeWidth="1.5" />
                    <g transform="translate(268, 236)">
                      <rect x="0" y="0" width="60" height="16" rx="4" fill={pillBg} stroke={pillarColor} strokeWidth="0.8" />
                      <text x="30" y="12" fill={pillarColor} fontSize="8" fontWeight="bold" textAnchor="middle">Pilastro 40×40</text>
                    </g>
                  </g>

                  {/* Architectural Obstacle 4: Nicchia 90x30 cm (secondo _drawNicheSymbol) */}
                  <g id="cad-niche">
                    {/* Scasso parete */}
                    <rect x="215" y="271" width="46" height="8" fill={nicheColor} fillOpacity="0.2" stroke={nicheColor} strokeWidth="1.2" strokeDasharray="3 2" />
                    {/* Rientro 3D prospettico */}
                    <rect x="220" y="267" width="36" height="4" fill="none" stroke={nicheColor} strokeWidth="0.8" strokeOpacity="0.7" />
                    <g transform="translate(208, 290)">
                      <rect x="0" y="0" width="60" height="16" rx="4" fill={pillBg} stroke={nicheColor} strokeWidth="0.8" />
                      <text x="30" y="12" fill={nicheColor} fontSize="8" fontWeight="bold" textAnchor="middle">Nicchia 90×30</text>
                    </g>
                  </g>

                  {/* Spotlights LED (secondo _drawSpotlightSymbol) */}
                  <g id="cad-spots">
                    {/* Spot 1 */}
                    <g transform="translate(180, 130)">
                      <circle cx="0" cy="0" r="2.5" fill={spotlightColor} />
                      <circle cx="0" cy="0" r="8" fill="none" stroke={spotlightColor} strokeWidth="0.8" strokeDasharray="1.5 1.5" />
                      <line x1="-10" y1="0" x2="-5" y2="0" stroke={spotlightColor} strokeWidth="0.8" />
                      <line x1="5" y1="0" x2="10" y2="0" stroke={spotlightColor} strokeWidth="0.8" />
                      <line x1="0" y1="-10" x2="0" y2="-5" stroke={spotlightColor} strokeWidth="0.8" />
                      <line x1="0" y1="5" x2="0" y2="10" stroke={spotlightColor} strokeWidth="0.8" />
                      <text x="0" y="17" fill={spotlightColor} fontSize="7" fontWeight="bold" textAnchor="middle">Faretto Ø8</text>
                    </g>
                    {/* Spot 2 */}
                    <g transform="translate(290, 130)">
                      <circle cx="0" cy="0" r="2.5" fill={spotlightColor} />
                      <circle cx="0" cy="0" r="8" fill="none" stroke={spotlightColor} strokeWidth="0.8" strokeDasharray="1.5 1.5" />
                      <line x1="-10" y1="0" x2="-5" y2="0" stroke={spotlightColor} strokeWidth="0.8" />
                      <line x1="5" y1="0" x2="10" y2="0" stroke={spotlightColor} strokeWidth="0.8" />
                      <line x1="0" y1="-10" x2="0" y2="-5" stroke={spotlightColor} strokeWidth="0.8" />
                      <line x1="0" y1="5" x2="0" y2="10" stroke={spotlightColor} strokeWidth="0.8" />
                      <text x="0" y="17" fill={spotlightColor} fontSize="7" fontWeight="bold" textAnchor="middle">Faretto Ø8</text>
                    </g>
                  </g>

                  {/* Corner Vertex Nodes (Nodi vertici con anello secondo nodeOutlinePaint) */}
                  <circle cx="110" cy="85" r="5" fill={nodeFill} stroke={nodeStroke} strokeWidth="2" />
                  <circle cx="350" cy="85" r="5" fill={nodeFill} stroke={nodeStroke} strokeWidth="2" />
                  <circle cx="350" cy="275" r="5" fill={nodeFill} stroke={nodeStroke} strokeWidth="2" />
                  <circle cx="145" cy="275" r="5" fill={nodeFill} stroke={nodeStroke} strokeWidth="2" />

                  {/* Angle Badges (Gradi angoli interni) */}
                  {/* Angolo V2 (Top-Right): 90° */}
                  <g transform="translate(325, 95)">
                    <rect x="0" y="0" width="30" height="15" rx="3" fill={pillBg} stroke={pillBorder} strokeWidth="0.8" />
                    <text x="15" y="11" fill={pillText} fontSize="8" fontWeight="bold" textAnchor="middle">90.0°</text>
                  </g>
                  {/* Angolo V3 (Bottom-Right): 90° */}
                  <g transform="translate(325, 252)">
                    <rect x="0" y="0" width="30" height="15" rx="3" fill={pillBg} stroke={pillBorder} strokeWidth="0.8" />
                    <text x="15" y="11" fill={pillText} fontSize="8" fontWeight="bold" textAnchor="middle">90.0°</text>
                  </g>
                  {/* Angolo V4 (Bottom-Left FUORI SQUADRA): 88.5° */}
                  <g transform="translate(152, 252)">
                    <rect x="0" y="0" width="38" height="15" rx="3" fill={pillBg} stroke={axisColor} strokeWidth="1" />
                    <text x="19" y="11" fill={axisColor} fontSize="8" fontWeight="bold" textAnchor="middle">88.5° 📐</text>
                  </g>

                  {/* Room Center Area Label (secondo _drawRoomLabel) */}
                  <g transform="translate(230, 205)">
                    <text x="0" y="0" fill={areaTextColor} fontSize="21" fontWeight="800" textAnchor="middle" style={{ letterSpacing: "-0.5px" }}>
                      18.65 m²
                    </text>
                    <text x="0" y="14" fill={areaTextColor} fillOpacity="0.7" fontSize="9.5" fontWeight="600" textAnchor="middle">
                      Perimetro: 17.10 m · Sfrido: &lt; 3%
                    </text>
                  </g>

                  {/* Precision Crosshair Target (Mirino centrale) */}
                  <g transform="translate(230, 185)">
                    <circle cx="0" cy="0" r="10" fill="none" stroke={axisColor} strokeWidth="1.2" strokeDasharray="3 2" />
                    <line x1="-14" y1="0" x2="14" y2="0" stroke={axisColor} strokeWidth="1.5" />
                    <line x1="0" y1="-14" x2="0" y2="14" stroke={axisColor} strokeWidth="1.5" />
                  </g>

                  {/* Dimension Pills (Quote esterne di cantiere) */}
                  {/* Quota Parete Superiore: 5.00 m */}
                  <g transform="translate(205, 30)">
                    <rect x="0" y="0" width="50" height="18" rx="5" fill={pillBg} stroke={pillBorder} strokeWidth="1" />
                    <text x="25" y="13" fill={pillText} fontSize="9" fontWeight="bold" textAnchor="middle">5.00 m</text>
                  </g>
                  {/* Quota Parete Destra: 4.20 m */}
                  <g transform="translate(365, 172)">
                    <rect x="0" y="0" width="50" height="18" rx="5" fill={pillBg} stroke={pillBorder} strokeWidth="1" />
                    <text x="25" y="13" fill={pillText} fontSize="9" fontWeight="bold" textAnchor="middle">4.20 m</text>
                  </g>
                  {/* Quota Parete Inferiore: 4.05 m */}
                  <g transform="translate(225, 320)">
                    <rect x="0" y="0" width="50" height="18" rx="5" fill={pillBg} stroke={pillBorder} strokeWidth="1" />
                    <text x="25" y="13" fill={pillText} fontSize="9" fontWeight="bold" textAnchor="middle">4.05 m</text>
                  </g>
                  {/* Quota Parete Sinistra Fuori Squadra: 3.85 m */}
                  <g transform="translate(68, 125)">
                    <rect x="0" y="0" width="50" height="18" rx="5" fill={pillBg} stroke={pillBorder} strokeWidth="1" />
                    <text x="25" y="13" fill={pillText} fontSize="9" fontWeight="bold" textAnchor="middle">3.85 m</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Bottom Controls Bar (Identica a Flutter _buildBottomBar) */}
            <div className="gypso-cad-bottom-bar">
              {/* Row 1: Snap Toggle, Coordinate Input, Monospace Cursor Position */}
              <div className="gypso-cad-bottom-row-1">
                <div
                  className="gypso-cad-pill"
                  style={{
                    background: isSole ? "#ffffff" : isCantiere ? "#18181b" : "rgba(245, 158, 11, 0.15)",
                    border: "1px solid #f59e0b",
                    color: "#f59e0b",
                  }}
                >
                  <Grid size={13} />
                  <span>Snap 10cm</span>
                </div>
                <div
                  className="gypso-cad-pill"
                  style={{
                    background: isSole ? "#ffffff" : isCantiere ? "#18181b" : "rgba(0, 229, 255, 0.12)",
                    border: "1px solid #00e5ff",
                    color: isSole ? "#0284c7" : "#00e5ff",
                  }}
                >
                  <MapPin size={13} />
                  <span>Coordinate</span>
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    fontFamily: "monospace",
                    fontSize: "11px",
                    fontWeight: "600",
                    color: isSole ? "#475569" : "var(--gypso-text-secondary)",
                    background: isSole ? "#ffffff" : "#0b0f19",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    border: isSole ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  X: 320 cm &nbsp; Y: 210 cm
                </div>
              </div>

              {/* Row 2: Live Metrics & Confirm CAD Button */}
              <div className="gypso-cad-bottom-row-2">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "12px",
                    background: isSole ? "#ffffff" : "#0b0f19",
                    padding: "6px 12px",
                    borderRadius: "10px",
                    border: isSole ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <span style={{ color: isSole ? "#0284c7" : isCantiere ? "#facc15" : "#10b981", fontWeight: "700" }}>
                    📐 18.65 m²
                  </span>
                  <span style={{ color: isSole ? "#0284c7" : isCantiere ? "#38bdf8" : "#38bdf8", fontWeight: "700" }}>
                    📏 17.10 m
                  </span>
                  <span style={{ color: isSole ? "#64748b" : "var(--gypso-text-muted)", fontSize: "11px" }}>
                    • 4 Vertici
                  </span>
                </div>

                <button type="button" className="gypso-cad-confirm-btn">
                  <Check size={14} />
                  <span>CONFERMA CAD</span>
                </button>
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
