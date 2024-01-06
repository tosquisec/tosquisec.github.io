/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import ThemeToggle from "./light_dark_toggle";

type WindowProps = {
  link?: string;
  title: string;
  children: React.ReactNode;
  bg?: string;
  size?: { width?: string | number; height?: string | number } | string | number; // Nuova proprietà size
};

const Window = ({ link, title, children, bg, size }: WindowProps) => {
  const [colorMode] = useColorMode();
  const isDark = colorMode === 'dark';

  // Funzione per calcolare la dimensione del componente in base alla proprietà size
  const computeSize = (size) => {
    if (typeof size === 'object') {
      return { width: size.width || '60%', height: size.height || 'auto' };
    } else {
      return { width: size || '60%', height: size || 'auto' };
    }
  };

  const { width, height } = computeSize(size);

  const cardStyle = {
    width, // Imposta larghezza
    height, // Imposta altezza
    boxShadow: `0 10px 30px rgba(0, 0, 0, 0.2)`,
    position: `relative`,
    textDecoration: `none`,
    borderRadius: `10px`,
    overflow: `hidden`,
    background: bg || (isDark ? `#1c1c1c` : `white`),
    cursor: link ? 'pointer' : 'default',
    "&:hover": link ? { transform: `translateY(-5px)` } : {},
    margin: 'auto',
    marginTop: '50px',
  };

  return (
    <div
      sx={cardStyle}
      onClick={link ? () => window.open(link, '_blank') : undefined}
      role={link ? 'button' : undefined}
      aria-pressed={link ? 'false' : undefined}
    >
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          background: isDark ? `#2c2c2c` : `#e2e2e2`,
          borderBottom: `1px solid ${isDark ? `#333` : `#ccc`}`,
          padding: `8px 12px`,
          position: 'relative',
          height: '32px',
          "::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "12px",
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#ff5f56",
            boxShadow: `16px 0 0 #ffbd2e, 32px 0 0 #27c93f`,
            transform: 'translateY(-50%)',
          },
        }}
      >
        <span sx={{ ml: '60px', fontSize: 2, fontWeight: 'bold', color: isDark ? `white` : `black` }}>{title}</span>
      </div>
      <div
        sx={{
          wordWrap: 'break-word', // Aggiunto per far andare a capo il testo
          padding: `20px`,
          fontSize: [1, 2],
          color: isDark ? `white` : `black`,
          lineHeight: 1.25,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Window;