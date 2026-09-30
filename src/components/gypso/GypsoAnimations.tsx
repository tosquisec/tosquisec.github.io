/**
 * GYPSO MOTION SYSTEM — porting fedele di `lib/core/design/tokens/motion.dart`
 *
 * L'app Flutter tratta il movimento come *token di prima classe*, accanto a
 * colore e tipografia. Questo file riporta gli stessi token sul web, così la
 * pagina di presentazione si muove con la stessa grammatica dell'app:
 *
 * | Situazione                              | Token    | Durata |
 * |-----------------------------------------|----------|--------|
 * | Feedback al tocco                       | instant  | 100 ms |
 * | Cambio colore / opacità / bordo         | fast     | 180 ms |
 * | Espansione card, comparsa chip, stato   | medium   | 260 ms |
 * | Apertura modale, transizione            | slow     | 340 ms |
 * | Ingresso non causato dall'utente        | entrance | 500 ms |
 *
 * Curve: `emphasized`, `spring`, `decelerate`, `accelerate`, `layout`, `standard`.
 *
 * Vincolo WCAG 2.3.3 (come in `AppMotion.respectful`): ogni animazione deve
 * azzerarsi quando l'utente chiede di ridurre il movimento. Il web lo espone
 * via `prefers-reduced-motion`, e framer-motion lo rispetta da sé tramite
 * `MotionConfig reducedMotion="user"` montato da `<GypsoMotionProvider>`.
 */

import * as React from "react"

/* ═══════════════════════════════════════════════════════════════════════════
   DURATE — speculari a `AppMotion`
   ═══════════════════════════════════════════════════════════════════════════ */

export const MOTION = {
  /** 100 ms — feedback immediato: il colore di un pulsante che si preme. */
  instant: 0.1,
  /** 180 ms — transizioni brevi su un elemento che resta fermo. */
  fast: 0.18,
  /** 260 ms — espansione di una card, cambio di stato che sposta un elemento. */
  medium: 0.26,
  /** 340 ms — apertura di un modale, passaggio di pagina. Tetto per i tocchi. */
  slow: 0.34,
  /** 500 ms — animazioni d'ingresso che l'utente non ha scatenato. */
  entrance: 0.5,
  /** Sorgenti periodiche: respiro degli aloni, pulviscolo della mesh. */
  ambient: 9,
} as const

/* ═══════════════════════════════════════════════════════════════════════════
   CURVE — speculari a `AppMotion`
   ═══════════════════════════════════════════════════════════════════════════ */

/** Cubic(0.2, 0, 0, 1) — elementi che si muovono verso l'utente o cambiano
 *  dimensione. Piccola sovraelongazione finale: comunica che si è assestato. */
export const CURVES = {
  emphasized: [0.2, 0.0, 0.0, 1.0] as const,
  /** Cubic(0.34, 1.4, 0.64, 1) — sovraelongazione marcata, per elementi
   *  piccoli e giocosi (chip, badge). Mai su superfici grandi. */
  spring: [0.34, 1.4, 0.64, 1.0] as const,
  /** Cubic(0.05, 0.7, 0.1, 1) — decelerazione pura: entra e si ferma. */
  decelerate: [0.05, 0.7, 0.1, 1.0] as const,
  /** Cubic(0.3, 0, 0.8, 0.15) — accelerazione pura: esce e scompare. */
  accelerate: [0.3, 0.0, 0.8, 0.15] as const,
  /** Movimento rettilineo per il *layout*: nessuna oscillazione sui bordi. */
  layout: [0.215, 0.61, 0.355, 1.0] as const,
  /** Standard per tutto ciò che non rientra nei casi sopra. */
  standard: [0.645, 0.045, 0.355, 1.0] as const,
} as const

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

/* ═══════════════════════════════════════════════════════════════════════════
   HOOK: rilevamento "riduci animazioni" (WCAG 2.3.3)
   ═══════════════════════════════════════════════════════════════════════════ */

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return
    const mq = window.matchMedia(REDUCED_MOTION_QUERY)
    setReduced(mq.matches)
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return reduced
}

/* ═══════════════════════════════════════════════════════════════════════════
   HOOK: rivelazione allo scroll
   Come `listEntrance` in Flutter: i contenuti entrano quando diventano
   visibili, con decelerazione pura e 500 ms. Non li ha scatenati l'utente,
   quindi possono superare il tetto dei 340 ms.
   ═══════════════════════════════════════════════════════════════════════════ */

