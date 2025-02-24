import dayjs from "dayjs";
import { EventContentArg } from "@fullcalendar/core";

// Map status to Tailwind color classes
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
      className={`p-2 rounded-md text-xs font-medium relative group ${colors.bg} ${colors.text}`}
    >
      <div
        className={`absolute top-[8px] left-[2px] w-1 h-[60%] rounded-full ${colors.border}`}
      />

      <div className="flex justify-between px-2 z-10">
        <p className="font-bold">{extendedProps.status}</p>
        <p>{dayjs(eventInfo.event.start).format("h:mm A")}</p>
      </div>

      <div
        className={`absolute left-0 top-full mt-2 w-48 p-3 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[100] ${colors.hoverBg} ${colors.text}`}
      >
        <p className="font-bold">{extendedProps.status}</p>
        <p>Patient: {extendedProps.patientName}</p>
        <p>Purpose: {eventInfo.event.title}</p>
        <p>
          Location: {extendedProps.isOnline ? "Online" : extendedProps.location}
        </p>
        <p>Time: {dayjs(eventInfo.event.start).format("h:mm A")}</p>
      </div>
    </div>
  );
};

export default RenderEventContent;
