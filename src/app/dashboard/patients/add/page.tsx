import React from "react";
import TextButton from "@/components/TextButton";
import PageTitleBar from "@/components/pageTitlebar/PageTitieBar";
import AddPatientForm from "@/components/forms/addPatient/AddPatientForm";

const AddPatient = () => {
  return (
    <div>
      <PageTitleBar title="Add Patients">
        <ul className="flex gap-1 sm:gap-2 lg:gap-4">
          <TextButton text="Cancel" variant="outline" />
          <TextButton text="Save" />
        </ul>
      </PageTitleBar>

      <AddPatientForm />
    </div>
  );
};

export default AddPatient;
