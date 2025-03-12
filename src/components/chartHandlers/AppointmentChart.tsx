import { FaArrowUp } from "react-icons/fa";
import Text from "../Text";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AppointmentChartProps } from "@/types/componentsTypes/appointmentCharts";

const AppointmentChart: React.FC<AppointmentChartProps> = ({
  title,
  value,
  percentage,
  type = "success",
  containerStyles,
  children,
}) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-4 flex flex-col gap-2 ${containerStyles}`}
    >
      <div className="flex items-center justify-between w-full">
        <Text text={title} type="h5" className="font-[600]" />
        <span className="text-black text-xl">
          <HiOutlineDotsHorizontal />
        </span>
      </div>
      <div>
        <div className="flex h-full w-full justify-between items-center">
          <div
            className={`flex h-full ${
              percentage ? "justify-end" : "justify-center"
            } gap-3 flex-col`}
          >
            <Text
              text={value}
              type="h2"
              className="text-gray-700 font-semibold"
            />
            {percentage && (
              <div className="flex items-center gap-3">
                <span
                  className={`flex items-center w-4 justify-center rounded-full p-[3px] ${
                    type === "success" ? "bg-green" : "bg-red"
                  }`}
                >
                  <FaArrowUp className="text-[10px] text-white" />
                </span>
                <Text
                  text={percentage}
                  type="span"
                  className={`${
                    type === "success" ? "text-green" : "text-red"
                  } font-bold`}
                />
              </div>
            )}
          </div>
          {children ? (
            <div className="w-[80%] h-full flex justify-end">{children}</div>
          ) : (
            <div className="bg-lime-100 w-32 h-32 rounded-full">{children}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentChart;
