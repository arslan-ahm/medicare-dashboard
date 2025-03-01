import { RadioGroupProps } from "@/types/componentsTypes/radioGroup";


const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <>
      {options.map((option) => (
        <label
          key={option}
          className={`cursor-pointer px-4 py-2 border-2 rounded-md transition-colors duration-200 ${
            selectedValue === option
              ? "border-primary bg-primary text-white"
              : "border-gray-300"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={option}
            checked={selectedValue === option}
            onChange={onChange}
            className="hidden"
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default RadioGroup;