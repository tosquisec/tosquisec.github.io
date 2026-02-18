import React from "react"
import { motion } from "framer-motion"
import { Bug, ExternalLink } from "lucide-react"

interface BugBountyProps {
  content: any
}

const BugBounty: React.FC<BugBountyProps> = ({ content }) => {
  return (
    <section id="bugbounty" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {content.title}
      </motion.h2>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ textAlign: "center", marginBottom: "2rem", color: "var(--text-secondary)", padding: "0 1rem" }}>
          {content.description}
        </p>
        <div className="grid-responsive">
          {content.items.map((item: any, index: number) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card"
              style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}
            >
              <div style={{ color: "var(--accent-primary)", marginBottom: "0.8rem" }}>
                <Bug size={24} />
              </div>
              <h3 style={{ fontSize: "1.05rem", marginBottom: "0.4rem", color: "var(--text-primary)" }}>{item.id}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                {item.title}
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--accent-secondary)", marginTop: "0.3rem" }}>
                {item.target}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: "2.5rem", textAlign: "center" }}
        >
          <a 
            href="https://lgsecurity.lge.com/bulletins/idproducts#updateDetails" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.5rem", textDecoration: "none", color: "var(--text-primary)", fontSize: "0.95rem" }}
          >
            {content.linkText} <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default BugBounty
