export type FormHeaderProps = {
  title: string;
  subhead?: string;
  noLink?: boolean;
};


export type AppointmentFormData = {
  patientName: string;
  purpose: string;
  start_time: string | null;
  end_time: string | null;
  status: "CONFIRMED" | "NOT_CONFIRMED";
  type: "FIRST_TIME" | "FOLLOW_UP" | "SURGERY";
  isOnline: boolean;
}