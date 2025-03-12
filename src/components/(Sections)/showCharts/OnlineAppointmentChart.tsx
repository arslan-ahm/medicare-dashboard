"use client";

import dynamic from "next/dynamic";
import AppointmentChart from "@/components/chartHandlers/AppointmentChart";

const LineChart = dynamic(() => import("@/components/charts/LineChart"), {
  ssr: false,
  loading: () => <div style={{ height: "100px" }} />,
});

const OnlineAppointmentChart = () => {
  return (
    <AppointmentChart
      title="Online Consultations"
      percentage="-5%"
      type="loss"
      value="15"
      containerStyles="col-span-6 sm:col-span-3 lg:col-span-2"
    >
        <LineChart type="loss" />
    </AppointmentChart>
  );
};

export default OnlineAppointmentChart;
