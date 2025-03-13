import { Appointment } from "@prisma/client";

export type CalendarProps = {
    appointments: Appointment[];
};

export type CalendarEvent = {
    id: string;
    title: string;
    start: string;
    end: string;
    color: string;
    extendedProps: {
        status: string;
        patientName: string;
        location: string;
    };
};