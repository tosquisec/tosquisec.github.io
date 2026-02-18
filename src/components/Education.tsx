import React from "react"
import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

const EducationItem: React.FC<{
  degree: string
  school: string
  date: string
  details?: string
  delay: number
}> = ({ degree, school, date, details, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="glass-card"
    style={{ marginBottom: "1.5rem", display: "flex", gap: "1.5rem" }}
  >
    <div style={{ color: "var(--accent-primary)", paddingTop: "0.5rem" }}>
      <GraduationCap size={32} />
    </div>
    <div>
      <h3 style={{ fontSize: "1.2rem", marginBottom: "0.3rem" }}>{degree}</h3>
      <p style={{ color: "var(--accent-secondary)", fontWeight: 500 }}>{school} • {date}</p>
      {details && <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "0.5rem" }}>{details}</p>}
    </div>
  </motion.div>
)

const Education: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <section id="education" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {t.education.title}
      </motion.h2>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {t.education.items.map((item: any, index: number) => (
          <EducationItem 
            key={index}
            degree={item.degree}
            school={item.school}
            date={item.date}
            details={item.details}
            delay={0.1 * (index + 1)}
          />
        ))}
      </div>
    </section>
  )
}

export default Education
