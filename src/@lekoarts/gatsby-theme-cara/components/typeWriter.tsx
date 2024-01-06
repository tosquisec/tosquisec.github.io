import React, { useState, useRef, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import { jsx, useThemeUI } from "theme-ui";

type TypeWriterProps = {
  fontSize: string,
  speed: number,
  textSequence: Array<string | number>,
  repeat: string | number,
  cursor: boolean,
  preRenderFirstString: boolean,
  randColor?: boolean
}

const TypeWriter: React.FC<TypeWriterProps> = ({ fontSize, speed, textSequence, repeat, cursor, preRenderFirstString, randColor }) => {
  const [textColor, setTextColor] = useState('white');
  const context = useThemeUI();
  const defaultTextColor = context.theme.colors.text;
  const [dynamicFontSize, setDynamicFontSize] = useState(fontSize);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          const { width } = entry.contentRect;
          if (width < 400) { // Imposta il punto di rottura in base alle tue esigenze
            setDynamicFontSize('2em');
          } else {
            setDynamicFontSize(fontSize);
          }
        }
      });

      resizeObserver.observe(container);

      return () => resizeObserver.disconnect();
    }
  }, [fontSize]);

  const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

  const newTextSequence = [];
  textSequence.forEach((item, index) => {
    if (typeof item === 'string' && randColor) {
      newTextSequence.push(() => setTextColor(getRandomColor()), item);
    } else {
      newTextSequence.push(item);
    }
    if (typeof textSequence[index + 1] !== 'string') {
      newTextSequence.push(speed);
    }
  });

  return (
    <div ref={containerRef} style={{ maxWidth: '100%', overflowWrap: 'break-word' }}>
      <div
        style={{
          fontSize: dynamicFontSize,
          color: randColor ? textColor : defaultTextColor,
          display: 'inline-block'
        }}
      >
        <TypeAnimation
          preRenderFirstString={preRenderFirstString}
          cursor={cursor}
          sequence={newTextSequence}
          wrapper="span"
          repeat={repeat}
        />
      </div>
    </div>
  );
}

export default TypeWriter;
