import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import { LanguageProvider } from "../context/LanguageContext"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <LanguageProvider>
      <Layout>
        <div style={{ textAlign: "center", padding: "100px 20px" }}>
          <h1 style={{ fontSize: "4rem", marginBottom: "2rem" }}>404</h1>
          <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Page not found / Pagina non trovata</p>
          <Link to="/" className="glass-card" style={{ padding: "1rem 2rem", textDecoration: "none", color: "var(--accent-primary)" }}>
            Go Home / Torna alla Home
          </Link>
        </div>
      </Layout>
    </LanguageProvider>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
