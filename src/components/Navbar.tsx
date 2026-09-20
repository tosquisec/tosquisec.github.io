import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useLanguage } from "../context/LanguageContext"
import { Shield, Languages, Menu, X, ArrowLeft } from "lucide-react"

export type SupportedPrivacyLang = "it" | "en" | "de" | "fr" | "es"

interface NavbarProps {
  mode?: "home" | "gypso" | "gypso-privacy" | "allertaitalia-privacy"
  privacyLang?: SupportedPrivacyLang
  setPrivacyLang?: (lang: SupportedPrivacyLang) => void
}

const sectionIds = ["experience", "skills", "bugbounty", "education", "contact"]

const privacyLangsList: { code: SupportedPrivacyLang; flag: string; label: string }[] = [
  { code: "it", flag: "🇮🇹", label: "IT" },
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "de", flag: "🇩🇪", label: "DE" },
  { code: "fr", flag: "🇫🇷", label: "FR" },
  { code: "es", flag: "🇪🇸", label: "ES" },
]

export const Navbar: React.FC<NavbarProps> = ({
  mode = "home",
  privacyLang = "it",
  setPrivacyLang,
}) => {
  const { language, setLanguage, t } = useLanguage()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  // IntersectionObserver for active section highlight on homepage
  useEffect(() => {
    if (mode !== "home" || typeof window === "undefined") return

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
  }, [mode])

  // Navigation items for Home Mode
  const homeNavLinks = [
    { href: "#experience", id: "experience", label: t?.nav?.experience || "Esperienza", isExternal: false },
    { href: "#skills", id: "skills", label: t?.nav?.skills || "Competenze", isExternal: false },
    { href: "#bugbounty", id: "bugbounty", label: t?.nav?.bugbounty || "Bug Bounty", isExternal: false },
    { href: "#education", id: "education", label: t?.nav?.education || "Formazione", isExternal: false },
    { href: "#contact", id: "contact", label: t?.nav?.contact || "Contatti", isExternal: false },
    { href: "/gypso", id: "gypso", label: "GYPSO", isExternal: true, isBadge: true },
  ]

  // Navigation items for Gypso Mode
  const gypsoNavLinks = [
    { href: "#features", label: "Funzionalità", isExternal: false },
    { href: "#cad-preview", label: "Editor CAD", isExternal: false },
    { href: "#specs", label: "Specifiche", isExternal: false },
    { href: "/gypso/privacy", label: "Privacy Policy", isExternal: true },
    { href: "/gypso/terms", label: "Termini di Servizio", isExternal: true },
  ]

  // Navigation items for Privacy / Legal Mode
  const privacyNavLinks = [
    { href: "/gypso", label: "GYPSO Home", isExternal: true },
    { href: "/gypso/privacy", label: "Privacy Policy", isExternal: true },
    { href: "/gypso/terms", label: "Termini di Servizio", isExternal: true },
    { href: "/", label: "Portfolio", isExternal: true },
  ]

  // Navigation items for Allerta Italia Privacy / Legal Mode
  const allertaItaliaPrivacyNavLinks = [
    { href: "/allertaitalia/privacy", label: "Informativa Privacy", isExternal: true },
    { href: "/allertaitalia/terms", label: "Termini di Servizio", isExternal: true },
    { href: "/", label: "Portfolio", isExternal: true },
  ]

  return (
    <header className="site-nav">
      {/* Brand Logo / Name */}
      {mode === "home" ? (
        <Link to="/" className="site-nav-brand" onClick={closeMenu}>
          <div className="site-nav-logo-icon">
            <Shield size={18} />
          </div>
          <span>Antonio Squillace</span>
        </Link>
      ) : mode.startsWith("allertaitalia") ? (
        <Link to="/allertaitalia/privacy" className="site-nav-brand" onClick={closeMenu}>
          <div
            className="site-nav-logo-icon"
            style={{
              background: "rgba(255, 111, 0, 0.15)",
              borderColor: "rgba(255, 111, 0, 0.4)",
              color: "#ff9800",
            }}
          >
            <Shield size={18} />
          </div>
          <span style={{ fontFamily: "Outfit, sans-serif" }}>Allerta Italia</span>
        </Link>
      ) : (
        <Link to="/gypso" className="site-nav-brand" onClick={closeMenu}>
          <img src="/gypso-icon.png" alt="GYPSO Logo" className="site-nav-logo-img" />
          <span style={{ fontFamily: "Outfit, sans-serif" }}>GYPSO</span>
        </Link>
      )}

      {/* Desktop Navigation Links */}
      <nav className="site-nav-links desktop-only">
        {mode === "home" &&
          homeNavLinks.map(link =>
            link.isExternal ? (
              <Link
                key={link.href}
                to={link.href}
                className="site-nav-link"
                style={{ position: "relative" }}
              >
                <span>{link.label}</span>
                {link.isBadge && <span className="site-nav-badge">APP</span>}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={`site-nav-link${activeSection === link.id ? " active" : ""}`}
              >
                {link.label}
              </a>
            )
          )}

        {mode === "gypso" &&
          gypsoNavLinks.map(link =>
            link.isExternal ? (
              <Link key={link.href} to={link.href} className="site-nav-link">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="site-nav-link">
                {link.label}
              </a>
            )
          )}

        {mode === "gypso-privacy" &&
          privacyNavLinks.map(link => (
            <Link key={link.href} to={link.href} className="site-nav-link">
              {link.label}
            </Link>
          ))}

        {mode === "allertaitalia-privacy" &&
          allertaItaliaPrivacyNavLinks.map(link => (
            <Link key={link.href} to={link.href} className="site-nav-link">
              {link.label}
            </Link>
          ))}
      </nav>

      {/* Desktop Right Action */}
      <div className="site-nav-action desktop-only">
        {mode === "home" && (
          <button
            onClick={() => setLanguage(language === "it" ? "en" : "it")}
            className="site-nav-btn"
            title="Switch Language"
          >
            <Languages size={15} />
            <span>{language.toUpperCase()}</span>
          </button>
        )}

        {mode === "gypso" && (
          <Link to="/" className="site-nav-btn">
            <ArrowLeft size={15} />
            <span>Portfolio</span>
          </Link>
        )}

        {mode === "allertaitalia-privacy" && (
          <Link to="/" className="site-nav-btn">
            <ArrowLeft size={15} />
            <span>Portfolio</span>
          </Link>
        )}

        {(mode === "gypso-privacy" || mode === "allertaitalia-privacy") && setPrivacyLang && (
          <div className="site-nav-lang-group">
            {privacyLangsList.map(lang => (
              <button
                key={lang.code}
                onClick={() => setPrivacyLang(lang.code)}
                className={`site-nav-lang-btn${privacyLang === lang.code ? " active" : ""}`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="site-nav-mobile-toggle mobile-only"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content glass-card">
          {mode === "home" && (
            <>
              {homeNavLinks.map(link =>
                link.isExternal ? (
                  <Link key={link.href} to={link.href} onClick={closeMenu}>
                    {link.label} {link.isBadge && <span className="site-nav-badge">APP</span>}
                  </Link>
                ) : (
                  <a key={link.href} href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                )
              )}
              <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--glass-border)" }}>
                <button
                  onClick={() => {
                    setLanguage(language === "it" ? "en" : "it")
                    closeMenu()
                  }}
                  className="btn-outline"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <Languages size={18} />
                  <span>{language === "it" ? "English" : "Italiano"}</span>
                </button>
              </div>
            </>
          )}

          {mode === "gypso" && (
            <>
              {gypsoNavLinks.map(link =>
                link.isExternal ? (
                  <Link key={link.href} to={link.href} onClick={closeMenu}>
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.href} href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                )
              )}
              <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--glass-border)" }}>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="btn-outline"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <ArrowLeft size={18} />
                  <span>Torna al Portfolio</span>
                </Link>
              </div>
            </>
          )}

          {mode === "gypso-privacy" && (
            <>
              <Link to="/gypso" onClick={closeMenu}>
                GYPSO Home
              </Link>
              <Link to="/gypso/privacy" onClick={closeMenu}>
                Privacy Policy
              </Link>
              <Link to="/gypso/terms" onClick={closeMenu}>
                Termini di Servizio
              </Link>
              <Link to="/" onClick={closeMenu}>
                Torna al Portfolio
              </Link>
              {setPrivacyLang && (
                <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--glass-border)", display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" }}>
                  {privacyLangsList.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setPrivacyLang(lang.code)
                        closeMenu()
                      }}
                      className={`site-nav-lang-btn${privacyLang === lang.code ? " active" : ""}`}
                      style={{ padding: "8px 12px", fontSize: "0.9rem" }}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}

          {mode === "allertaitalia-privacy" && (
            <>
              <Link to="/allertaitalia/privacy" onClick={closeMenu}>
                Informativa Privacy
              </Link>
              <Link to="/allertaitalia/terms" onClick={closeMenu}>
                Termini di Servizio
              </Link>
              <Link to="/" onClick={closeMenu}>
                Torna al Portfolio
              </Link>
              {setPrivacyLang && (
                <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--glass-border)", display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" }}>
                  {privacyLangsList.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setPrivacyLang(lang.code)
                        closeMenu()
                      }}
                      className={`site-nav-lang-btn${privacyLang === lang.code ? " active" : ""}`}
                      style={{ padding: "8px 12px", fontSize: "0.9rem" }}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
