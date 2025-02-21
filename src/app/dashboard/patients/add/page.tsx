import React from "react";
import AddPatientForm from "@/components/forms/addPatient/AddPatientForm";
import PageTitleBar from "@/components/pageTitlebar/PageTitieBar";
import TextButton from "@/components/TextButton";

const AddPatient = () => {
  return (
    <section>
      <PageTitleBar title="Add Patients">
        <ul className="flex gap-1 sm:gap-2 lg:gap-4">
          <TextButton text="Cancel" variant="outline" />
          <TextButton text={"Save"} />
        </ul>
      </PageTitleBar>

      <AddPatientForm />
    </section>
  );
};

export default AddPatient;
