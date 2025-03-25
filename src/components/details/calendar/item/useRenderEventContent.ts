import { STATUS_COLORS } from "@/constants/colors";
import { EventContentArg } from '@fullcalendar/core';

const useRenderEventContent = (eventInfo: EventContentArg) => {
  const { extendedProps } = eventInfo.event;
  const colors = STATUS_COLORS[extendedProps.status] || STATUS_COLORS.Pending;

  return { colors, extendedProps };
};

export default useRenderEventContent;
