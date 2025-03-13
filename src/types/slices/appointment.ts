
export type Appointment = {
  id: string;
  start_time: string | null,
  end_time: string | null,
  patientName: string;
  purpose: string;
  type: "" | "FIRST_TIME" | "FOLLOW_UP" | "SURGERY";
  status: "CONFIRMED" | "NOT_CONFIRMED";
  isOnline: boolean;
  createdAt?: string;
}

export type AppointmentsType = {
  appointments: Appointment[];
  loading: boolean;
  error: string | null;
}
