import React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

const Contact: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <section id="contact" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {t.contact.title}
      </motion.h2>
      <div className="glass-card" style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", padding: "3rem" }}>
        <p style={{ marginBottom: "2rem", fontSize: "1.1rem", color: "var(--text-secondary)" }}>
          {t.contact.description}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center" }}>
          <a href="mailto:dev@tosqui.it" className="glass-card" style={{ 
            display: "flex", alignItems: "center", gap: "1rem", width: "100%", maxWidth: "400px", 
            justifyContent: "center", textDecoration: "none", color: "var(--text-primary)"
          }}>
            <Mail color="var(--accent-primary)" size={24} /> dev@tosqui.it
          </a>
          <div className="glass-card" style={{ 
            display: "flex", alignItems: "center", gap: "1rem", width: "100%", maxWidth: "400px", 
            justifyContent: "center"
          }}>
            <Phone color="var(--accent-primary)" size={24} /> (+39) 333 571 9248
          </div>
          <div className="glass-card" style={{ 
            display: "flex", alignItems: "center", gap: "1rem", width: "100%", maxWidth: "400px", 
            justifyContent: "center"
          }}>
            <MapPin color="var(--accent-primary)" size={24} /> {t.contact.location}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
