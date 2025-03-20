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

  // Group events by start time
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
        patientName: `Patient ${appt.patientName}`,
        location: appt.isOnline ? "Online" : "In-Person",
      },
    });
  });

  // Create a condensed list of events (showing only count)
  const events = Object.entries(groupedEvents).map(([start, appts]) => {
    if (appts.length === 1) {
      return appts[0];
    }
    return {
      id: `group-${start}`,
      title: `${appts.length} Appointments`, // Show count
      start,
      end: appts[0].end,
      extendedProps: { appointments: appts }, // Pass full event list
    };
  });

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-[10px] xs:text-sm md:text-lg font-semibold mb-4">
        Weekly & Monthly Schedule
      </h2>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={initialView}
          headerToolbar={{
            left: window.innerWidth < 768 ? "" : "prev,next today",
            center: "title",
            right: window.innerWidth < 768 ? "" : "dayGridMonth,timeGridWeek",
          }}
          slotMinTime="08:00:00"
          slotMaxTime="18:00:00"
          events={events}
          eventContent={RenderEventContent} // Custom render function for hover effect
          height="auto"
          contentHeight="auto"
          aspectRatio={1.5}
        />
      </div>
    </div>
  );
};

export default Calendar;
