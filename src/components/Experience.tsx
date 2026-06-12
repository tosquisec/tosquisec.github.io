import React from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

const ExperienceItem: React.FC<{
  title: string
  company: string
  period: string
  points: string[]
  isCurrent: boolean
  delay: number
}> = ({ title, company, period, points, isCurrent, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className={`timeline-item${isCurrent ? ' timeline-item--current' : ''}`}
  >
    <div className="glass-card timeline-card">
      <div className="timeline-header">
        <div>
          <h3 style={{ fontSize: "1.25rem", marginBottom: "0.3rem" }}>{title}</h3>
          <span className="timeline-company">
            <Briefcase size={15} /> {company}
            {isCurrent && <span className="current-badge">Active</span>}
          </span>
        </div>
        <span className="timeline-period">
          <Calendar size={14} /> {period}
        </span>
      </div>
      <ul className="timeline-points">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
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
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        {t.experience.subtitle}
      </motion.p>
      <div className="timeline">
        {t.experience.items.map((item: any, index: number) => (
          <ExperienceItem 
            key={index}
            title={item.title}
            company={item.company}
            period={item.period}
            points={item.points}
            isCurrent={item.isCurrent}
            delay={0.1 * (index + 1)}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience
