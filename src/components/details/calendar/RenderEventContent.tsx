import dayjs from "dayjs";
import { EventContentArg } from "@fullcalendar/core";
import { Appointment } from "@/types/slices/appointment";

const STATUS_COLORS: Record<
  string,
  { text: string; bg: string; border: string; hoverBg: string }
> = {
  Pending: {
    text: "text-red",
    bg: "bg-md_varient_red",
    border: "bg-red",
    hoverBg: "bg-light_varient_red",
  },
  Completed: {
    text: "text-green",
    bg: "bg-md_varient_green",
    border: "bg-green",
    hoverBg: "bg-light_varient_green",
  },
  InProgress: {
    text: "text-blue",
    bg: "bg-md_varient_blue",
    border: "bg-blue",
    hoverBg: "bg-light_varient_blue",
  },
  Rescheduled: {
    text: "text-yellow",
    bg: "bg-md_varient_yellow",
    border: "bg-yellow",
    hoverBg: "bg-light_varient_yellow",
  },
};

const RenderEventContent = (eventInfo: EventContentArg) => {
  const { extendedProps } = eventInfo.event;
  const colors = STATUS_COLORS[extendedProps.status] || STATUS_COLORS.Pending;

  return (
    <div
      className={`relative group inline-block p-2 rounded-md text-xs font-medium ${colors.bg} ${colors.text}`}
    >
      {/* Left Border Indicator */}
      <div
        className={`absolute hidden xs:inline-block top-[8px] left-[2px] w-1 h-[60%] rounded-full ${colors.border}`}
      />

      {/* Show only event count by default */}
      <p className="font-bold text-center">{eventInfo.event.title}</p>

      {/* Hover Effect: Show Full Details */}
      <div
        className={`absolute left-0 top-full z-50 hidden group-hover:block w-56 p-3 shadow-lg rounded-md transition-opacity duration-300 ${colors.hoverBg} ${colors.text}`}
      >
        {extendedProps.appointments ? (
          <>
            <p className="font-bold">
              {extendedProps.appointments.length} Appointments
            </p>
            {extendedProps.appointments.map(
              (appt: Appointment, index: number) => (
                <div key={index} className="mt-2 p-2 border-b last:border-none">
                  <p>
                    <b>Patient:</b> {appt.patientName}
                  </p>
                  <p>
                    <b>Purpose:</b> {appt.purpose}
                  </p>
                  <p>
                    <b>Location:</b> {appt.isOnline}
                  </p>
                  <p>
                    <b>Time:</b> {dayjs(appt.start_time).format("h:mm A")}
                  </p>
                </div>
              )
            )}
          </>
        ) : (
          <>
            <p className="font-bold">{extendedProps.status}</p>
            <p>Patient: {extendedProps.patientName}</p>
            <p>Purpose: {eventInfo.event.title}</p>
            <p>Location: {extendedProps.location}</p>
            <p>Time: {dayjs(eventInfo.event.start).format("h:mm A")}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default RenderEventContent;
