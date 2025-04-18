
import {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import { useAppSelector } from '@/hooks/useRedux';
import { CalendarEvent } from '@/types/componentsTypes/calender';


const useCalender = () => {
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
        end: dayjs(appt.start_time).add(appt.duration ?? 0, 'minute').toISOString(),
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

    return {events, initialView};
}

export default useCalender;