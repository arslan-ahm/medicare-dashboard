"use client";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import RenderEventContent from "./RenderEventContent";
import { CalendarEvent } from "@/types/componentsTypes/calender";
import { useAppSelector } from "@/hooks/useRedux";

const Calendar: React.FC = () => {
  const { appointments } = useAppSelector((state) => state.apponitments);
  const [initialView, setInitialView] = useState<string>("dayGridMonth");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setInitialView("timeGridWeek");
      } else {
        setInitialView("dayGridMonth");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const events = appointments.map(
    (appt): CalendarEvent => ({
      id: appt.id,
      title: appt.purpose,
      start: dayjs(`${appt.start_time}`).toISOString(),
      end: dayjs(`${appt.end_time}`).toISOString(),
      color: "transparent",
      extendedProps: {
        status: appt.status,
        patientName: `Patient ${appt.patientName}`,
        location: appt.isOnline ? "Online" : "In-Person",
      },
    })
  );

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-[10px] xs:text-sm md:text-lg font-semibold mb-4">
        Weekly & Monthly Schedule
      </h2>
      <div className="relative overflow-x-auto max-w-[82vw] xs:max-w-[85vw] min-[485px]:max-w-[95vw] md:max-w-[90vw] custom-scroll w-full h-[calc(100vh-150px)]">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={initialView}
          headerToolbar={{
            left: window.innerWidth < 768 ? "" : "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek",
          }}
          slotMinTime="08:00:00"
          slotMaxTime="18:00:00"
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
