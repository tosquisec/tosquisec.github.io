import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Education from "../components/Education"
import BugBounty from "../components/BugBounty"
import Contact from "../components/Contact"
import { LanguageProvider, useLanguage } from "../context/LanguageContext"
import { Languages } from "lucide-react"

const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage()
  
  return (
    <nav style={{ 
      position: "sticky", top: "20px", zIndex: 1000, 
      display: "flex", justifyContent: "center", marginBottom: "40px", gap: "1rem"
    }}>
      <div className="glass-card" style={{ 
        padding: "0.8rem 2rem", borderRadius: "100px", 
        display: "flex", gap: "2rem", backdropFilter: "blur(20px)" 
      }}>
        <a href="#about" style={{ color: "inherit", fontWeight: 500 }}>{t.nav.about}</a>
        <a href="#experience" style={{ color: "inherit", fontWeight: 500 }}>{t.nav.experience}</a>
        <a href="#skills" style={{ color: "inherit", fontWeight: 500 }}>{t.nav.skills}</a>
        <a href="#bugbounty" style={{ color: "inherit", fontWeight: 500 }}>{t.nav.bugbounty}</a>
        <a href="#contact" style={{ color: "inherit", fontWeight: 500 }}>{t.nav.contact}</a>
      </div>
      
      <button 
        onClick={() => setLanguage(language === "it" ? "en" : "it")}
        className="glass-card"
        style={{ 
          padding: "0.8rem", borderRadius: "50%", cursor: "pointer", 
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--text-primary)", border: "1px solid var(--glass-border)"
        }}
        title="Switch Language"
      >
        <Languages size={20} />
        <span style={{ marginLeft: "5px", fontSize: "0.8rem", fontWeight: "bold" }}>{language.toUpperCase()}</span>
      </button>
    </nav>
  )
}

const PageContent: React.FC = () => {
  const { t } = useLanguage()
  return (
    <Layout>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <BugBounty content={t.bugbounty} />
      <Education />
      <Contact />
    </Layout>
  )
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Antonio Squillace | Cybersecurity & Backend Developer</title>
    <meta name="description" content="Portfolio of Antonio Squillace, Cybersecurity Professional and Backend Developer." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet" />
  </>
)
