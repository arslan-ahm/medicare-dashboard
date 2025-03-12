import React from "react";
import TasksListSection from "@/components/(Sections)/Tasks";
import AppointmentSection from "@/components/(Sections)/appointmentList/AppointmentList";
import GenderChart from "@/components/(Sections)/showCharts/GenderChart";
import OnlineAppointmentChart from "@/components/(Sections)/showCharts/OnlineAppointmentChart";
import OnfflineAppointmentChart from "@/components/(Sections)/showCharts/OfflineAppointmentChart";
// import OnlineAppointmentChart from "@/components/(Sections)/showCharts/OnlineAppointmentChart";

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
