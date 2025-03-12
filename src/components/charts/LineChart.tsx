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
const LineChart = ({ type }: { type: "success" | "loss" }) => {
  const createGradient = (
    ctx: CanvasRenderingContext2D,
    type: "success" | "loss"
  ) => {
    const colors =
      type === "success"
        ? [
            "rgba(39, 174, 96, 1)",
            "rgba(39, 174, 96, 0.2)",
            "rgba(39, 174, 96, 0)",
          ]
        : [
            "rgba(235, 87, 87, 1)",
            "rgba(235, 87, 87, 0.2)",
            "rgba(235, 87, 87, 0)",
          ];

    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(0.3, colors[1]);
    gradient.addColorStop(1, colors[2]);

    return gradient;
  };

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Online Consultations",
        data: [96, 120, 85, 140, 100, 115, 80],
        borderColor:
          type === "success" ? "rgb(39, 174, 96)" : "rgb(235, 87, 87)",
        borderWidth: 2,
        fill: true,
        backgroundColor: (context: {
          chart: { ctx: CanvasRenderingContext2D };
        }) => {
          return createGradient(context.chart.ctx, type);
        },
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        mode: "index" as const,
        intersect: false,
      },
    },
    interaction: {
      mode: "index" as const,
      axis: "x" as const,
      intersect: false,
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
