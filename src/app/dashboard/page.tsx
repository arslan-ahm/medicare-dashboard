import React from "react";
import TasksListSection from "@/components/(sections)/Tasks";
import AppointmentSection from "@/components/(sections)/appointmentList/AppointmentList";
import GenderChart from "@/components/(sections)/showCharts/GenderChart";
import OnlineAppointmentChart from "@/components/(sections)/showCharts/OnlineAppointmentChart";
import OnfflineAppointmentChart from "@/components/(sections)/showCharts/OfflineAppointmentChart";

const Page = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 pt-2">
        <OnfflineAppointmentChart />
        <OnlineAppointmentChart />
        <GenderChart />

        <div className="bg-white shadow-sm p-4 order-last sm:order-none col-span-6 sm:col-span-4">
          <TasksListSection />
        </div>
        <div className="bg-white shadow-sm p-4 col-span-6 sm:col-span-2">
          <AppointmentSection />
        </div>
      </div>
    </>
  );
};

export default Page;
