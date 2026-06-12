import React from "react"
import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

const DegreeCard: React.FC<{
  degree: string
  school: string
  date: string
  grade?: string
  details?: string
  delay: number
}> = ({ degree, school, date, grade, details, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="glass-card degree-card"
  >
    <div className="degree-icon">
      <GraduationCap size={24} />
    </div>
    <div style={{ flex: 1 }}>
      <h3 style={{ fontSize: "1.15rem", marginBottom: "0.3rem" }}>{degree}</h3>
      <p style={{ color: "var(--text-secondary)", fontWeight: 500, fontSize: "0.95rem", marginBottom: "0.4rem" }}>
        {school}
        <span className="year-badge" style={{ marginLeft: "0.6rem" }}>{date}</span>
        {grade && (
          <span className="grade-badge">
            <Award size={13} /> {grade}
          </span>
        )}
      </p>
      {details && <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginTop: "0.4rem", lineHeight: 1.6, whiteSpace: "pre-line" }}>{details}</p>}
    </div>
  </motion.div>
)

const CertCard: React.FC<{
  degree: string
  school: string
  date: string
  delay: number
}> = ({ degree, school, date, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="glass-card cert-card"
  >
    <div style={{ color: "var(--accent-amber)", flexShrink: 0, paddingTop: "0.15rem" }}>
      <BookOpen size={18} />
    </div>
    <div style={{ flex: 1 }}>
      <h3>{degree}</h3>
      <p style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
        {school}
        <span className="year-badge" style={{ marginLeft: "0.5rem" }}>{date}</span>
      </p>
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
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        {t.education.subtitle}
      </motion.p>
      
      <div className="education-section">
        {/* Degrees */}
        <motion.h4
          className="education-group-title"
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.education.groupDegrees}
        </motion.h4>
        {t.education.items.map((item: any, index: number) => (
          <DegreeCard 
            key={index}
            degree={item.degree}
            school={item.school}
            date={item.date}
            grade={item.grade}
            details={item.details}
            delay={0.1 * (index + 1)}
          />
        ))}

        {/* Certifications */}
        <motion.h4
          className="education-group-title education-group-title--certs"
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.education.groupCerts}
        </motion.h4>
        <div className="cert-grid">
          {t.education.certifications.map((item: any, index: number) => (
            <CertCard
              key={index}
              degree={item.degree}
              school={item.school}
              date={item.date}
              delay={0.05 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
