"use client";

import React from "react";
import { useAddPatientForm } from "./useAddPatientForm";
import RadioGroup from "../RadioGroups";
import InputRow, { InputSection } from "../InputRow";
import { GENDER_OPTIONS, PATIENT_STATUS } from "@/constants/formValues";

const AddPatientForm = () => {
  const { formData, handleChange, error } = useAddPatientForm();

  return (
    <>
      <div className="bg-white w-full md:w-[80%] mx-auto px-4 py-2 space-y-2 rounded-lg shadow-md mt-3 ">
        <div className="w-full custom-scroll overflow-y-auto max-h-[70vh]">
          <table className="w-full border-separate border-spacing-y-3">
            <tbody>
              <InputRow
                lable="Forename"
                setValue={handleChange}
                value={formData.forename}
                inputType="search"
                name="forename"
                placeholder="i.e. Jhon"
              />
              <InputRow
                lable="Surname"
                setValue={handleChange}
                value={formData.surname}
                inputType="search"
                name="surname"
                placeholder="i.e. Doe"
              />
              <InputSection title="Date Of Birth">
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-primary"
                />
              </InputSection>
              <InputSection title="Sex">
                <div className="flex gap-2">
                  <RadioGroup
                    name="gender"
                    options={GENDER_OPTIONS}
                    selectedValue={formData.gender}
                    onChange={handleChange}
                  />
                </div>
              </InputSection>
              <InputSection title="Appointment Date">
                <input
                  type="date"
                  name="upcomingAppointmentId"
                  value={formData.upcomingAppointmentId}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-primary"
                />
              </InputSection>
              <InputRow
                lable="Diagnosis"
                setValue={handleChange}
                value={formData.diagnosis}
                inputType="text"
                name="diagnosis"
                placeholder=" "
                required
              />
              <InputSection title="Status">
                <div className="flex gap-2">
                  <RadioGroup
                    name="status"
                    options={PATIENT_STATUS}
                    selectedValue={formData.status}
                    onChange={handleChange}
                  />
                </div>
              </InputSection>
              <InputSection title="Notes">
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 resize-y overflow-y-auto h-28 rounded-md p-2 focus:outline-none focus:border-primary"
                  placeholder="Type here..."
                />
              </InputSection>
              {error && <p className="text-sm text-red-600">{error}</p>}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddPatientForm;
