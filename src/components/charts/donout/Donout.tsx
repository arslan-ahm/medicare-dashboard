"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import useDonout from "./useDonout";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const { femaleCount, maleCount, data, options } = useDonout();

  return (
    <div className="relative w-36 h-36">
      <Doughnut data={data} options={options} className="z-10" />
      <div
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 
   flex flex-col items-center justify-center text-gray-700 w-16 h-16 text-sm 
   pointer-events-none z-[1]"
      >
        <p>
          {femaleCount} <span className="text-red">Female</span>
        </p>
        <p>
          {maleCount} <span className="text-blue">Male</span>
        </p>
      </div>
    </div>
  );
};

export default DoughnutChart;
