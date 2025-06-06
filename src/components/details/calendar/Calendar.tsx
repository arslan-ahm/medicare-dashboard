"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import RenderEventContent from "./eventCard/RenderEventContent";
import useCalender from "./useCalender";

const Calendar: React.FC = () => {
  const { events, initialView } = useCalender();

  return (
    <div className="bg-white w-full p-4 rounded-md shadow-md">
      <h2 className="text-[10px] xs:text-sm md:text-lg font-semibold mb-4">
        Weekly & Monthly Schedule
      </h2>
      <div className="w-full">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={initialView}
          headerToolbar={{
            left:
              typeof window !== "undefined" && window.innerWidth < 530
                ? ""
                : "prev,next today",
            center: "title",
            right:
              typeof window !== "undefined" && window.innerWidth < 768
                ? ""
                : "dayGridMonth,timeGridWeek",
          }}
          slotMinTime="08:00:00"
          slotMaxTime="18:00:00"
          dayMaxEventRows={
            typeof window !== "undefined" && window.innerWidth < 768 ? 0 : 1
          }
          events={events}
          eventContent={RenderEventContent}
          height="auto"
          contentHeight="auto"
          aspectRatio={1.5}
        />
      </div>
    </div>
  );
};

export default Calendar;
