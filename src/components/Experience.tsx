import React from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

const ExperienceItem: React.FC<{
  title: string
  company: string
  period: string
  points: string[]
  delay: number
}> = ({ title, company, period, points, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="glass-card"
    style={{ marginBottom: "2rem", padding: "2rem" }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
      <div>
        <h3 style={{ fontSize: "1.4rem", marginBottom: "0.2rem" }}>{title}</h3>
        <span style={{ color: "var(--accent-primary)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Briefcase size={16} /> {company}
        </span>
      </div>
      <span style={{ color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
        <Calendar size={16} /> {period}
      </span>
    </div>
    <ul style={{ paddingLeft: "1.5rem", color: "var(--text-secondary)" }}>
      {points.map((point, i) => (
        <li key={i} style={{ marginBottom: "0.5rem" }}>{point}</li>
      ))}
    </ul>
  </motion.div>
)

const Experience: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <section id="experience" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {t.experience.title}
      </motion.h2>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {t.experience.items.map((item: any, index: number) => (
          <ExperienceItem 
            key={index}
            title={item.title}
            company={item.company}
            period={item.period}
            points={item.points}
            delay={0.1 * (index + 1)}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience
