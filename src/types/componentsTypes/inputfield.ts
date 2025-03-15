export type InputFieldProps = {
    name?: string;
    label?: string | React.ReactNode;
    placeholder?: string;
    fieldType?: string;
    inputType: "primary" | "secondary";
    value: string | Date;
    required?: boolean;
    setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    labelStyle?: string;
    inputStyle?: string;
};