"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useAppSelector } from "@/hooks/useRedux";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const { patients } = useAppSelector((state) => state.patients);

  const maleCount = patients.filter(
    (patient) => patient.gender.toLowerCase() === "male"
  ).length;

  const femaleCount = patients.filter(
    (patient) => patient.gender.toLowerCase() === "female"
  ).length;

  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [maleCount, femaleCount],
        backgroundColor: ["rgb(47 128 237)", "rgb(235 87 87)"],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        mode: "nearest" as const,
        intersect: false,
        // Add z-index to tooltip
        z: 9999,
      },
    },
    cutout: "75%",
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: true,
    },
  };

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
