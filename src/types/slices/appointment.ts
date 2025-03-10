import { AppointmentStatus } from "@prisma/client";

export type Appointment = {
  id: string;
  date: string;
  time: string;
  location: string;
  purpose: string;
  duration: number;
  type: string;
  status: AppointmentStatus;
  isOnline: boolean;
  patientId: string;
}

export type AppointmentsType = {
  appointments: Appointment[];
  loading: boolean;
  error: string | null;
}
