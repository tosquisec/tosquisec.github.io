import React from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"

const About: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <section id="about" className="section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {t.about.title}
      </motion.h2>
      <div className="glass-card" style={{ maxWidth: "900px", margin: "0 auto", padding: "2.5rem" }}>
        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
          {t.about.p1}
        </p>
        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
          {t.about.p2}
        </p>
        <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>
          {t.about.p3}
        </p>
      </div>
    </section>
  )
}

export default About