export function useInView(
  options: { once?: boolean; margin?: string; threshold?: number } = {}
): [React.RefObject<HTMLDivElement>, boolean] {
  const { once = true, margin = "0px 0px -12% 0px", threshold = 0.14 } = options
  const ref = React.useRef<HTMLDivElement>(null)
  const [inView, setInView] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    // Ambiente senza IntersectionObserver: mostra subito, non nascondere mai
    // contenuto a chi non ha l'API.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setInView(false)
        }
      },
      { rootMargin: margin, threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, margin, threshold])

  return [ref, inView]
}

/* ═══════════════════════════════════════════════════════════════════════════
   PRIMITIVE
   ═══════════════════════════════════════════════════════════════════════════ */

type RevealDirection = "up" | "down" | "left" | "right" | "none"

interface RevealProps {
  children: React.ReactNode
  /** Direzione di provenienza dell'elemento. Default: dal basso. */
  direction?: RevealDirection
  /** Ritardo in secondi — usato per generare lo *stagger* di una lista. */
  delay?: number
  /** Distanza percorsa in px: lega la durata alla distanza (motion physics). */
  distance?: number
  className?: string
  style?: React.CSSProperties
  /** Tag HTML da usare. Default `div`. */
  as?: "div" | "section" | "li" | "article" | "header" | "footer" | "span"
}

const OFFSETS: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
}

/**
 * `<GypsoReveal>` — entrata allo scroll con `decelerate` + `entrance`.
 * Sostituisce un semplice fade-in: l'elemento entra, decelera e si posa.
 */
export const GypsoReveal: React.FC<RevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  distance = 26,
  className,
  style,
  as = "div",
}) => {
  const [ref, inView] = useInView()
  const reduced = usePrefersReducedMotion()
  const offset = OFFSETS[direction]
  const Tag = as as any

  const hidden = reduced
    ? { opacity: 1, x: 0, y: 0, scale: 1 }
    : {
        opacity: 0,
        x: offset.x * distance,
        y: offset.y * distance,
        scale: direction === "none" ? 0.97 : 1,
      }

  const shown = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: reduced ? 0 : MOTION.entrance,
      delay: reduced ? 0 : delay,
      ease: CURVES.decelerate,
    },
  }

  return (
    <Tag ref={ref} className={className} style={{ willChange: "opacity, transform", ...style }}>
      <MotionWrapper initial={hidden} animate={inView ? shown : hidden}>
        {children}
      </MotionWrapper>
    </Tag>
  )
}

/**
 * Piccolo wrapper che evita di importare `motion` in ogni pagina.
 * `motion` viene importato staticamente qui: framer-motion è già una
 * dipendenza del progetto e Gatsby gestisce il code-splitting per pagina.
 */
import { motion, MotionConfig } from "framer-motion"

const MotionWrapper: React.FC<{
  children: React.ReactNode
  initial: any
  animate: any
  className?: string
  style?: React.CSSProperties
}> = ({ children, initial, animate, className, style }) => (
  <motion.div className={className} style={style} initial={initial} animate={animate}>
    {children}
  </motion.div>
)

/** Provider globale: fa rispettare `prefers-reduced-motion` a tutte le
 *  animazioni framer-motion della pagina, come `MediaQuery.disableAnimations`
 *  a livello di app in `main.dart`. */
export const GypsoMotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
)

/* ═══════════════════════════════════════════════════════════════════════════
   STAGGER — comparsa sequenziale di una lista/griglia
   ═══════════════════════════════════════════════════════════════════════════ */

interface StaggerItemProps {
  children: React.ReactNode
  index?: number
  /** Passo tra un elemento e il successivo (60 ms legge come "a cascata",
      non come "sei cose che appaiono a caso"). */
  step?: number
  className?: string
  style?: React.CSSProperties
}

export const GypsoStaggerItem: React.FC<StaggerItemProps> = ({
  children,
  index = 0,
  step = 0.06,
  className,
  style,
}) => (
  <GypsoReveal delay={index * step} className={className} style={style}>
    {children}
  </GypsoReveal>
)

/* ═══════════════════════════════════════════════════════════════════════════
   CONTATORE ANIMATO — per le metriche (18.65 m², 4.20 m, 48 dB…)
   Ingresso `entrance`, decelerazione. Non è un effetto decorativo: dà il
   tempo all'occhio di leggere un numero che *cambia*, invece di apparire.
   ═══════════════════════════════════════════════════════════════════════════ */

interface CountUpProps {
  to: number
  decimals?: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
  style?: React.CSSProperties
}

