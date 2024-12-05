"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import useLineChart from "./useLineChart";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = ({
  type,
  chartData,
}: {
  type: "success" | "loss";
  chartData: number[];
}) => {
  const { data, options } = useLineChart({ type, chartData });

  return <Line data={data} options={options} />;
};

export default LineChart;
