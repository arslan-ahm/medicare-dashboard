"use client";
import React from "react";
import dynamic from "next/dynamic";
import AppointmentChart from "@/components/chartHandlers/AppointmentChart";
import { useAppSelector } from "@/hooks/useRedux";

const DoughnutChart = dynamic(() => import("@/components/charts/Donout"), {
  ssr: false,
});

const GenderChart = () => {
    const totalPatients = useAppSelector((state) => state.patients.patients.length);
  return (
    <>
      <AppointmentChart
        title="Total Patients"
        value={String(totalPatients)}
        containerStyles="col-span-6 lg:col-span-2"
      >
        <DoughnutChart />
      </AppointmentChart>
    </>
  );
};

export default GenderChart;
