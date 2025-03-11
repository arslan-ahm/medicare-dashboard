import React from "react";
import AddPatientForm from "@/components/forms/addPatient/AddPatientForm";

const AddPatient = () => {
  return (
    <section>
      <div className="bg-white w-full md:w-[80%] mx-auto px-4 py-2 space-y-2 rounded-lg shadow-md mt-3 ">
        <AddPatientForm />
      </div>
    </section>
  );
};

export default AddPatient;
