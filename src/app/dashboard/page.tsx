import React from "react";
import TasksListSection from "@/components/(Sections)/Tasks";
import AppointmentChart from "@/components/chartHandlers/AppointmentChart";
import AppointmentSection from "@/components/(Sections)/appointmentList/AppointmentList";

const Page = () => {

  return (
    <>
      <div className="grid grid-cols-6 gap-4 pt-2">
        <AppointmentChart
          title="Offline Consultations"
          percentage="+20%"
          type="success"
          value="110"
          containerStyles="col-span-6 sm:col-span-3 lg:col-span-2"
        />
        <AppointmentChart
          title="Online Consultations"
          percentage="-15%"
          type="loss"
          value="65"
          containerStyles="col-span-6 sm:col-span-3 lg:col-span-2"
        />
        <AppointmentChart
          title="Total Patients"
          type="loss"
          value="155"
          containerStyles="col-span-6 lg:col-span-2"
        />

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
