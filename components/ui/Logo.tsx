import React from 'react'

interface LogoProps {
    src: string;
  }
  
  const Logo: React.FC<LogoProps> = ({ src }) => {
    return (
      <div className="w-16 h-16 sm:w-12 sm:h-12 md:w-20 md:h-20 items-center justify-center p-2">
        <img src={src} alt="Logo" className="max-w-full max-h-full" />
      </div>
    );
  };
  
  export default Logo;