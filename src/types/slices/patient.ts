export type Patient = {
    id: string;
    forename: string;
    surname: string;
    phone?: string;
    dateOfBirth: string;
    gender: "male" | "female";
    diagnosis: string;
    status: "On Going" | "Recovered" | "Awaiting Surgery" | "On treatment";
    notes?: string;
    upcomingAppointmentId?: string;
}

export type PatientsType = {
    patients: Patient[];
    loading: boolean;
    error: string | null;
}