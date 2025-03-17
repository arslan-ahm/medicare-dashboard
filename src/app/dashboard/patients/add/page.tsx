import React from "react";
import PatientForm from "@/components/forms/patient/PatientForm";

const AddPatient = () => {
  return (
    <section>
      <div className="bg-white w-full md:w-[80%] mx-auto px-4 py-2 space-y-2 rounded-lg shadow-md mt-3 ">
        <PatientForm />
      </div>
    </section>
  );
};

export default AddPatient;
