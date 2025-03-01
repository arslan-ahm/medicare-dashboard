export type Doctor = {
    id: string;
    name: string;
    email: string;
    organization: string;
    specialization: string;

    patients: string[];
    appointments: string[];
    tasks: string[];
}

export type AuthState = {
    doctor: Doctor | null;
    loading: boolean;
    error: string | null;
    successMessage: string | null;
}
