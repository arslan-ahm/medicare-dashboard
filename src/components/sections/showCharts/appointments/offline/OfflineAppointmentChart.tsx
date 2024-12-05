"use client";

import dynamic from "next/dynamic";
import AppointmentChart from "@/components/ChartCotainer";
import useOfflineAppointmentChart from "./useOfflineAppointmentChart";

const LineChart = dynamic(
  () => import("@/components/charts/linechart/LineChart"),
  {
    ssr: false,
    loading: () => <div style={{ height: "100px" }} />,
  }
);

const OnfflineAppointmentChart = () => {
  const { percentage, loading, totalOfflineAppointments, weeklyOfflineData } =
    useOfflineAppointmentChart();

  return (
    <AppointmentChart
      title="Offline Consultations"
      percentage={percentage}
      loader={loading}
      type="success"
      value={totalOfflineAppointments.toString()}
      containerStyles="col-span-6 sm:col-span-3 lg:col-span-2"
    >
      <LineChart type="success" chartData={weeklyOfflineData} />
    </AppointmentChart>
  );
};

export default OnfflineAppointmentChart;