export const GypsoCountUp: React.FC<CountUpProps> = ({
  to,
  decimals = 0,
  duration = MOTION.entrance,
  prefix = "",
  suffix = "",
  className,
  style,
}) => {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const reduced = usePrefersReducedMotion()
  const [value, setValue] = React.useState(0)
  const frame = React.useRef<number>(0)

  React.useEffect(() => {
    if (!inView) return
    if (reduced) {
      setValue(to)
      return
    }

    const start = performance.now()
    const ms = duration * 1000

    const tick = (now: number) => {
      const raw = Math.min((now - start) / ms, 1)
      // Stessa decelerazione `easeOutCubic` del token `layout`.
      const eased = 1 - Math.pow(1 - raw, 3)
      setValue(to * eased)
      if (raw < 1) frame.current = requestAnimationFrame(tick)
    }

    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [inView, to, duration, reduced])

  return (
    <span ref={ref as any} className={className} style={style}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   PRESS — feedback al tocco, come `_GlassButtonState` in glass_components.dart
   `instant` (100 ms) + curva `spring`: il pulsante "si assesta" invece di
   fermarsi di colpo. La sovraelongazione su un elemento piccolo legge come
   risposta fisica, non come instabilità.
   ═══════════════════════════════════════════════════════════════════════════ */

interface PressProps {
  children: React.ReactNode
  scale?: number
  className?: string
  style?: React.CSSProperties
  as?: "div" | "span"
}

export const GypsoPress: React.FC<PressProps> = ({
  children,
  scale = 0.95,
  className,
  style,
}) => {
  const reduced = usePrefersReducedMotion()

  return (
    <motion.div
      className={className}
      style={style}
      whileTap={reduced ? undefined : { scale }}
      whileHover={reduced ? undefined : { scale: 1.04 }}
      transition={{ duration: MOTION.instant, ease: CURVES.spring }}
    >
      {children}
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SPOTLIGHT CARD — bordo che si accende sotto il puntatore.
   Nella app l'ambra è "l'unico colore che dovrebbe dire qualcosa: l'azione".
   Qui il bordo reagisce al puntatore con `fast` (180 ms), senza riempimenti
   decorativi: il colore resta informazione, non decorazione.
   ═══════════════════════════════════════════════════════════════════════════ */

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  /** Tinta RGB del bagliore, es. "0, 229, 255" per il ciano di GYPSO. */
  tint?: string
}

export const GypsoSpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  style,
  tint = "0, 229, 255",
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty("--gx", `${event.clientX - rect.left}px`)
    node.style.setProperty("--gy", `${event.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      className={`gypso-spotlight ${className}`}
      style={{ ["--gypso-spot-tint" as any]: tint, ...style }}
      onMouseMove={onMove}
    >
      <span className="gypso-spotlight-glow" aria-hidden="true" />
      {children}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   MOCKUP 3D — inclinazione che segue il puntatore.
   Serve a vendere la profondità del device senza un video: la stessa idea
   della vista 3D orbitabile in `view_3d_tab.dart`, con `fast` e `layout`
   per non far "sbattere" i bordi.
   ═══════════════════════════════════════════════════════════════════════════ */

interface TiltProps {
  children: React.ReactNode
  className?: string
  max?: number
}

export const GypsoTilt: React.FC<TiltProps> = ({ children, className = "", max = 7 }) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    node.style.transform = `perspective(1100px) rotateY(${px * max * 2}deg) rotateX(${
      -py * max * 2
    }deg)`
    node.style.setProperty("--tilt-x", `${px}`)
    node.style.setProperty("--tilt-y", `${py}`)
  }

  const onLeave = () => {
    const node = ref.current
    if (node) node.style.transform = "perspective(1100px) rotateY(0deg) rotateX(0deg)"
  }

  return (
    <div ref={ref} className={`gypso-tilt ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SEZIONI DI TESTO LEGALE — entrata + indice laterale attivo
   ═══════════════════════════════════════════════════════════════════════════ */

export const GypsoLegalSection: React.FC<{
  id: string
  title: string
  index: number
  children: React.ReactNode
}> = ({ id, title, index, children }) => (
  <GypsoReveal as="section" delay={Math.min(index * 0.035, 0.24)} className="gypso-legal-block" style={{}}>
    <h2 id={id} className="gypso-legal-h2">
      <span className="gypso-legal-index">{String(index + 1).padStart(2, "0")}</span>
      {title}
    </h2>
    <div className="gypso-legal-body">{children}</div>
  </GypsoReveal>
)

/** Barra di avanzamento della lettura: `layout` (nessuna oscillazione). */
export const GypsoReadingProgress: React.FC = () => {
  const [progress, setProgress] = React.useState(0)
  const reduced = usePrefersReducedMotion()

  React.useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? Math.min(doc.scrollTop / max, 1) : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="gypso-read-progress" aria-hidden="true">
      <div
        className="gypso-read-progress-bar"
        style={{
          transform: `scaleX(${progress})`,
          transition: reduced ? "none" : `transform ${MOTION.fast}s linear`,
        }}
      />
    </div>
  )
}
