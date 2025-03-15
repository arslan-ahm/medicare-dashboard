import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import Text from "@/components/Text";
import { useAppSelector } from "@/hooks/useRedux";

const FormHeader = () => {
  const doctor = useAppSelector((state) => state.auth.doctor);
  
  const formattedDate = new Date().toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "long",
  });

  const timeWithPeriod = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const APPOINTMENT_DETAILS = [
    {
      title: "Partictioner",
      subtitle: doctor?.name,
      icon: <FaUserDoctor />,
      bold_text: doctor?.specialization,
    },
    {
      title: "date and time",
      subtitle: formattedDate,
      icon: <FaBusinessTime />,
      bold_text: timeWithPeriod,
    },
    {
      title: "location",
      subtitle: "General clinic",
      icon: <FaMagnifyingGlassLocation />,
      bold_text: "Room 2",
    },
  ];
  return (
    <>
      {APPOINTMENT_DETAILS.map((option, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center space-x-4"
        >
          <div className="flex items-center justify-center ml-4 w-10 h-10 bg-primary rounded-full text-white">
            {option.icon}
          </div>
          <div className="text-center">
            <Text
              text={option.title}
              type="h5"
              className="text-primary capitalize mt-2"
            />
            {option.subtitle && (
              <Text text={option.subtitle} type="h6" className="text-md_gray" />
            )}
            {option.bold_text && (
              <Text
                text={option.bold_text}
                type="p"
                className="text-gray-400"
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default FormHeader;
