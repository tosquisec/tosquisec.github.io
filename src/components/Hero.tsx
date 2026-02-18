import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { Shield, Code, Terminal, Download } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

const Hero: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <section className="hero">
      <div className="glass-card hero-content">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-image-wrapper"
        >
          <StaticImage 
            src="../images/c.png" 
            alt="Antonio Squillace"
            placeholder="blurred"
            layout="constrained"
            width={250}
            height={250}
            style={{ height: '100%' }}
          />
        </motion.div>
        
        <div style={{ flex: 1 }}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t.hero.title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-roles"
          >
            <span className="role-tag" style={{ color: "var(--accent-primary)" }}>
              <Shield size={18} /> {t.hero.roles.security}
            </span>
            <span className="role-tag" style={{ color: "var(--accent-secondary)" }}>
              <Terminal size={18} /> {t.hero.roles.pentester}
            </span>
            <span className="role-tag" style={{ color: "#a855f7" }}>
              <Code size={18} /> {t.hero.roles.developer}
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ fontSize: "1.05rem", color: "var(--text-secondary)", marginBottom: "2rem" }}
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
