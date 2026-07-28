import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Education from "../components/Education"
import BugBounty from "../components/BugBounty"
import Contact from "../components/Contact"
import { LanguageProvider, useLanguage } from "../context/LanguageContext"

const PageContent: React.FC = () => {
  const { t } = useLanguage()
  return (
    <Layout>
      <Navbar mode="home" />
      <Hero />

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
