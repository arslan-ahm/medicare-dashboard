export type PatientForm = {
    image?: string;
    forename: string;
    surname: string;
    dateOfBirth: string
    notes: string;
    diagnosis: string;
    gender: "MALE" | "FEMALE";
    status: "RECOVERED" | "AWAITING_SURGERY" | "ON_TREATMENT" | "OTHER";
    upcomingAppointment: string | null;
  }