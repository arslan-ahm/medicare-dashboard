import React from "react";
import { CustomSelectProps } from "@/types/componentsTypes/customSelect";

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  value,
  onChange,
  options,
  id,
}) => {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        required
        className="mt-1 block w-full px-4 py-[10px] border-2 border-gray-300 rounded-md shadow-sm 
        bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
        sm:text-sm transition duration-200 ease-in-out hover:border-blue-400 cursor-pointer appearance-none"
      >
        <option value="" disabled className="text-gray-400">
          Select Specialization
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-gray-700"
          >
            {option.label}
          </option>
        ))}
      </select>

      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomSelect;
