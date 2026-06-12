import React from "react"
import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"
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
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        {t.contact.description}
      </motion.p>
      <div className="contact-cards">
        <motion.a
          href="mailto:dev@tosqui.it"
          className="glass-card contact-link contact-link--email"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Mail size={20} color="var(--accent-primary)" />
          <span style={{ flex: 1 }}>dev@tosqui.it</span>
          <ArrowRight size={16} style={{ opacity: 0.4 }} />
        </motion.a>

        <motion.a
          href="https://t.me/tosquisec"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card contact-link contact-link--telegram"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg viewBox="0 0 24 24" width={20} height={20} fill="#0088cc">
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.61l-1.9 8.94c-.14.64-.52.8-1.06.5l-2.9-2.14-1.4 1.35c-.15.15-.28.28-.58.28l.2-2.94 5.36-4.84c.23-.2-.05-.31-.35-.11L9.17 13.8 6.3 12.9c-.62-.2-.63-.63.13-.93l11.2-4.3c.52-.2.97.11.83.84z"/>
          </svg>
          <span style={{ flex: 1 }}>Telegram</span>
          <ArrowRight size={16} style={{ opacity: 0.4 }} />
        </motion.a>

        <motion.a
          href="https://x.com/tosquisec"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card contact-link contact-link--x"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg viewBox="0 0 24 24" width={18} height={18} fill="var(--text-primary)">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span style={{ flex: 1 }}>X (Twitter)</span>
          <ArrowRight size={16} style={{ opacity: 0.4 }} />
        </motion.a>
      </div>
    </section>
  )
}

export default Contact
