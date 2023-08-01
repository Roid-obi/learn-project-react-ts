import React, { useState } from 'react';

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await onClick();
    setIsLoading(false);
  };

  const buttonStyle = {
    opacity: isLoading ? 0.7 : 1, //styled component
  };

  return (
    <button onClick={handleClick} disabled={isLoading} style={buttonStyle}>
      {isLoading ? 'Loading...' : 'Get Random Images'}
    </button>
  );
};

export default Button;
