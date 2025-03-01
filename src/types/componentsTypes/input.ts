export type InputRowProps = {
    lable: string;
    value: string;
    setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    inputType: string;
    placeholder?: string;
    required?: boolean;
  };