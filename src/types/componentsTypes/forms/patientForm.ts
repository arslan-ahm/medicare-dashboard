import { Patient } from "@/types/slices/patient";

export type PatientForm = {
  type?: "page" | "model";
  patient?: Patient;
  onSuccess?: () => void;
};
