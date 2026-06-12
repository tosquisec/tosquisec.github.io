import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { Shield, Code, Terminal, Download, Mail } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

const TypewriterName: React.FC<{ text: string }> = ({ text }) => {
  const [displayed, setDisplayed] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    setDisplayed("")
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) {
        clearInterval(interval)
        // Hide cursor after typing completes
        setTimeout(() => setShowCursor(false), 2000)
      }
    }, 70)
    return () => clearInterval(interval)
  }, [text])

  return (
    <span>
      {displayed}
      {showCursor && <span className="typing-cursor" />}
    </span>
  )
}

const Hero: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <section className="hero">
      <motion.div 
        className="glass-card-accent hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-wrapper"
        >
          <StaticImage 
            src="../images/c.png" 
            alt="Antonio Squillace"
            placeholder="blurred"
            layout="constrained"
            width={240}
            height={240}
            style={{ height: '100%', borderRadius: '50%' }}
          />
        </motion.div>
        
        <div style={{ flex: 1 }}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <TypewriterName text={t.hero.title} />
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-roles"
          >
            <span className="role-tag role-tag--security">
              <Shield size={15} /> {t.hero.roles.security}
            </span>
            <span className="role-tag role-tag--pentester">
              <Terminal size={15} /> {t.hero.roles.pentester}
            </span>
            <span className="role-tag role-tag--developer">
              <Code size={15} /> {t.hero.roles.developer}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{ fontSize: "1rem", color: "var(--text-secondary)", marginBottom: "1.2rem", maxWidth: "540px" }}
          >
            {t.hero.description}
          </motion.p>

          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="stats-banner"
          >
            <div className="stat-item">
              <span className="stat-value">{t.hero.stats.experience.value}</span>
              <span className="stat-label">{t.hero.stats.experience.label}</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{t.hero.stats.cves.value}</span>
              <span className="stat-label">{t.hero.stats.cves.label}</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{t.hero.stats.cert.value}</span>
              <span className="stat-label">{t.hero.stats.cert.label}</span>
            </div>
          </motion.div>
          
          {/* CTA + Social Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem", justifyContent: "center" }}
          >
            <a href="/cv_antonio_squillace.pdf" download className="btn-gradient">
              <Download size={18} /> {t.hero.downloadCV}
            </a>
            <div className="hero-socials" style={{ marginTop: 0 }}>
              <a href="mailto:dev@tosqui.it" className="hero-social-link" title="Email" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://t.me/tosquisec" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="Telegram" aria-label="Telegram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.61l-1.9 8.94c-.14.64-.52.8-1.06.5l-2.9-2.14-1.4 1.35c-.15.15-.28.28-.58.28l.2-2.94 5.36-4.84c.23-.2-.05-.31-.35-.11L9.17 13.8 6.3 12.9c-.62-.2-.63-.63.13-.93l11.2-4.3c.52-.2.97.11.83.84z"/></svg>
              </a>
              <a href="https://x.com/tosquisec" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="X" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
