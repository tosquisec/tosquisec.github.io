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
        <div className="footer-socials">
          <a href="mailto:dev@tosqui.it" className="footer-social" title="Email" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
          <a href="https://t.me/tosquisec" target="_blank" rel="noopener noreferrer" className="footer-social" title="Telegram" aria-label="Telegram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.61l-1.9 8.94c-.14.64-.52.8-1.06.5l-2.9-2.14-1.4 1.35c-.15.15-.28.28-.58.28l.2-2.94 5.36-4.84c.23-.2-.05-.31-.35-.11L9.17 13.8 6.3 12.9c-.62-.2-.63-.63.13-.93l11.2-4.3c.52-.2.97.11.83.84z"/>
            </svg>
          </a>
          <a href="https://x.com/tosquisec" target="_blank" rel="noopener noreferrer" className="footer-social" title="X (Twitter)" aria-label="X (Twitter)">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} Antonio Squillace</p>
      </footer>
    </div>
  )
}

export default Layout
