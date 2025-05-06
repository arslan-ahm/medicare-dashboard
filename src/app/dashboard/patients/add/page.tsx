import React from "react";
import { Metadata } from "next";
import PatientForm from "@/components/forms/patientForm/PatientForm";

export const metadata: Metadata = {
  title: "Add Patient",
  description: "You can add a new patient here.",
};


const Page = () => {
  return (
    <section>
      <div className="bg-white w-full md:w-[80%] mx-auto px-4 py-2 space-y-2 rounded-lg shadow-md mt-3 ">
        <PatientForm />
      </div>
    </section>
  );
};

export default Page;
