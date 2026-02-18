import React, { ReactNode } from "react"
import "../styles/global.css"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      <main className="container">
        {children}
      </main>
      <footer style={{ textAlign: "center", padding: "40px", opacity: 0.6 }}>
        <p>© {new Date().getFullYear()} Antonio Squillace. Built with Gatsby.</p>
      </footer>
    </div>
  )
}

export default Layout
