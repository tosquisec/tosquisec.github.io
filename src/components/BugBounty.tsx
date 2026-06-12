import React from "react"
import { motion } from "framer-motion"
import { Bug, ExternalLink, AlertTriangle } from "lucide-react"

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
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        {content.description}
      </motion.p>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Counter badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          <span className="bugbounty-counter">
            <Bug size={16} /> {content.items.length} {content.counter}
          </span>
        </motion.div>

        <div className="bugbounty-grid">
          {content.items.map((item: any, index: number) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-card cve-card cve-card--${item.severity}`}
            >
              <div style={{ marginBottom: "0.6rem" }}>
                <span className={`cve-severity cve-severity--${item.severity}`}>
                  {item.severity === "critical" ? "Critical" : "High"}
                </span>
              </div>
              <h3 className="cve-id mono">{item.id}</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "0.5rem", lineHeight: 1.5 }}>
                {item.title}
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                {item.target}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ marginTop: "2.5rem", textAlign: "center" }}
        >
          <a 
            href="https://lgsecurity.lge.com/bulletins/idproducts#updateDetails" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {content.linkText} <ExternalLink size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default BugBounty
