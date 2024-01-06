/** @jsx jsx */
import { jsx } from "theme-ui"
import { withPrefix } from "gatsby"
import { hidden } from "../styles/utils"

type IconType = "triangle" | "circle" | "arrowUp" | "upDown" | "box" | "hexa" | "cross"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | string
  size?: number // Aggiunta del nuovo parametro size
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}


const Svg = ({ icon, left, top, hiddenMobile = false, size = "64px" }: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      display: hiddenMobile ? hidden : `block`,
      left,
      top,
      width: size, // Usa la proprietà size per la larghezza
      height: size, // Usa la proprietà size anche per l'altezza
    }}  >
    <use href={withPrefix(`/icons.svg#${icon}`)} />
  </svg>
);


export default Svg
