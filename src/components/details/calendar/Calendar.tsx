"use client";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarEvent } from "@/types/componentsTypes/calender";
import { useAppSelector } from "@/hooks/useRedux";
import RenderEventContent from "./RenderEventContent";

const Calendar: React.FC = () => {
  const { appointments } = useAppSelector((state) => state.apponitments);
  const [initialView, setInitialView] = useState<string>("dayGridMonth");

  useEffect(() => {
  if (typeof window === "undefined") return;

  const handleResize = () => {
    setInitialView(window.innerWidth < 768 ? "timeGridWeek" : "dayGridMonth");
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  const groupedEvents: Record<string, CalendarEvent[]> = {};

  appointments.forEach((appt) => {
    const startTime = dayjs(appt.start_time).toISOString();
    if (!groupedEvents[startTime]) {
      groupedEvents[startTime] = [];
    }
    groupedEvents[startTime].push({
      id: appt.id,
      title: appt.purpose,
      start: startTime,
      end: dayjs(appt.end_time).toISOString(),
      color: "transparent",
      extendedProps: {
        status: appt.status,
        patientName: `${appt.patientName}`,
        location: appt.isOnline ? "Online" : "In-Person",
      },
    });
  });

  const events = Object.entries(groupedEvents).map(([start, appts]) => {
    if (appts.length === 1) {
      return appts[0];
    }
    return {
      id: `group-${start}`,
      title: `${appts.length} Appointments`,
      start,
      end: appts[0].end,
      extendedProps: { appointments: appts },
    };
  });

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
            left: typeof window !== "undefined" && window.innerWidth < 450 ? "" : "prev,next today",
            center: "title",
            right: typeof window !== "undefined" && window.innerWidth < 768 ? "" : "dayGridMonth,timeGridWeek",
          }}
          slotMinTime="08:00:00"
          slotMaxTime="18:00:00"
          dayMaxEventRows={1}
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
