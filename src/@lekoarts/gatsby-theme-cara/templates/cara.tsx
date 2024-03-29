import * as React from "react"
import type { HeadFC } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Seo from "../components/seo"
import ThemeToggle from "../components/light_dark_toggle"

const Cara = () => (
  <Layout>
    
    <Parallax pages={3}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={1} />
      <Contact offset={2} factor={1} />
    </Parallax>
    <ThemeToggle/>
  </Layout>
)

export default Cara

export const Head: HeadFC = () => <Seo />
