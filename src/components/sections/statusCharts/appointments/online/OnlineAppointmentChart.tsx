"use client";

import dynamic from "next/dynamic";
import AppointmentChart from "@/components/ChartCotainer";
import useOnlineAppointmentChart from "./useOnlineAppointmentChart";

const LineChart = dynamic(
  () => import("@/components/charts/linechart/LineChart"),
  {
    ssr: false,
    loading: () => <div style={{ height: "100px" }} />,
  }
);

const OnlineAppointmentChart = () => {
  const { percentage, loading, totalAppointments, weeklyData } =
    useOnlineAppointmentChart();

  return (
    <AppointmentChart
      title="Online Consultations"
      percentage={percentage}
      loader={loading}
      type="loss"
      value={totalAppointments.toString()}
      containerStyles="col-span-6 sm:col-span-3 lg:col-span-2"
    >
      <LineChart type="loss" chartData={weeklyData} />
    </AppointmentChart>
  );
};

export default OnlineAppointmentChart;
