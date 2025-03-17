import { InputFieldProps } from "@/types/componentsTypes/inputfield";
import React from "react";

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  inputType = "secondary",
  fieldType = "text",
  value,
  setValue,
  required = false,
  placeholder,
  labelStyle,
  inputStyle,
}) => {
  const defaultPlaceholder = placeholder
    ? placeholder
    : fieldType === "email"
    ? "i.e. Jhon@gmail.com"
    : fieldType === "password"
    ? "********"
    : name?.toLowerCase().includes("name")
    ? "Jhon Doe"
    : `Enter ${name}`;
  return (
    <div
      className={`rounded-md w-full
        ${
          inputType == "primary"
            ? "flex flex-col items-start justify-center"
            : "flex flex-row-reverse gap-x-2 border-2 px-3 py-2 border-gray-300"
        }
      `}
    >
      {label && (
        <span
          className={
            inputType == "primary" ? "text-sm " : "text-2xl " + labelStyle
          }
        >
          {label}
        </span>
      )}
      <input
        className={`w-full placeholder:text-md_gray ${inputStyle} ${
          inputType == "primary"
            ? "border-b outline-none border-black bg-transparent p-1"
            : "outline-none bg-transparent"
        }`}
        required={required}
        placeholder={defaultPlaceholder}
        name={name}
        value={
          value instanceof Date ? value.toISOString().split("T")[0] : value
        }
        onChange={setValue}
        type={fieldType}
      />
    </div>
  );
};

export default InputField;
