"use client";
import React from "react";
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

  const getInitialView = () => {
    return window.innerWidth < 768 ? "timeGridWeek" : "dayGridMonth";
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
