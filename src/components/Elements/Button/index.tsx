// src/components/Elements/Button.tsx
import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
}

const Buttonl = styled.button`
  background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
`

const Button: React.FC<ButtonProps> = ({ children = "...", className = "bg-slate-500" }) => {
  return (
    <Buttonl className={`h-10 px-6 font-semibold text-white rounded-md ${className}`} type="submit">
      {children}
    </Buttonl>
  );
};

export default Button;
