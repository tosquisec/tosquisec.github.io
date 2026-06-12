import * as React from "react"
import { useState, useEffect, useCallback } from "react"
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

const sectionIds = ["about", "experience", "skills", "bugbounty", "education", "contact"]

const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  // IntersectionObserver for active nav link
  useEffect(() => {
    if (typeof window === "undefined") return

    const observers: IntersectionObserver[] = []
    
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const navLinks = [
    { href: "#about", id: "about", label: t.nav.about },
    { href: "#experience", id: "experience", label: t.nav.experience },
    { href: "#skills", id: "skills", label: t.nav.skills },
    { href: "#bugbounty", id: "bugbounty", label: t.nav.bugbounty },
    { href: "#education", id: "education", label: t.nav.education },
    { href: "#contact", id: "contact", label: t.nav.contact },
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <div className="nav-container desktop-only">
        <div className="nav-glass">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${activeSection === link.id ? ' active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <button 
          onClick={() => setLanguage(language === "it" ? "en" : "it")}
          className="lang-btn-desktop"
          title="Switch Language"
        >
          <Languages size={16} />
          <span>{language.toUpperCase()}</span>
        </button>
      </div>

      {/* Mobile Floating Button */}
      <button className="mobile-menu-toggle mobile-only" onClick={toggleMenu}>
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content glass-card">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--glass-border)" }}>
            <button 
              onClick={() => { setLanguage(language === "it" ? "en" : "it"); closeMenu(); }}
              className="btn-outline"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <Languages size={18} />
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
    <title>Antonio Squillace | Cybersecurity Professional & Backend Developer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Portfolio di Antonio Squillace — Application Security Analyst, Penetration Tester e Backend Developer con 4+ anni di esperienza professionale. CEH Certified, 3 LVE pubblicate." />
    <meta name="author" content="Antonio Squillace" />
    <meta property="og:title" content="Antonio Squillace | Cybersecurity & Backend Developer" />
    <meta property="og:description" content="Application Security Analyst & Penetration Tester con 4+ anni di esperienza. CEH Certified." />
    <meta property="og:type" content="website" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
  </>
)
