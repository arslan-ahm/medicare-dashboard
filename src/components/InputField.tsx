import React from "react";

type InputFieldProps = {
  name?: string;
  label?: string | React.ReactNode;
  placeholder?: string;
  fieldType?: string;
  inputType: "primary" | "secondary";
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  inputType = "secondary",
  fieldType = "text",
  value,
  setValue,
}) => {
  return (
    <div
      className={
        inputType == "primary"
          ? "flex flex-col items-start justify-center rounded-lg"
          : "flex flex-row-reverse gap-x-2 border-2 px-3 py-2 border-gray-300 rounded-md w-full"
      }
    >
      {label && (
        <span className={inputType == "primary" ? "text-sm" : "text-2xl"}>
          {label}
        </span>
      )}
      <input
        className={
          inputType == "primary"
            ? "border-b-2 outline-none border-slate-500 bg-transparent px-1 placeholder:text-gray-400"
            : "outline-none bg-transparent placeholder:text-gray-400"
        }
        placeholder="i.e. Jhon Doe"
        name={name}
        value={value}
        onChange={setValue}
        type={fieldType}
      />
    </div>
  );
};

export default InputField;
