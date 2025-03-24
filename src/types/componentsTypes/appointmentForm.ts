import { Appointment } from "../slices/appointment";

export type AppointmentFormProps = {
  appt?: Appointment;
  onSuccess?: () => void;
};
