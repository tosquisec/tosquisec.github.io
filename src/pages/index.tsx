import * as React from "react"
import { useState } from "react"
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
import { Languages, Menu, X } from "lucide-react"

const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#bugbounty", label: t.nav.bugbounty },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <div className="nav-container desktop-only">
        <div className="glass-card nav-glass">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{ color: "inherit", fontWeight: 500 }}>{link.label}</a>
          ))}
        </div>
        
        <button 
          onClick={() => setLanguage(language === "it" ? "en" : "it")}
          className="glass-card lang-btn-desktop"
          title="Switch Language"
        >
          <Languages size={18} />
          <span style={{ marginLeft: "5px", fontSize: "0.75rem", fontWeight: "bold" }}>{language.toUpperCase()}</span>
        </button>
      </div>

      {/* Mobile Floating Button */}
      <button className="mobile-menu-toggle mobile-only glass-card" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content glass-card">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--glass-border)" }}>
            <button 
              onClick={() => { setLanguage(language === "it" ? "en" : "it"); closeMenu(); }}
              className="glass-card"
              style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0.8rem 1.5rem", width: "100%", justifyContent: "center", color: "white" }}
            >
              <Languages size={20} />
              <span>{language === "it" ? "English" : "Italiano"}</span>
            </button>
          </div>
        </div>
      </div>
    </>
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <meta name="description" content="Portfolio of Antonio Squillace, Cybersecurity Professional and Backend Developer." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet" />
  </>
)
