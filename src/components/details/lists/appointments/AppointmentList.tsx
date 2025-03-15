// import moment from "moment";
import React from "react";
import { useAppSelector } from "@/hooks/useRedux";
import ViewAllButton from "@/components/ViewAllButton";
import AppointmentListItem from "./AppointmentListItem";

const AppointmentTimeline = () => {
  const { appointments } = useAppSelector((store) => store.apponitments);
  // const todayDate = moment().format("YYYY-MM-DD");

  // const todayAppointments = appointments
  //   .filter(
  //     (appointment) =>
  //       moment(appointment.start_time, "YYYY-MM-DD HH:mm").format(
  //         "YYYY-MM-DD"
  //       ) === todayDate
  //   )
  //   .sort((a, b) =>
  //     moment(a.start_time, "YYYY-MM-DD HH:mm").diff(
  //       moment(b.start_time, "YYYY-MM-DD HH:mm")
  //     )
  //   );

  return (
    <div className="flex flex-col w-full max-w-lg py-2 px-3 sm:px-6 mx-auto bg-white rounded-lg">
      {appointments.length > 0 ? (
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
