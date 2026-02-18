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
        <p style={{ textAlign: "center", marginBottom: "3rem", color: "var(--text-secondary)" }}>
          {content.description}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {content.items.map((item: any, index: number) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card"
              style={{ padding: "1.5rem" }}
            >
              <div style={{ color: "var(--accent-primary)", marginBottom: "1rem" }}>
                <Bug size={28} />
              </div>
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>{item.id}</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                {item.title} in <span style={{ color: "var(--accent-secondary)" }}>"{item.target}"</span>
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: "3rem", textAlign: "center" }}
        >
          <a 
            href="https://lgsecurity.lge.com/bulletins/idproducts#updateDetails" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1rem 2rem", textDecoration: "none", color: "var(--text-primary)" }}
          >
            {content.linkText} <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default BugBounty
