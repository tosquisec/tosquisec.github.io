/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { keyframes, css, jsx } from "@emotion/react";

// Animazioni esistenti: wave, upDown, upDownWide
const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`;

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`;

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`;

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`;

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`;

export function UpDown({ children }) {
  // Vecchio codice UpDown
  return (
    <div
      css={css`
        animation: ${upDownAnimation};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      {children}
    </div>
  );
}

export function UpDownWide({ children }) {
  // Vecchio codice UpDownWide
  return (
    <div
      css={css`
        animation: ${upDownWideAnimation};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      {children}
    </div>
  );
}

export function RainAndDissolve({ children }) {
  return (
    <div
      css={css`
        animation: ${rainAnimation};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      {children}
    </div>
  );
}
const rain = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  10% { opacity: 0.6; }
  90% { opacity: 0.6; }
  100% { transform: translateY(100%); opacity: 0; }
`;

const rainAnimation = css`
  position: absolute;
  animation: ${rain} 500s linear infinite; // Durata aumentata per rallentare la pioggia
`;

// ... [Componenti UpDown, UpDownWide, RainAndDissolve invariati] ...

const dropFall = keyframes`
  0% { transform: translateY(-100vh); opacity: 0; }
  30% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
`;

const splat = keyframes`
  0% { height: 0; opacity: 0.5; }
  50% { height: 15px; opacity: 0.5; }
  100% { height: 0; opacity: 0; }
`;

// Componente RainDrop modificato per accettare children
const RainDrop = ({ child }) => {
  const left = Math.random() * 100;
  const delay = Math.random() * -20;
  const duration = Math.random() * 5 + 2; // Durata aumentata

  const iconStyle = React.isValidElement(child) && child.props.size ? { width: child.props.size, height: child.props.size } : {};

  return (
    <div css={css`
      position: absolute;
      bottom: 100%;
      left: ${left}vw;
      opacity: 0;
      animation: ${dropFall} ${duration}s linear ${delay}s infinite;
    `}>
      {/* Applica lo stile aggiuntivo per le dimensioni dell'icona */}
      {React.cloneElement(child, { style: { ...iconStyle, position: 'absolute', bottom: 0 } })}
    </div>
  );
};

// Componente Rain
export const Rain = ({ children }) => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    // Creazione di un array con un numero uguale di elementi a `children`, se `children` è un array
    // Altrimenti, crea un array con un singolo elemento
    const childrenArray = React.Children.toArray(children);
    setDrops(Array.from({ length: childrenArray.length }, (_, index) => childrenArray[index]));
  }, [children]);

  return (
    <div css={css`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    `}>
      {drops.map((child, index) => (
        <RainDrop key={index} child={child} />
      ))}
    </div>
  );
};


export const waveAnimation = (length: string) => `${wave} ${length} linear infinite alternate`;