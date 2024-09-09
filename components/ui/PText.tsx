import React from 'react';

interface PTextProps {
  text: string;
  colorMap: { [segment: string]: string }; // Mapeamento de segmentos para classes Tailwind CSS
  className?: string; // Adiciona a propriedade className opcion
}

const PText: React.FC<PTextProps> = ({ text, colorMap, className}) => {
  // Dividir o texto com base nas chaves do colorMap
  const parts = Object.keys(colorMap).reduce<string[]>((acc, segment) => {
    return acc.flatMap((part) =>
      part.split(segment).flatMap((subPart, i, arr) =>
        i < arr.length - 1 ? [subPart, segment] : [subPart]
      )
    );
  }, [text]);

  return (
    <p className={className}>
      {parts.map((part, index) => (
        <span
          key={index}
          className={colorMap[part] || ''} // Aplica a classe do colorMap
        >
          {part}
        </span>
      ))}
    </p>
  );
};

export default PText;