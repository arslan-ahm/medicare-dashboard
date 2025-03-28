import React from "react";
import Text from "@/components/Text";
import { APPOINTMENT_DETAILS } from "@/constants/formData";
import useFormHeaderItem from "./useFormHeaderItem";

const FormHeader = () => {
  const { doctor, formattedDate, timeWithPeriod } = useFormHeaderItem();

  return (
    <>
      {APPOINTMENT_DETAILS.map((option, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center space-x-2 sm:space-x-4"
        >
          <div className="flex items-center justify-center ml-4 h-8 w-8 sm:w-10 sm:h-10 bg-primary rounded-full text-white">
            {option.icon}
          </div>
          <div className="text-center">
            <Text
              text={option.title}
              type="h5"
              className="text-primary capitalize mt-2"
            />
            {option?.subtitle && (
              <Text
                text={
                  option.subtitle === "doctorName"
                    ? doctor?.name || "N/A"
                    : option.subtitle === "formattedDate"
                    ? formattedDate || "N/A"
                    : option.subtitle || "N/A"
                }
                type="h6"
                className="text-sm sm:text-base text-md_gray"
              />
            )}
            {option?.bold_text && (
              <Text
                text={
                  option.subtitle === "doctorName"
                    ? doctor?.specialization || "N/A"
                    : option.subtitle === "formattedDate"
                    ? timeWithPeriod || "N/A"
                    : String(option.bold_text || "N/A")
                }
                type="p"
                className="text-gray-400 sm:inline-block hidden"
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default FormHeader;
