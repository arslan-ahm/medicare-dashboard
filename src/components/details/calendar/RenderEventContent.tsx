import dayjs from "dayjs";
import { EventContentArg } from "@fullcalendar/core";

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
      className={`relative group w-full py-2 px-4 rounded-md text-xs font-medium ${colors.bg} ${colors.text}`}
    >
      <div
        className={`absolute top-[25%] left-[2px] w-1 h-[60%] rounded-full ${colors.border}`}
      />
      <p className="font-bold text-center">{eventInfo.event.title}</p>
      <p className="font-bold">{extendedProps.status}</p>
      <p>Patient: {extendedProps.patientName}</p>
      <p>Purpose: {eventInfo.event.title}</p>
      <p>Location: {extendedProps.location}</p>
      <p>Time: {dayjs(eventInfo.event.start).format("h:mm A")}</p>
    </div>
  );
};

export default RenderEventContent;
