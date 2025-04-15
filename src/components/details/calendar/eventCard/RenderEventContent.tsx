import dayjs from "dayjs";
import { EventContentArg } from "@fullcalendar/core";
import useRenderEventContent from "./useRenderEventContent";

const RenderEventContent = (eventInfo: EventContentArg) => {
  const { colors, extendedProps } = useRenderEventContent(eventInfo);

  return (
    <div
      className={`relative group w-full overflow-x-auto custom-scroll py-2 px-4 rounded-md text-xs font-medium ${colors.bg} ${colors.text}`}
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
