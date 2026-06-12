import React from "react"
import { motion } from "framer-motion"
import { Shield, Code, FileCheck } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  })
}

const icons = [
  <Shield size={24} />,
  <Code size={24} />,
  <FileCheck size={24} />,
]

const variants = ["security", "development", "compliance"]

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
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        {t.about.subtitle}
      </motion.p>
      <div className="about-grid">
        {t.about.cards.map((card: any, i: number) => (
          <motion.div
            key={i}
            className={`glass-card about-card about-card--${variants[i]}`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="about-card-icon">
              {icons[i]}
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default About
