export interface Appointment {
  id: string;
  date: string;
  time: string;
  location: string;
  purpose: string;
  duration: number;
  type: string;
  status: string;
  isOnline: boolean;
  patientId: string;
}

export interface AppointmentsType {
  appointments: Appointment[];
  loading: boolean;
  error: string | null;
}
