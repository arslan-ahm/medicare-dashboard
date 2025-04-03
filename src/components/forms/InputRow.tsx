import { InputRowProps } from "@/types/componentsTypes/input";
import InputField from "../InputField";

const InputRow: React.FC<InputRowProps> = ({
  lable,
  value,
  setValue,
  name,
  inputType,
  placeholder = "",
  required = false,
}) => {
  return (
    <InputSection title={lable}>
      <InputField
        name={name}
        inputType="secondary"
        value={value}
        setValue={setValue}
        labelStyle="text-[13px]"
        placeholder={placeholder}
        required={required}
        fieldType={inputType}
        inputStyle="focus:border-primary"
      />
    </InputSection>
  );
};

export const InputSection: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between my-2 items-start sm:items-center gap-2">
      <div className="align-top font-medium pt-2 sm:px-8 ">{title}</div>
      <div className="w-full sm:w-[55%]">{children}</div>
    </div>
  );
};

export default InputRow;
