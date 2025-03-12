"use client";

import dynamic from "next/dynamic";
import AppointmentChart from "@/components/chartHandlers/AppointmentChart";

const LineChart = dynamic(() => import("@/components/charts/LineChart"), {
  ssr: false,
  loading: () => <div style={{ height: "100px" }} />,
});

const OnfflineAppointmentChart = () => {
  return (
    <AppointmentChart
      title="Offline Consultations"
      percentage="25%"
      type="success"
      value="85"
      containerStyles="col-span-6 sm:col-span-3 lg:col-span-2"
    >
      <LineChart type="success" />
    </AppointmentChart>
  );
};

export default OnfflineAppointmentChart;
