"use client";
import React from "react";
import dayjs from "dayjs";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import RenderEventContent from "./RenderEventContent";
import { CalendarEvent, CalendarProps } from "@/types/componentsTypes/calender";

const Calendar: React.FC<CalendarProps> = ({ appointments }) => {
  const events = appointments.map(
    (appt): CalendarEvent => ({
      id: appt.id,
      title: appt.purpose,
      start: dayjs(`${appt.date}T${appt.time}`).toISOString(),
      end: dayjs(`${appt.date}T${appt.time}`)
        .add(appt.duration, "minute")
        .toISOString(),
      color: "transparent",
      extendedProps: {
        status: appt.status,
        patientName: `Patient ${appt.patientId}`,
        location: appt.location,
        isOnline: appt.isOnline,
      },
    })
  );

  const getInitialView = () => {
    return window.innerWidth < 768 ? "timeGridWeek" : "dayGridMonth"; // Default to month view on larger screens
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Weekly & Monthly Schedule</h2>
      <div className="overflow-x-auto overflow-y-hidden w-full h-[calc(100vh-150px)]">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // Added dayGridPlugin
          initialView={getInitialView()}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek", // Removed timeGridDay, added dayGridMonth
          }}
          slotMinTime="08:00:00"
          slotMaxTime="18:00:00"
          events={events}
          eventContent={RenderEventContent}
          height="auto"
        />
      </div>
    </div>
  );
};

export default Calendar;
