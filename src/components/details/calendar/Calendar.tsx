"use client";
import React from "react";
import dayjs from "dayjs";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Appointment } from "@/types/slices/appointment";
import RenderEventContent from "./RenderEventContent";

type CalendarProps = {
  appointments: Appointment[];
};

type CalendarEvent = {
  id: string;
  title: string;
  start: string;
  end: string;
  color: string;
  extendedProps: {
    status: string;
    patientName: string;
    location: string;
    isOnline: boolean;
  };
};

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
    return window.innerWidth < 768 ? "timeGridDay" : "timeGridWeek";
  };
  

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Weekly Schedule</h2>
      <div className="overflow-x-auto overflow-y-hidden w-full h-[calc(100vh-150px)]">
        <FullCalendar
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView={getInitialView()}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "timeGridWeek,timeGridDay",
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
