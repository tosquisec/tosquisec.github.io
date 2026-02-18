import React from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"

const SkillBadge: React.FC<{ label: string }> = ({ label }) => (
  <span className="glass-card" style={{ 
    padding: "0.4rem 0.8rem", 
    fontSize: "0.85rem", 
    borderRadius: "100px",
    display: "inline-block",
    margin: "0.25rem",
    background: "rgba(255, 255, 255, 0.08)"
  }}>
    {label}
  </span>
)

const SkillCategory: React.FC<{ title: string, skills: string[], delay: number }> = ({ title, skills, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="glass-card"
  >
    <h3 style={{ fontSize: "1.2rem", marginBottom: "1.2rem", borderBottom: "1px solid var(--glass-border)", paddingBottom: "0.5rem" }}>{title}</h3>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {skills.map(skill => <SkillBadge key={skill} label={skill} />)}
    </div>
  </motion.div>
)

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
      <div className="grid-responsive">
        <SkillCategory 
          title={t.skills.categories.programming}
          skills={["Java", "Python", "C", "Javascript", "Typescript", "Assembly", "Bash/Shell"]}
          delay={0.1}
        />
        <SkillCategory 
          title={t.skills.categories.tools}
          skills={["Nmap", "BurpSuite", "Metasploit", "Wireshark", "Ghidra", "IDA Pro", "SQLmap", "Nikto"]}
          delay={0.2}
        />
        <SkillCategory 
          title={t.skills.categories.infra}
          skills={["Docker", "Terraform", "Ansible", "Packer", "Vault", "Linux/Unix", "MacOS"]}
          delay={0.3}
        />
        <SkillCategory 
          title={t.skills.categories.compliance}
          skills={["ISO 27001", "OWASP", "NIST", "GDPR", "CVSS v3.1"]}
          delay={0.4}
        />
      </div>
    </section>
  )
}

export default Skills
