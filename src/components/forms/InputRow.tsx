import InputField from "../InputField";

type InputRowProps = {
  lable: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  inputType: string;
  placeholder?: string;
  required?: boolean;
};

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
    <tr>
      <td className="align-top pt-2 px-2">{title}</td>
      <td>{children}</td>
    </tr>
  );
};

export default InputRow;
