import React from "react"
import { motion } from "framer-motion"
import { Code, Shield, Server, FileCheck } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

const categoryMeta: Record<string, { icon: React.ReactNode; badgeClass: string }> = {
  programming: { icon: <Code size={18} />, badgeClass: "skill-badge--programming" },
  tools: { icon: <Shield size={18} />, badgeClass: "skill-badge--tools" },
  infra: { icon: <Server size={18} />, badgeClass: "skill-badge--infra" },
  compliance: { icon: <FileCheck size={18} />, badgeClass: "skill-badge--compliance" },
}

const skillsData: Record<string, string[]> = {
  programming: ["Java", "Python", "C", "Javascript", "Typescript", "Assembly", "Bash/Shell"],
  tools: ["Nmap", "BurpSuite", "Metasploit", "Wireshark", "Ghidra", "IDA Pro", "SQLmap", "Nikto"],
  infra: ["Docker", "Terraform", "Ansible", "Packer", "Vault", "Linux/Unix", "MacOS"],
  compliance: ["ISO 27001", "OWASP", "NIST", "GDPR", "CVSS v3.1"],
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.04, duration: 0.3, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }
  })
}

const SkillCategory: React.FC<{ categoryKey: string; title: string; delay: number }> = ({ categoryKey, title, delay }) => {
  const meta = categoryMeta[categoryKey]
  const skills = skillsData[categoryKey]
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card"
    >
      <div className="skill-category-header">
        <div className="skill-category-title">
          <span style={{ color: "var(--accent-primary)" }}>{meta.icon}</span>
          <span>{title}</span>
        </div>
        <span className="skill-category-count">{skills.length}</span>
      </div>
      <div className="skill-badges">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            className={`skill-badge ${meta.badgeClass}`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={badgeVariants}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

const Skills: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <section id="skills" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {t.skills.title}
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        {t.skills.subtitle}
      </motion.p>
      <div className="skills-grid">
        <SkillCategory categoryKey="programming" title={t.skills.categories.programming} delay={0.1} />
        <SkillCategory categoryKey="tools" title={t.skills.categories.tools} delay={0.15} />
        <SkillCategory categoryKey="infra" title={t.skills.categories.infra} delay={0.2} />
        <SkillCategory categoryKey="compliance" title={t.skills.categories.compliance} delay={0.25} />
      </div>
    </section>
  )
}

export default Skills
