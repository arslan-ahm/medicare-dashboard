"use client";
import React from "react";
import dynamic from "next/dynamic";
import AppointmentChart from "@/components/ChartCotainer";
import { useAppSelector } from "@/hooks/useRedux";

const DoughnutChart = dynamic(() => import("@/components/charts/Donout"), {
  ssr: false,
});

const GenderChart = () => {
  const { patients, loading } = useAppSelector((state) => state.patients);
  const totalPatients = patients.length;
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
