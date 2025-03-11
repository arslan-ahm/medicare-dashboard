export type Patient = {
    id: string;
    forename: string;
    surname: string;
    image?: string;
    dateOfBirth: string;
    gender: "MALE" | "FEMALE";
    diagnosis: string;
    status: "OTHER" | "RECOVERED" | "AWAITING_SURGERY" | "ON_TREATMENT";
    notes?: string;
    upcomingAppointmentId?: Date | null;
}

export type PatientsType = {
    patients: Patient[];
    loading: boolean;
    error: string | null;
}