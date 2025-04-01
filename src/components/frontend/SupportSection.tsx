import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import Text from "../Text";

export const projects = [
  {
    title: "Appointment Scheduling",
    description:
      "A feature that allows doctors to manage and schedule patient appointments efficiently.",
    link: "/features/appointment-scheduling",
  },
  {
    title: "Patient Records Management",
    description:
      "A system to securely store and manage patient medical records and history.",
    link: "/features/patient-records-management",
  },
  {
    title: "Billing and Invoicing",
    description:
      "A tool to streamline billing processes and generate invoices for patients.",
    link: "/features/billing-invoicing",
  },
  {
    title: "Telemedicine",
    description:
      "A feature enabling doctors to consult with patients remotely through video calls.",
    link: "/features/telemedicine",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A dashboard providing insights into patient data, appointments, and other key metrics.",
    link: "/features/analytics-dashboard",
  },
  {
    title: "Prescription Management",
    description:
      "A system to create, manage, and share prescriptions with patients digitally.",
    link: "/features/prescription-management",
  },
];

const SupportSection = () => {
  return (
    <section className="flex md:flex-row flex-col items-center justify-center gap-10 lg:flex-row py-20 px-5 sm:px-10">
      <div className="md:text-start text-center">
        <Text
          text="Comprehensive Support for Healthcare Professionals"
          type="h2"
          className="text-xl sm:text-2xl md:text-3xl lg:text-6xl text-primary"
        />
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
};

export default SupportSection;
