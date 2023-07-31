import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, name }) => { // Menyatakan tipe dari Input sebagai React functional component dengan properti InputProps.
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700"
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
