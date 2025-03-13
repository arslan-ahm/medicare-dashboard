import React from "react";
import { useAppSelector } from "@/hooks/useRedux";
import AppointmentListItem from "./AppointmentListItem";

const AppointmentTimeline = () => {
  const { appointments } = useAppSelector((store) => store.apponitments);


  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <ul className="relative">
        { appointments.length > 0 ? appointments.map((appt, index) => {
          return (
            <li key={index} className="relative mb-4">
              <AppointmentListItem appt={appt} />
            </li>
          );
        }) : 
        <p className="text-center text-slate-600"> No Appointments Yet</p>
        }
      </ul>
    </div>
  );
};

export default AppointmentTimeline;
