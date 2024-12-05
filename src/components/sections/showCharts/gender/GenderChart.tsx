"use client";
import React from "react";
import dynamic from "next/dynamic";
import AppointmentChart from "@/components/ChartCotainer";
import useGenderChart from "./useGenderChart";

const DoughnutChart = dynamic(
  () => import("@/components/charts/donout/Donout"),
  {
    ssr: false,
  }
);

const GenderChart = () => {
  const { loading, totalPatients } = useGenderChart();
  return (
    <>
      <AppointmentChart
        title="Total Patients"
        loader={loading}
        value={String(totalPatients)}
        containerStyles="col-span-6 lg:col-span-2"
      >
        <DoughnutChart />
      </AppointmentChart>
    </>
  );
};

export default GenderChart;
