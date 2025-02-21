"use client";

import React, { useEffect } from "react";
import { getSession } from "next-auth/react";
import AppointmentChart from "@/components/chartHandlers/AppointmentChart";
import ListHeader from "@/components/details/lists/ListHeader";
import TasksList from "@/components/details/lists/TasksList";

const Page = () => {
  useEffect(() => {
    async function fetchSession() {
      try {
        const session = await getSession();
        console.log("Session =>", session);
      } catch (error) {
        console.error("Error =>", error);
      }
    }
    fetchSession();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 pt-2">
      <AppointmentChart
        title="Offline Consultations"
        percentage="+20%"
        type="success"
        value="110"
      />
      <AppointmentChart
        title="Online Consultations"
        percentage="-15%"
        type="loss"
        value="65"
      />
      <AppointmentChart title="Total Patients" type="loss" value="155" />

      <div className="bg-white shadow-sm p-4 col-span-2">
        <ListHeader
          title="Tasks"
          subtext="New Tasks"
          handleClick={() => console.log("Add Task clicked...")}
        />
        <div className="max-h-[40vh] overflow-y-auto custom-scroll px-2">
          <TasksList />
        </div>
      </div>
      <div className="bg-yellow"></div>
    </div>
  );
};

export default Page;
