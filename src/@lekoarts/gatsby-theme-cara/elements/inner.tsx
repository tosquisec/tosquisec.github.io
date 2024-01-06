/** @jsx jsx */
import { jsx } from "theme-ui"

type InnerProps = {
  className?: string
  children: React.ReactNode
}

const Inner = ({ className = ``, children }: InnerProps) => (
  <div sx={{ 
    width: [`full`, `full`, `full`, `full`, `full`, `full`], 
    textAlign: `center` 
  }} 
    className={className}>
    {children}
  </div>
)

export default Inner
