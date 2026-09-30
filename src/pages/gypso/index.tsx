import * as React from "react"
import { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
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
import "../../styles/gypso-animations.css"
import {
  GypsoMotionProvider,
  GypsoReveal,
  GypsoStaggerItem,
  GypsoCountUp,
  GypsoPress,
  GypsoSpotlightCard,
  GypsoTilt,
  MOTION,
  CURVES,
} from "../../components/gypso/GypsoAnimations"

const GypsoIndexPage: React.FC<PageProps> = () => {
  const [visualMode, setVisualMode] = useState<"standard" | "cantiere" | "sole">("standard")
  const [activeCadTool, setActiveCadTool] = useState<"walls" | "select" | "door" | "window" | "special" | "pillarSquare" | "pillarRound">("door")
  const [cadZoom, setCadZoom] = useState<number>(1)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [workflowStep, setWorkflowStep] = useState<number>(0)

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

  const modeMeta = {
    standard: {
      label: "Modalità Standard",
      hint: "Glass scuro · ufficio e sera",
      accent: "var(--gypso-cyan)",
      tint: "0, 229, 255",
      icon: <Moon size={14} />,
    },
    cantiere: {
      label: "Modalità Cantiere",
      hint: "Alto contrasto · target tattili 56px",
      accent: "#f59e0b",
      tint: "245, 158, 11",
      icon: <Eye size={14} />,
    },
    sole: {
      label: "Modalità Sole",
      hint: "Antiriflesso · ambra → blu #1D4ED8",
      accent: "#38bdf8",
      tint: "56, 189, 248",
      icon: <Sun size={14} />,
    },
  } as const

  const heroStats = [
    { value: 100, suffix: "% Offline", decimals: 0, label: "Zero Cloud · Storage Locale Cifrato" },
    { value: 11, suffix: " Lingue", decimals: 0, label: "IT, EN, ES, FR, DE, PT, RO, PL, NL, UK, AR" },
    { value: 4, prefix: "Sfrido < ", suffix: "%", decimals: 0, label: "Algoritmo 1D Bin-Packing Taglio Barre" },
    { value: 1200, suffix: " kg", decimals: 0, label: "Stima Peso Carico CdS (Patente B)" },
    { value: 55, suffix: " dB", decimals: 0, label: "Divisori Fonoisolanti ad Alto Abbattimento" },
    { value: 18.65, suffix: " m²", decimals: 2, label: "Area Poligonale · Formula di Gauss (Shoelace)" },
  ]

  const features = [
    {
      icon: <Compass size={26} />,
      tint: "0, 229, 255",
      color: undefined,
      title: "Rilievo Vettoriale & Stanze Fuori Squadra",
      text: (
        <>
          Risolve stanze fuori squadra inserendo i 4 lati e la diagonale (triangolazione con <strong>Formula di Erone</strong>). Include calcolo dell'area poligonale con la <strong>Formula di Gauss (Shoelace)</strong>, snapping magnetico e tasti rapidi laser (+10 cm, +50 cm, +100 cm).
        </>
      ),
    },
    {
      icon: <Download size={26} />,
      tint: "0, 176, 255",
      color: "var(--gypso-blue)",
      border: "rgba(0, 176, 255, 0.3)",
      bg: "rgba(0, 176, 255, 0.1)",
      title: "Esportazione AutoCAD DXF (.dxf)",
      text: (
        <>
          Esporta planimetrie vettoriali 2D standard compatibili con AutoCAD, DWG FastView, progeCAD e nanoCAD. Strutturato a layer separati per perimetro murario, orditura metallica, lastre e forometrie con quote.
        </>
      ),
    },
    {
      icon: <Scissors size={26} />,
      tint: "156, 39, 176",
      color: "var(--gypso-purple)",
      border: "rgba(156, 39, 176, 0.3)",
      bg: "rgba(156, 39, 176, 0.1)",
      title: "Ottimizzazione Taglio Barre 1D (CSP)",
      text: (
        <>
          Risolve il <em>Cutting Stock Problem</em> unidimensionale con euristica First-Fit Decreasing (FFD) su barre commerciali da 300 cm o 400 cm. Fornisce la guida sequenziale di taglio per abbattere lo sfrido sotto al 4%.
        </>
      ),
    },
    {
      icon: <Truck size={26} />,
      tint: "255, 152, 0",
      color: "var(--gypso-orange)",
      border: "rgba(255, 152, 0, 0.3)",
      bg: "rgba(255, 152, 0, 0.1)",
      title: "Controllo Carico Furgone & WhatsApp",
      text: (
        <>
          Calcola il peso totale del carico in Kg e Quintali secondo matrici certificate di densità. Verifica la conformità al Codice della Strada (Patente B, soglia <strong>1.200 kg</strong>) e genera il messaggio d'ordine preformattato per WhatsApp.
        </>
      ),
    },
    {
      icon: <FileText size={26} />,
      tint: "0, 230, 118",
      color: "var(--gypso-green)",
      border: "rgba(0, 230, 118, 0.3)",
      bg: "rgba(0, 230, 118, 0.1)",
      title: "Preventivi PDF con Firma Touchscreen",
      text: (
        <>
          Computo estimativo completo con intestazione ditta, logo, costi manodopera (a ore o a m²), ricarico d'impresa, aliquote IVA agevolate (4%, 10%, 22%), sconto commerciale, arrotondamento rapido a € 50 e riquadro firma cliente (FES eIDAS).
        </>
      ),
    },
    {
      icon: <Layers size={26} />,
      tint: "233, 30, 99",
      color: "var(--gypso-pink)",
      border: "rgba(233, 30, 99, 0.3)",
      bg: "rgba(233, 30, 99, 0.1)",
      title: "Posa a Norma UNI 11424 & Finiture Q1-Q4",
      text: (
        <>
          Sfalsamento automatico dei giunti anti-fessurazione. Gestione lastre Standard (A), Idro (H2), Fuoco (F), Acustiche, orditure a passo 40/60 cm, controsoffitti autoportanti o inclinati per mansarde, e 4 livelli di stuccatura da Q1 a Q4.
        </>
      ),
    },
    {
      icon: <Flame size={26} />,
      tint: "245, 158, 11",
      color: "#f59e0b",
      border: "rgba(245, 158, 11, 0.3)",
      bg: "rgba(245, 158, 11, 0.1)",
      title: "Sistemi Certificati REI & Acustica",
      text: (
        <>
          Preset tecnici certificati dei principali produttori per pareti tagliafuoco (<strong>REI 60, REI 120</strong>), divisori fonoisolanti ad alto abbattimento acustico (fino a <strong>55 dB</strong>) e contropareti termiche con isolante integrato in lana minerale o EPS.
        </>
      ),
    },
    {
      icon: <Camera size={26} />,
      tint: "0, 229, 255",
      color: "var(--gypso-cyan)",
      border: "rgba(0, 229, 255, 0.3)",
      bg: "rgba(0, 229, 255, 0.1)",
      title: "Fascicolo Fotografico di Cantiere",
      text: (
        <>
          Scatta o allega immagini di cantiere organizzate per stanza e stato dei lavori: rilievo iniziale, orditura metallica, impianti passanti e finitura ultimata con didascalie tecniche, pronte per documentare SAL o perizie.
        </>
      ),
    },
    {
      icon: <Globe size={26} />,
      tint: "0, 229, 255",
      color: undefined,
      title: "11 Lingue Native & Standard WCAG",
      text: (
        <>
          Traduzione nativa in <strong>11 lingue</strong>: Italiano, English, Español, Français, Deutsch, Português, Română, Polski, Nederlands, Українська e العربية (con supporto completo interfaccia <strong>RTL</strong>). Include conformità WCAG 2.3.3 con modalità "Riduci animazioni".
        </>
      ),
    },
  ]

  const workflow = [
    {
      icon: <Ruler size={20} />,
      tint: "0, 229, 255",
      step: "01",
      title: "Rilievo sul posto",
      text: "Distanziometro laser e tasti rapidi +10/+50/+100 cm. Se la stanza è fuori squadra, inserisci i 4 lati e la diagonale: Erone restituisce l'area reale, non quella teorica.",
      metric: "Erone + Shoelace",
    },
    {
      icon: <Layers size={20} />,
      tint: "156, 39, 176",
      step: "02",
      title: "Progetto e stratigrafia",
      text: "Orditura a passo 40/60 cm, lastre sfalsate anti-fessurazione, isolante, sistema certificato REI o acustico. Le finiture si scelgono da Q1 a Q4.",
      metric: "UNI 11424",
    },
    {
      icon: <Scissors size={20} />,
      tint: "255, 152, 0",
      step: "03",
      title: "Taglio e distinta",
      text: "First-Fit Decreasing sulle barre da 300/400 cm: la guida sequenziale di taglio porta lo sfrido sotto al 4% e la distinta esce già ordinata per fornitore.",
      metric: "Sfrido < 4%",
    },
    {
      icon: <Truck size={20} />,
      tint: "0, 230, 118",
      step: "04",
      title: "Carico, preventivo, firma",
      text: "Verifica del peso sul furgone rispetto ai 1.200 kg della patente B, ordine preformattato per WhatsApp e preventivo PDF con firma del committente su schermo.",
      metric: "CdS Patente B",
    },
  ]

  const faqs = [
    {
      q: "GYPSO funziona senza connessione?",
      a: "Sì. L'app è 100% offline: progetti, listini e fotografie restano in uno storage locale cifrato. Non esiste un backend GYPSO, quindi nessun dato di cantiere lascia il dispositivo. L'unica connessione richiesta è quella degli store per gli acquisti in-app e degli SDK pubblicitari nella versione gratuita.",
    },
    {
      q: "Che differenza c'è tra versione Free e PRO?",
      a: "La Free include tutti i calcoli tecnici e l'editor CAD, con un limite di 3 progetti salvati e i preventivi PDF con watermark. La PRO sblocca progetti illimitati, esportazione AutoCAD DXF a livelli, PDF senza watermark con logo ditta, firma cliente su touchscreen, listino personalizzato, backup completo .cart/.zip, documentazione fotografica illimitata e rimuove definitivamente la pubblicità.",
    },
    {
      q: "Come risolve una stanza fuori squadra?",
      a: "Inserisci i quattro lati e una diagonale. GYPSO triangola la figura con la Formula di Erone e calcola l'area del poligono con la Formula di Gauss (Shoelace). Ottieni l'area reale e la superficie di lastre da ordinare, non la superficie nominale del progetto.",
    },
    {
      q: "Rispetta la norma UNI 11424?",
      a: "Sì. GYPSO gestisce lo sfalsamento dei giunti longitudinale e trasversale anti-fessurazione, l'interasse dei montanti regolabile a 40 o 60 cm, i controsoffitti autoportanti o inclinati per mansarde e i quattro livelli di stuccatura da Q1 a Q4 previsti dalla norma.",
    },
    {
      q: "Posso lavorare in cantiere sotto il sole?",
      a: "La modalità Sole esiste esattamente per questo. Su fondo chiaro l'ambra di identità scende a 2,03:1 di contrasto, sotto il minimo di 3,0 per gli elementi non testuali: in pieno sole il bordo del pulsante si perderebbe. La modalità Sole sostituisce quindi l'ambra con il blu #1D4ED8, che dà 6,31:1 sul fondo e 6,70:1 col testo. La scelta è misurata, non stimata.",
    },
    {
      q: "L'export DXF è compatibile con AutoCAD?",
      a: "Sì. L'esportazione produce planimetrie vettoriali 2D in formato DXF standard, strutturate a layer separati per perimetro murario, orditura metallica, lastre e forometrie con quote. Il file si apre in AutoCAD, DWG FastView, progeCAD e nanoCAD.",
    },
    {
      q: "Il preventivo ha valore legale?",
      a: "Il preventivo PDF riporta intestazione, partita IVA, imponibile, ricarico d'impresa, aliquote IVA agevolate e riquadro di accettazione con firma del committente acquisita su touchscreen (FES eIDAS). La firma grafometrica semplice è adatta all'accettazione dell'offerta; per contratti che richiedono firma qualificata resta necessario un provider certificato.",
    },
    {
      q: "In quali lingue è disponibile?",
      a: "Undici lingue native: Italiano, English, Español, Français, Deutsch, Português, Română, Polski, Nederlands, Українська e العربية. L'interfaccia araba è completamente RTL e l'app rispetta la preferenza di sistema «Riduci animazioni» (WCAG 2.3.3).",
    },
  ]

  return (
    <GypsoMotionProvider>
      <div className="gypso-page">
        <div className="gypso-bg-mesh" />
        <div className="gypso-orb gypso-orb-1" />
        <div className="gypso-orb gypso-orb-2" />

        {/* Navigation Bar */}
        <Navbar mode="gypso" />

        {/* Hero Section */}
        <section className="gypso-hero">
          <motion.div
            className="gypso-hero-logo-wrap"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: CURVES.spring }}
          >
            <span className="gypso-hero-logo-ring" aria-hidden="true" />
            <img src="/gypso-icon.png" alt="GYPSO App Icon" className="gypso-hero-logo" />
          </motion.div>

          <motion.h1
            className="gypso-hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION.entrance, delay: 0.1, ease: CURVES.decelerate }}
          >
            GYPSO
          </motion.h1>

          <motion.p
            className="gypso-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION.entrance, delay: 0.2, ease: CURVES.decelerate }}
          >
            Lo Studio Tecnico Tascabile per il Cartongessista Moderno: Rilievo CAD 2D anche Fuori Squadra, Distinta Base Materiali, Posa a Norma UNI 11424, Stima Peso Furgone Patente B, Ordine WhatsApp e Preventivi PDF con Firma su Schermo.
          </motion.p>

          <motion.div
            className="gypso-hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION.entrance, delay: 0.3, ease: CURVES.decelerate }}
          >
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
          </motion.div>

          {/* Trust row: dati verificabili, non aggettivi */}
          <motion.div
            className="gypso-trust-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: MOTION.entrance, delay: 0.4, ease: CURVES.decelerate }}
          >
            <span className="gypso-trust-item">
              <span className="gypso-live-dot" /> 100% offline · nessun backend
            </span>
            <span className="gypso-trust-sep">·</span>
            <span className="gypso-trust-item">11 lingue native con RTL</span>
            <span className="gypso-trust-sep">·</span>
            <span className="gypso-trust-item">3 modalità visive misurate</span>
            <span className="gypso-trust-sep">·</span>
            <span className="gypso-trust-item">Posa UNI 11424 · Export DXF</span>
          </motion.div>

          {/* Highlight Stats Row — i numeri si contano, non appaiono */}
          <div className="gypso-stats-row">
            {heroStats.map((stat, i) => (
              <GypsoStaggerItem key={stat.label} index={i} step={0.07}>
                <GypsoSpotlightCard className="gypso-stat-card" tint="0, 229, 255">
                  <div className="gypso-stat-val">
                    <GypsoCountUp
                      to={stat.value}
                      decimals={stat.decimals}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="gypso-stat-lbl">{stat.label}</div>
                </GypsoSpotlightCard>
              </GypsoStaggerItem>
            ))}
          </div>
        </section>

        {/* ── Pipeline di cantiere: come l'app accompagna il lavoro ────────── */}
        <section id="workflow" className="gypso-section">
          <GypsoReveal>
            <h2 className="gypso-section-title">Dal Sopralluogo al Preventivo Firmato</h2>
            <p className="gypso-section-desc">
              Quattro fasi, un solo dispositivo. Ogni passaggio produce un artefatto consegnabile: la planimetria, la distinta, l'ordine, il preventivo.
            </p>
          </GypsoReveal>

          <div className="gypso-workflow">
            {workflow.map((step, i) => (
              <GypsoStaggerItem key={step.step} index={i} step={0.09}>
                <GypsoSpotlightCard
                  className={`gypso-card gypso-workflow-card ${
                    workflowStep === i ? "is-active" : ""
                  }`}
                  tint={step.tint}
                >
                  <button
                    type="button"
                    className="gypso-workflow-hit"
                    onClick={() => setWorkflowStep(i)}
                    onMouseEnter={() => setWorkflowStep(i)}
                    aria-label={`Fase ${step.step}: ${step.title}`}
                  >
                    <span className="gypso-accent-line" aria-hidden="true" />
                    <span className="gypso-workflow-top">
                      <span
                        className="gypso-workflow-icon"
                        style={{
                          color: `rgb(${step.tint})`,
                          borderColor: `rgba(${step.tint}, 0.32)`,
                          background: `rgba(${step.tint}, 0.1)`,
                        }}
                      >
                        {step.icon}
                      </span>
                      <span className="gypso-workflow-step">{step.step}</span>
                    </span>
                    <span className="gypso-workflow-title">{step.title}</span>
                    <span className="gypso-workflow-text">{step.text}</span>
                    <span className="gypso-workflow-metric">{step.metric}</span>
                  </button>
                </GypsoSpotlightCard>
              </GypsoStaggerItem>
            ))}
          </div>
        </section>

        {/* CAD Preview & 3 Modalità Visive di Cantiere */}
        <section id="cad-preview" className="gypso-section">
          <GypsoReveal>
            <h2 className="gypso-section-title">Editor CAD 2D & Geometrie Fuori Squadra</h2>
            <p className="gypso-section-desc">
              Disegna pareti, contropareti e controsoffitti su touch screen con coordinate cartesiane, snapping magnetico, visualizzazione dell'orditura metallica a norma UNI 11424 e funzione esclusiva <strong>Fuori Squadra</strong> con triangolazione di Erone.
            </p>
          </GypsoReveal>

          {/* Visual Mode Selector Buttons — la modalità attiva si vede dal colore,
              che qui è informazione e non decorazione */}
          <GypsoReveal delay={0.08}>
            <div className="gypso-mode-switch">
              {(["standard", "cantiere", "sole"] as const).map((mode) => {
                const meta = modeMeta[mode]
                const active = visualMode === mode
                return (
                  <GypsoPress key={mode} scale={0.97}>
                    <button
                      type="button"
                      onClick={() => setVisualMode(mode)}
                      className={`gypso-mode-btn ${active ? "is-active" : ""}`}
                      style={
                        active
                          ? {
                              borderColor: meta.accent,
                              color: meta.accent,
                              background: `rgba(${meta.tint}, 0.14)`,
                              boxShadow: `0 0 0 1px rgba(${meta.tint}, 0.35), 0 6px 22px rgba(${meta.tint}, 0.18)`,
                            }
                          : undefined
                      }
                      aria-pressed={active}
                    >
                      {meta.icon}
                      {meta.label}
                    </button>
                  </GypsoPress>
                )
              })}
            </div>
          </GypsoReveal>

          {/* Riga di contesto: spiega *perché* esistono le tre modalità */}
          <GypsoReveal delay={0.12}>
            <div className="gypso-mode-note">
              <AnimatePresence mode="wait">
                <motion.span
                  key={visualMode}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: MOTION.fast, ease: CURVES.decelerate }}
                >
                  <strong style={{ color: modeMeta[visualMode].accent }}>
                    {modeMeta[visualMode].label}
                  </strong>{" "}
                  — {modeMeta[visualMode].hint}
                </motion.span>
              </AnimatePresence>
            </div>
          </GypsoReveal>

          {/* Authentic Mobile App CAD Mockup Frame */}
          <GypsoReveal delay={0.16} direction="none">
            <div className="gypso-cad-device-wrapper">
              <GypsoTilt>
                <motion.div
                  className={`gypso-cad-phone mode-${visualMode}`}
                  layout
                  transition={{ duration: MOTION.medium, ease: CURVES.emphasized }}
                >
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
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.span
                            key={visualMode}
                            initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                            transition={{ duration: MOTION.fast, ease: CURVES.spring }}
                            style={{ display: "flex" }}
                          >
                            {isSole ? <Sun size={15} /> : isCantiere ? <Eye size={15} /> : <Moon size={15} />}
                          </motion.span>
                        </AnimatePresence>
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

                  {/* Viewport Canvas */}
                  <div className="gypso-cad-viewport">
                    {/* Floating Left Toolbar */}
                    <div className="gypso-cad-left-bar">
                      {(
                        [
                          ["walls", <Pencil size={17} />, "Disegna Pareti"],
                          ["select", <Hand size={17} />, "Seleziona & Sposta"],
                          ["door", <DoorOpen size={17} />, "Inserisci Porta"],
                          ["window", <AppWindow size={17} />, "Inserisci Finestra"],
                          ["special", <PlusSquare size={17} />, "Elementi Speciali (Nicchie, Velette)"],
                          ["pillarSquare", <Square size={17} />, "Pilastro Quadro"],
                          ["pillarRound", <Circle size={17} />, "Pilastro Tondo"],
                        ] as const
                      ).map(([key, icon, label]) => (
                        <motion.button
                          key={key}
                          type="button"
                          className={`gypso-cad-tool-btn ${activeCadTool === key ? "active" : ""}`}
                          title={label as string}
                          onClick={() => setActiveCadTool(key as any)}
                          whileTap={{ scale: 0.9 }}
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: MOTION.instant, ease: CURVES.spring }}
                          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                        >
                          {icon}
                        </motion.button>
                      ))}
                    </div>

                    {/* Floating Right Zoom Controls */}
                    <div className="gypso-cad-right-zoom">
                      <motion.button
                        type="button"
                        className="gypso-cad-zoom-btn"
                        title="Zoom In"
                        onClick={() => setCadZoom(prev => Math.min(prev + 0.1, 1.3))}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: MOTION.instant, ease: CURVES.spring }}
                      >
                        <Plus size={16} />
                      </motion.button>
                      <motion.button
                        type="button"
                        className="gypso-cad-zoom-btn"
                        title="Zoom Out"
                        onClick={() => setCadZoom(prev => Math.max(prev - 0.1, 0.8))}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: MOTION.instant, ease: CURVES.spring }}
                      >
                        <Minus size={16} />
                      </motion.button>
                      <div className="gypso-zoom-readout">{Math.round(cadZoom * 100)}%</div>
                      <motion.button
                        type="button"
                        className="gypso-cad-zoom-btn"
                        title="Adatta Schermo"
                        onClick={() => setCadZoom(1)}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: MOTION.instant, ease: CURVES.spring }}
                      >
                        <Maximize2 size={16} />
                      </motion.button>
                    </div>

                    {/* Toast Notification */}
                    <div className="gypso-cad-toast">
                      <Sparkles size={14} color="#f59e0b" style={{ flexShrink: 0 }} />
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={activeCadTool}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: MOTION.fast, ease: CURVES.decelerate }}
                          style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                        >
                          {getToolToast()}
                        </motion.span>
                      </AnimatePresence>
                    </div>

                    {/* Vector SVG Canvas */}
                    <motion.div
                      style={{ width: "100%", height: "100%" }}
                      animate={{ scale: cadZoom }}
                      transition={{ duration: MOTION.medium, ease: CURVES.emphasized }}
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
                        <motion.polygon
                          points="110,85 350,85 350,275 145,275"
                          fill={isSole ? "rgba(2, 132, 199, 0.04)" : isCantiere ? "rgba(245, 158, 11, 0.04)" : "rgba(0, 229, 255, 0.05)"}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: MOTION.slow, ease: CURVES.decelerate }}
                        />

                        {/* Erone Diagonal (Triangolazione Fuori Squadra V1 -> V3) */}
                        <line
                          x1="110"
                          y1="85"
                          x2="350"
                          y2="275"
                          stroke={axisColor}
                          strokeWidth="1.2"
                          strokeOpacity="0.7"
                          className="gypso-cad-erone-draw"
                        />
                        {/* Erone Diagonal Badge */}
                        <g transform="translate(165, 150)">
                          <rect x="0" y="0" width="130" height="20" rx="6" fill={pillBg} stroke={axisColor} strokeWidth="1" />
                          <text x="65" y="14" fill={axisColor} fontSize="9" fontWeight="bold" textAnchor="middle">
                            Diagonale Erone: 6.25 m
                          </text>
                        </g>

                        {/* Thick Walls — il perimetro si disegna all'ingresso */}
                        {[
                          ["110", "85", "350", "85"],
                          ["350", "85", "350", "275"],
                          ["350", "275", "145", "275"],
                          ["145", "275", "110", "85"],
                        ].map(([x1, y1, x2, y2], i) => (
                          <motion.line
                            key={i}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke={wallStroke}
                            strokeWidth="8"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                              duration: MOTION.slow,
                              delay: 0.12 + i * 0.1,
                              ease: CURVES.decelerate,
                            }}
                          />
                        ))}

                        {/* Architectural Obstacle 1: Finestra 120x140 cm */}
                        <g id="cad-window">
                          <rect x="200" y="80" width="60" height="10" fill={isSole ? "#ffffff" : "#0f172a"} />
                          <rect x="196" y="74" width="68" height="5" fill="none" stroke={windowColor} strokeWidth="1.5" />
                          <line x1="200" y1="83" x2="260" y2="83" stroke={windowColor} strokeWidth="1.2" />
                          <line x1="200" y1="87" x2="260" y2="87" stroke={windowColor} strokeWidth="1.2" />
                          <line x1="230" y1="80" x2="230" y2="90" stroke={windowColor} strokeWidth="1.5" />
                          <line x1="200" y1="80" x2="200" y2="90" stroke={windowColor} strokeWidth="2" />
                          <line x1="260" y1="80" x2="260" y2="90" stroke={windowColor} strokeWidth="2" />
                          <rect x="195" y="52" width="70" height="18" rx="4" fill={pillBg} stroke={windowColor} strokeWidth="1" />
                          <text x="230" y="65" fill={windowColor} fontSize="8.5" fontWeight="bold" textAnchor="middle">
                            Finestra 120×140
                          </text>
                        </g>

                        {/* Architectural Obstacle 2: Porta 80x210 cm */}
                        <g id="cad-door">
                          <line x1="120" y1="145" x2="127" y2="185" stroke={isSole ? "#ffffff" : "#0f172a"} strokeWidth="9" />
                          <circle cx="120" cy="145" r="3" fill={doorColor} />
                          <circle cx="127" cy="185" r="3" fill={doorColor} />
                          <line x1="127" y1="185" x2="167" y2="185" stroke={doorColor} strokeWidth="2.5" />
                          <path d="M 127 145 A 40 40 0 0 1 167 185" fill="none" stroke={doorColor} strokeWidth="1.5" strokeDasharray="3 3" />
                          <path d="M 127 185 L 127 145 A 40 40 0 0 1 167 185 Z" fill={doorColor} fillOpacity="0.08" />
                          <circle cx="163" cy="183" r="2" fill={doorColor} />
                          <line x1="127" y1="190" x2="145" y2="275" stroke={doorColor} strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.6" />
                          <g transform="translate(100, 220)">
                            <rect x="0" y="0" width="46" height="16" rx="4" fill={pillBg} stroke={doorColor} strokeWidth="0.8" />
                            <text x="23" y="12" fill={doorColor} fontSize="8" fontWeight="bold" textAnchor="middle">108 cm</text>
                          </g>
                          <g transform="translate(48, 172)">
                            <rect x="0" y="0" width="62" height="18" rx="4" fill={pillBg} stroke={doorColor} strokeWidth="1" />
                            <text x="31" y="13" fill={doorColor} fontSize="8.5" fontWeight="bold" textAnchor="middle">Porta 80×210</text>
                          </g>
                        </g>

                        {/* Architectural Obstacle 3: Pilastro 40x40 cm */}
                        <g id="cad-pillar">
                          <rect x="285" y="205" width="26" height="26" fill="url(#pillar-hatch)" stroke={pillarColor} strokeWidth="1.5" />
                          <g transform="translate(268, 236)">
                            <rect x="0" y="0" width="60" height="16" rx="4" fill={pillBg} stroke={pillarColor} strokeWidth="0.8" />
                            <text x="30" y="12" fill={pillarColor} fontSize="8" fontWeight="bold" textAnchor="middle">Pilastro 40×40</text>
                          </g>
                        </g>

                        {/* Architectural Obstacle 4: Nicchia 90x30 cm */}
                        <g id="cad-niche">
                          <rect x="215" y="271" width="46" height="8" fill={nicheColor} fillOpacity="0.2" stroke={nicheColor} strokeWidth="1.2" strokeDasharray="3 2" />
                          <rect x="220" y="267" width="36" height="4" fill="none" stroke={nicheColor} strokeWidth="0.8" strokeOpacity="0.7" />
                          <g transform="translate(208, 290)">
                            <rect x="0" y="0" width="60" height="16" rx="4" fill={pillBg} stroke={nicheColor} strokeWidth="0.8" />
                            <text x="30" y="12" fill={nicheColor} fontSize="8" fontWeight="bold" textAnchor="middle">Nicchia 90×30</text>
                          </g>
                        </g>

                        {/* Spotlights LED */}
                        <g id="cad-spots">
                          {[
                            [180, 130],
                            [290, 130],
                          ].map(([cx, cy], i) => (
                            <g transform={`translate(${cx}, ${cy})`} key={i}>
                              <circle cx="0" cy="0" r="2.5" fill={spotlightColor} />
                              <circle
                                cx="0"
                                cy="0"
                                r="8"
                                fill="none"
                                stroke={spotlightColor}
                                strokeWidth="0.8"
                                strokeDasharray="1.5 1.5"
                                opacity="0.7"
                              />
                              <line x1="-10" y1="0" x2="-5" y2="0" stroke={spotlightColor} strokeWidth="0.8" />
                              <line x1="5" y1="0" x2="10" y2="0" stroke={spotlightColor} strokeWidth="0.8" />
                              <line x1="0" y1="-10" x2="0" y2="-5" stroke={spotlightColor} strokeWidth="0.8" />
                              <line x1="0" y1="5" x2="0" y2="10" stroke={spotlightColor} strokeWidth="0.8" />
                              <text x="0" y="17" fill={spotlightColor} fontSize="7" fontWeight="bold" textAnchor="middle">Faretto Ø8</text>
                            </g>
                          ))}
                        </g>

                        {/* Corner Vertex Nodes — anello che pulsa come un nodo "vivo" */}
                        {[
                          [110, 85],
                          [350, 85],
                          [350, 275],
                          [145, 275],
                        ].map(([cx, cy], i) => (
                          <g key={i}>
                            <circle
                              cx={cx}
                              cy={cy}
                              r="5"
                              fill="none"
                              stroke={nodeFill}
                              strokeWidth="1.5"
                              className="gypso-cad-node-pulse"
                              style={{ animationDelay: `${i * 0.45}s` }}
                            />
                            <circle cx={cx} cy={cy} r="5" fill={nodeFill} stroke={nodeStroke} strokeWidth="2" />
                          </g>
                        ))}

                        {/* Angle Badges */}
                        <g transform="translate(325, 95)">
                          <rect x="0" y="0" width="30" height="15" rx="3" fill={pillBg} stroke={pillBorder} strokeWidth="0.8" />
                          <text x="15" y="11" fill={pillText} fontSize="8" fontWeight="bold" textAnchor="middle">90.0°</text>
                        </g>
                        <g transform="translate(325, 252)">
                          <rect x="0" y="0" width="30" height="15" rx="3" fill={pillBg} stroke={pillBorder} strokeWidth="0.8" />
                          <text x="15" y="11" fill={pillText} fontSize="8" fontWeight="bold" textAnchor="middle">90.0°</text>
                        </g>
                        {/* Angolo V4 (Bottom-Left FUORI SQUADRA): 88.5° — l'unico
                            che *non* è 90, quindi è l'unico che cambia colore. */}
                        <g transform="translate(152, 252)">
                          <rect x="0" y="0" width="38" height="15" rx="3" fill={pillBg} stroke={axisColor} strokeWidth="1" />
                          <text x="19" y="11" fill={axisColor} fontSize="8" fontWeight="bold" textAnchor="middle">88.5° 📐</text>
                        </g>

                        {/* Room Center Area Label — area e perimetro contati */}
                        <g transform="translate(230, 205)">
                          <text x="0" y="0" fill={areaTextColor} fontSize="21" fontWeight="800" textAnchor="middle" style={{ letterSpacing: "-0.5px" }}>
                            <tspan>
                              <GypsoCountUp to={18.65} decimals={2} duration={0.9} />
                            </tspan>
                            <tspan> m²</tspan>
                          </text>
                          <text x="0" y="14" fill={areaTextColor} fillOpacity="0.7" fontSize="9.5" fontWeight="600" textAnchor="middle">
                            Perimetro: 17.10 m · Sfrido: &lt; 3%
                          </text>
                        </g>

                        {/* Precision Crosshair Target — ruota lentamente */}
                        <g transform="translate(230, 185)" className="gypso-cad-crosshair">
                          <circle cx="0" cy="0" r="10" fill="none" stroke={axisColor} strokeWidth="1.2" strokeDasharray="3 2" />
                          <line x1="-14" y1="0" x2="14" y2="0" stroke={axisColor} strokeWidth="1.5" />
                          <line x1="0" y1="-14" x2="0" y2="14" stroke={axisColor} strokeWidth="1.5" />
                        </g>

                        {/* Dimension Pills (Quote esterne di cantiere) */}
                        <g transform="translate(205, 30)">
                          <rect x="0" y="0" width="50" height="18" rx="5" fill={pillBg} stroke={pillBorder} strokeWidth="1" />
                          <text x="25" y="13" fill={pillText} fontSize="9" fontWeight="bold" textAnchor="middle">5.00 m</text>
                        </g>
                        <g transform="translate(365, 172)">
                          <rect x="0" y="0" width="50" height="18" rx="5" fill={pillBg} stroke={pillBorder} strokeWidth="1" />
                          <text x="25" y="13" fill={pillText} fontSize="9" fontWeight="bold" textAnchor="middle">4.20 m</text>
                        </g>
                        <g transform="translate(225, 320)">
                          <rect x="0" y="0" width="50" height="18" rx="5" fill={pillBg} stroke={pillBorder} strokeWidth="1" />
                          <text x="25" y="13" fill={pillText} fontSize="9" fontWeight="bold" textAnchor="middle">4.05 m</text>
                        </g>
                        <g transform="translate(68, 125)">
                          <rect x="0" y="0" width="50" height="18" rx="5" fill={pillBg} stroke={pillBorder} strokeWidth="1" />
                          <text x="25" y="13" fill={pillText} fontSize="9" fontWeight="bold" textAnchor="middle">3.85 m</text>
                        </g>
                      </svg>
                    </motion.div>
                  </div>

                  {/* Bottom Controls Bar */}
                  <div className="gypso-cad-bottom-bar">
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
                          📐 <GypsoCountUp to={18.65} decimals={2} duration={0.9} /> m²
                        </span>
                        <span style={{ color: "#38bdf8", fontWeight: "700" }}>📏 17.10 m</span>
                        <span style={{ color: isSole ? "#64748b" : "var(--gypso-text-muted)", fontSize: "11px" }}>
                          • 4 Vertici
                        </span>
                      </div>

                      <motion.button
                        type="button"
                        className="gypso-cad-confirm-btn"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: MOTION.instant, ease: CURVES.spring }}
                      >
                        <Check size={14} />
                        <span>CONFERMA CAD</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </GypsoTilt>
            </div>
          </GypsoReveal>
        </section>

        {/* Core Features Grid */}
        <section id="features" className="gypso-section">
          <GypsoReveal>
            <h2 className="gypso-section-title">Strumenti Ingegnerizzati per il Cantiere</h2>
            <p className="gypso-section-desc">
              Dalla misura col distanziometro laser all'ordine materiali su WhatsApp e alla firma d'accettazione del committente.
            </p>
          </GypsoReveal>

          <div className="gypso-features-grid">
            {features.map((f, i) => (
              <GypsoStaggerItem key={f.title} index={i} step={0.06}>
                <GypsoSpotlightCard className="gypso-card gypso-feature-card" tint={f.tint}>
                  <span className="gypso-accent-line" aria-hidden="true" />
                  <div
                    className="gypso-feature-icon"
                    style={
                      f.color
                        ? { color: f.color, borderColor: f.border, background: f.bg }
                        : undefined
                    }
                  >
                    {f.icon}
                  </div>
                  <h3 className="gypso-feature-title">{f.title}</h3>
                  <p className="gypso-feature-text">{f.text}</p>
                </GypsoSpotlightCard>
              </GypsoStaggerItem>
            ))}
          </div>
        </section>

        {/* Free vs PRO Comparison Section */}
        <section id="pro-features" className="gypso-section">
          <GypsoReveal>
            <h2 className="gypso-section-title">Funzionalità Free & Versione PRO</h2>
            <p className="gypso-section-desc">
              Scegli la configurazione più adatta alle tue esigenze di cantiere: inizia con la versione gratuita o passa alla versione PRO per sbloccare tutti gli strumenti avanzati.
            </p>
          </GypsoReveal>

          <div className="gypso-pro-grid">
            {/* Card FREE */}
            <GypsoReveal direction="right">
              <GypsoSpotlightCard className="gypso-card gypso-pro-card" tint="148, 163, 184">
                <div>
                  <div className="gypso-pro-tag">Versione Base</div>
                  <h3 className="gypso-pro-title">GYPSO Free</h3>
                  <p className="gypso-pro-desc">
                    Tutti i calcoli tecnici a tua disposizione per rilievi, verifica di fattibilità e dimensionamento materiali.
                  </p>

                  <div className="gypso-pro-list">
                    {[
                      "Calcolo rapido e risultati tecnici completi",
                      "Fino a 3 progetti salvati (demo escluso)",
                      "Editor CAD 2D, forometrie e fuori squadra",
                      "Distinta base materiali e stima peso veicolo",
                      "11 lingue native incluse con manuale d'uso",
                      "Preventivi PDF di prova con watermark",
                    ].map((item, i) => (
                      <div className="gypso-pro-item" key={item} style={{ animationDelay: `${i * 0.05}s` }}>
                        <Check size={18} style={{ color: "var(--gypso-cyan)", flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                    <div className="gypso-pro-item is-muted">
                      <span style={{ fontSize: "14px", lineHeight: "1" }}>ℹ️</span>
                      <span>Banner discreti solo nella Home passiva</span>
                    </div>
                  </div>
                </div>

                <a href="#cad-preview" className="gypso-btn-secondary" style={{ width: "100%", justifyContent: "center", textAlign: "center" }}>
                  Inizia Subito Gratis
                </a>
              </GypsoSpotlightCard>
            </GypsoReveal>

            {/* Card PRO */}
            <GypsoReveal direction="left" delay={0.08}>
              <GypsoSpotlightCard className="gypso-card gypso-pro-card is-pro" tint="0, 229, 255">
                <div className="gypso-pro-ribbon">Versione Completa</div>

                <div>
                  <div className="gypso-pro-tag is-pro">Consigliato per Professionisti</div>
                  <h3 className="gypso-pro-title">GYPSO PRO</h3>
                  <p className="gypso-pro-desc">
                    Tutto ciò che serve per gestire commesse, contratti e preventivi aziendali con il massimo rigore formale.
                  </p>

                  <div className="gypso-pro-list">
                    {[
                      "Progetti e cantieri illimitati",
                      "Esportazione AutoCAD DXF (.dxf) a livelli",
                      "PDF professionali senza watermark con logo ditta",
                      "Firma cliente su touchscreen per accettazione offerta",
                      "Listino prezzi personalizzato (materiali e posa oraria/m²)",
                      "Backup completo ed esportazione cantieri .cart e .zip",
                      "Documentazione fotografica cantiere illimitata",
                      "Rimozione definitiva di tutta la pubblicità",
                      "Acquisto verificato e ripristinabile tramite Google Play / App Store",
                    ].map((item, i) => (
                      <div className="gypso-pro-item" key={item} style={{ animationDelay: `${i * 0.04}s` }}>
                        <CheckCircle2 size={18} style={{ color: "var(--gypso-green)", flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to="/gypso/terms" className="gypso-btn-primary" style={{ width: "100%", justifyContent: "center", textAlign: "center" }}>
                  Scopri Termini & Licenza PRO
                </Link>
              </GypsoSpotlightCard>
            </GypsoReveal>
          </div>
        </section>

        {/* FAQ — le obiezioni reali di chi compra, non un elenco di aggettivi */}
        <section id="faq" className="gypso-section">
          <GypsoReveal>
            <h2 className="gypso-section-title">Domande Frequenti</h2>
            <p className="gypso-section-desc">
              Le risposte tecniche alle obiezioni che contano: offline, norme, export, valore legale della firma.
            </p>
          </GypsoReveal>

          <div className="gypso-faq-list">
            {faqs.map((faq, i) => {
              const open = openFaq === i
              return (
                <GypsoStaggerItem key={faq.q} index={i} step={0.045}>
                  <div className={`gypso-card gypso-faq ${open ? "is-open" : ""}`}>
                    <span className="gypso-accent-line" aria-hidden="true" />
                    <button
                      type="button"
                      className="gypso-faq-q"
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                    >
                      <span>{faq.q}</span>
                      <motion.span
                        className="gypso-faq-chevron"
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: MOTION.fast, ease: CURVES.emphasized }}
                      >
                        <Plus size={16} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          className="gypso-faq-answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: MOTION.medium, ease: CURVES.layout },
                            opacity: { duration: MOTION.fast, ease: CURVES.standard },
                          }}
                        >
                          <p>{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </GypsoStaggerItem>
              )
            })}
          </div>
        </section>

        {/* Privacy & Legal Call-to-action Banner */}
        <section className="gypso-section">
          <GypsoReveal direction="none">
            <div className="gypso-privacy-banner">
              <div className="gypso-privacy-text">
                <h3>Trasparenza Legale, Privacy & EULA</h3>
                <p>
                  Consulta la nostra Informativa sulla Privacy conforme al Regolamento Generale sulla Protezione dei Dati (GDPR) e i Termini di Servizio (EULA) con il disclaimer tecnico di cantiere e i dettagli della licenza PRO.
                </p>
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <GypsoPress scale={0.97}>
                  <Link to="/gypso/privacy" className="gypso-btn-primary">
                    <Shield size={18} /> Privacy Policy
                  </Link>
                </GypsoPress>
                <GypsoPress scale={0.97}>
                  <Link to="/gypso/terms" className="gypso-btn-secondary">
                    <FileText size={18} /> Termini di Servizio (EULA)
                  </Link>
                </GypsoPress>
              </div>
            </div>
          </GypsoReveal>
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
            <a href="#faq" style={{ color: "var(--gypso-cyan)", textDecoration: "none", fontSize: "0.85rem" }}>
              FAQ
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
    </GypsoMotionProvider>
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
