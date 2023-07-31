import React from "react";
import Label from "./Label";
import Input from "./Input"; // Memastikan nama file "Input.tsx" sesuai dengan konvensi penamaan TypeScript.

interface InputFormProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const InputForm: React.FC<InputFormProps> = ({ label, name, type, placeholder }) => { // Menyatakan tipe dari InputForm sebagai React functional component dengan properti InputFormProps.
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
