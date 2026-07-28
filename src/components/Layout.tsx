import React, { ReactNode } from "react"
import "../styles/global.css"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      {/* Cyber grid background */}
      <div className="bg-grid"></div>
      {/* Ambient blobs */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      <main className="container">
        {children}
      </main>
      <footer className="footer">
        <p className="footer-text">© {new Date().getFullYear()} Antonio Squillace</p>
      </footer>
    </div>
  )
}

export default Layout
