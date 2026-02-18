import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { Shield, Code, Terminal, Download } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

const Hero: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <section className="hero">
      <div className="glass-card" style={{ display: "flex", alignItems: "center", gap: "3rem", padding: "3rem" }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ flexShrink: 0 }}
        >
          <div style={{ borderRadius: "50%", overflow: "hidden", width: "250px", height: "250px", border: "4px solid var(--glass-border)" }}>
            <StaticImage 
              src="../images/c.png" 
              alt="Antonio Squillace"
              placeholder="blurred"
              layout="constrained"
              width={250}
              height={250}
              style={{ height: '100%' }}
            />
          </div>
        </motion.div>
        
        <div style={{ flex: 1 }}>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ fontSize: "3.5rem", marginBottom: "0.5rem" }}
          >
            {t.hero.title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-primary)" }}>
              <Shield size={20} /> {t.hero.roles.security}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-secondary)" }}>
              <Terminal size={20} /> {t.hero.roles.pentester}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#a855f7" }}>
              <Code size={20} /> {t.hero.roles.developer}
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "600px", marginBottom: "2rem" }}
          >
            {t.hero.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a 
              href="/cv_antonio_squillace.pdf" 
              download
              className="glass-card" 
              style={{ 
                display: "inline-flex", alignItems: "center", gap: "0.5rem", 
                padding: "0.8rem 1.5rem", textDecoration: "none", color: "var(--text-primary)",
                background: "rgba(0, 210, 255, 0.15)", borderColor: "var(--accent-primary)"
              }}
            >
              <Download size={20} /> {t.hero.downloadCV}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
