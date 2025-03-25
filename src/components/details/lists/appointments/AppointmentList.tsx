import React from "react";
import ViewAllButton from "@/components/ViewAllButton";
import AppointmentListItem from "./item/AppointmentListItem";
import LoaderScreen from "@/components/loader/LoaderScreen";
import useAppoitmentList from "./useAppointmentList";

const AppointmentTimeline = () => {
  const { loading, appointments } = useAppoitmentList();
  return (
    <div className="flex flex-col w-full max-w-lg py-2 px-3 sm:px-6 mx-auto bg-white rounded-lg">
      {loading ? (
        <>
          <LoaderScreen size={10} />
        </>
      ) : appointments.length > 0 ? (
        <div className="space-y-4">
          <ViewAllButton path="/dashboard/schedule" subtext="View all" />
          <ul className="relative flex flex-col gap-2 ">
            {appointments.map((appt, index) => {
              return (
                <li key={index} className="relative mb-4">
                  <AppointmentListItem appt={appt} />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p className="text-center text-slate-600"> No Appointments Yet</p>
      )}
    </div>
  );
};

export default AppointmentTimeline;
