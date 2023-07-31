// src/components/Elements/Button.tsx
import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children = "...", className = "bg-blue-500" }) => {
  return (
    <button className={`h-10 px-6 font-semibold text-white rounded-md ${className}`} type="submit">
      {children}
    </button>
  );
};

export default Button;
