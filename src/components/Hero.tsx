import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { Shield, Code, Terminal, Download } from "lucide-react"
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
            style={{ fontSize: "1rem", color: "var(--text-secondary)", marginBottom: "1.2rem", maxWidth: "580px" }}
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
          
          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="hero-cta"
          >
            <a href="/cv_as.pdf" download className="btn-gradient">
              <Download size={18} /> {t.hero.downloadCV}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
