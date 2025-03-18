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
      className={`inline-block p-2 rounded-md text-xs font-medium relative group ${colors.bg} ${colors.text}`}
    >
      <div
        className={`absolute hidden xs:inline-block top-[8px] left-[2px] w-1 h-[60%] rounded-full ${colors.border}`}
      />
      <div className="flex justify-between sm:px-2">
        <p className="font-bold hidden md:inline-block">{extendedProps.patientName}</p>
        <p>{dayjs(eventInfo.event.start).format("h:mm A")}</p>
      </div>

      <div
        className={`z-50 absolute left-0 top-full mt-2 w-48 p-3 shadow-lg rounded-md transition-opacity duration-300 ${colors.hoverBg} ${colors.text} hidden group-hover:inline-block`}
      >
        <p className="font-bold">{extendedProps.status}</p>
        <p>Patient: {extendedProps.patientName}</p>
        <p>Purpose: {eventInfo.event.title}</p>
        <p>
          Location: {extendedProps.location ? "Online" : extendedProps.location}
        </p>
        <p>Time: {dayjs(eventInfo.event.start).format("h:mm A")}</p>
      </div>

      <div className="sm:hidden">
        <p>{eventInfo.event.title}</p>
        <p>{extendedProps.patientName}</p>
      </div>
    </div>
  );
};

export default RenderEventContent;