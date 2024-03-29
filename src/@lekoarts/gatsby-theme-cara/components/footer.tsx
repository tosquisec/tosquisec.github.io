/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx, useThemeUI } from "theme-ui";

// CSS Styles adapted from: https://codepen.io/aaroniker/pen/KGpXZo
const iconBaseStyles = {
  position: `absolute`,
  width: `24px`,
  height: `24px`,
  borderRadius: `50%`,
  transition: `all 0.45s ease`,
  "&:before": {
    content: `""`,
    position: `absolute`,
    right: `-9px`,
    top: `-9px`,
    height: `24px`,
    width: `24px`,
    transition: `transform 0.45s ease`,
    borderRadius: `50%`,
  },
  "&:after": {
    content: `""`,
    width: `8px`,
    height: `8px`,
    borderRadius: `50%`,
    margin: `-4px 0 0 -4px`,
    position: `absolute`,
    top: `50%`,
    left: `50%`,
    transition: `all 0.35s ease`,
    boxShadow: (t) =>
      `0 -23px 0 ${t.colors.toggleIcon}, 0 23px 0 ${t.colors.toggleIcon}, 23px 0 0 ${t.colors.toggleIcon}, -23px 0 0 ${t.colors.toggleIcon}, 15px 15px 0 ${t.colors.toggleIcon}, -15px 15px 0 ${t.colors.toggleIcon}, 15px -15px 0 ${t.colors.toggleIcon}, -15px -15px 0 ${t.colors.toggleIcon}`,
  },
} as const;

const buttonBaseStyles = {
  opacity: 0.65,
  position: `relative`,
  borderRadius: `4px`,
  width: `40px`,
  height: `25px`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  transition: `opacity 0.3s ease`,
  border: `none`,
  outline: `none`,
  background: `none`,
  cursor: `pointer`,
  padding: 0,
  appearance: `none`,
  "&:hover, &:focus": { opacity: 1 },
} as const;

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode<"light" | "dark">();
  const isDark = colorMode === `dark`;
  const { theme } = useThemeUI();

  return (
    <Box as="footer" variant="footer">
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </Flex>
    </Box>
  );
};

export default Footer;
