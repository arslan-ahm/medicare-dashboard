import { FaBusinessTime, FaMagnifyingGlassLocation, FaUserDoctor } from "react-icons/fa6";

export const SPECIALIZATION_LIST = [
  { label: "General Medicalcare", value: "General Medicalcare" },
  { label: "Cardiology", value: "Cardiology" },
  { label: "Dermatology", value: "Dermatology" },
  { label: "Neurology", value: "Neurology" },
  { label: "Pediatrics", value: "Pediatrics" },
  { label: "Psychiatry", value: "Psychiatry" },
];

export const PATIENT_STATUS = [
  { label: "On Going", value: "OTHER" },
  { label: "Recovered", value: "RECOVERED" },
  { label: "Awaiting Surgery", value: "AWAITING_SURGERY" },
  { label: "On Treatment", value: "ON_TREATMENT" },
];

export const GENDER_OPTIONS = [
  { label: "Male", value: "MALE" },
  { label: "Female", value: "FEMALE" },
];

export const PATIENT_TABLE_HEADERS = [
  "Name",
  "Image",
  "Diagnosis",
  "Status",
  "Next Appointment",
  "",
];

export const APPOINTMENT_TYPE = [
  { label: "First Time", value: "FIRST_TIME" },
  { label: "Follow Up", value: "FOLLOW_UP" },
  { label: "Surgery", value: "SURGERY" },
];
export const APPOINTMENT_STATUS = [
  { label: "Confirmed", value: "CONFIRMED" },
  { label: "Not Confirmed", value: "NOT_CONFIRMED" },
];

export const APPOINTMENT_DETAILS = [
    {
      title: "Partictioner",
      subtitle: "doctorName",
      icon: <FaUserDoctor />,
      bold_text: true,
    },
    {
      title: "date and time",
      subtitle: "formattedDate",
      icon: <FaBusinessTime />,
      bold_text: true,
    },
    {
      title: "location",
      subtitle: "General clinic",
      icon: <FaMagnifyingGlassLocation />,
      bold_text: "Room 2",
    },
  ];
