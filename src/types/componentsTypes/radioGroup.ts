export type RadioGroupProps = {
  name: string;
  options: { label: string; value: string | number }[];
  selectedValue: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};