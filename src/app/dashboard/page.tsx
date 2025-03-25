import React from "react";
import { Metadata } from "next";
import TasksListSection from "@/components/sections/Tasks";
import AppointmentSection from "@/components/sections/appointmentList/AppointmentList";
import GenderChart from "@/components/sections/statusCharts/genderChart/GenderChart";
import OnlineAppointmentChart from "@/components/sections/statusCharts/appointments/online/OnlineAppointmentChart";
import OnfflineAppointmentChart from "@/components/sections/statusCharts/appointments/offline/OfflineAppointmentChart";

export const metadata: Metadata = {
  title: "Dashboard - Home",
  description: "Your dashboard home page.",
};


const Page = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 pt-2">
        <OnfflineAppointmentChart />
        <OnlineAppointmentChart />
        <GenderChart /> 

        <div className="bg-white shadow-sm p-4 order-last sm:order-none col-span-6 md:col-span-4">
          <TasksListSection />
        </div>
        <div className="bg-white shadow-sm p-4 col-span-6 md:col-span-2">
          <AppointmentSection />
        </div>
      </div>
    </>
  );
};

export default Page;
