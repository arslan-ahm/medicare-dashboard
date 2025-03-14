import React from "react";
import { useAppSelector } from "@/hooks/useRedux";
import ViewAllButton from "@/components/ViewAllButton";
import AppointmentListItem from "./AppointmentListItem";

const AppointmentTimeline = () => {
  const { appointments } = useAppSelector((store) => store.apponitments);

  return (
    <div className="flex flex-col gap-2 w-full max-w-lg pt-2 px-6 mx-auto bg-white shadow-md rounded-lg">
      <ViewAllButton path="/dashboard/schedule" subtext="View all" />
      <ul className="relative">
        {appointments.length > 0 ? (
          appointments.map((appt, index) => {
            return (
              <li key={index} className="relative mb-4">
                <AppointmentListItem appt={appt} />
              </li>
            );
          })
        ) : (
          <p className="text-center text-slate-600"> No Appointments Yet</p>
        )}
      </ul>
    </div>
  );
};

export default AppointmentTimeline;
