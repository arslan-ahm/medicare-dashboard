"use client";

import React from "react";
import { useAddPatientForm } from "./useAddPatientForm";
import RadioGroup from "../RadioGroups";
import InputRow, { InputSection } from "../InputRow";
import { GENDER_OPTIONS, PATIENT_STATUS } from "@/constants/formData";
import PageTitleBar from "@/components/pageTitlebar/PageTitieBar";
import TextButton from "@/components/TextButton";
import Image from "next/image";
import { RiImageEditLine } from "react-icons/ri";
import { Patient } from "@/types/slices/patient";

type PatientForm = {
  type?: "page" | "model";
  patient?: Patient;
};

const AddPatientForm: React.FC<PatientForm> = ({ type = "page", patient }) => {
  const { formData, handleChange, error, handleAddPatient, handleImageChange } =
    useAddPatientForm(patient);

  return (
    <>
      {type === "page" && (
        <PageTitleBar title="Add Patients">
          <ul className="flex gap-1 sm:gap-2 lg:gap-4">
            <TextButton text="Cancel" variant="outline" />
            <TextButton
              text={"Save"}
              onClick={handleAddPatient}
              type="submit"
            />
          </ul>
        </PageTitleBar>
      )}
      <div className="w-full custom-scroll overflow-y-auto max-h-[70vh]">
        {type === "model" && (
          <div className="p-3 flex justify-between items-center">
            <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] overflow-hidden bg-gray-200 cursor-pointer">
              <label
                htmlFor="profile-upload"
                className="group m-l-2 w-full h-full flex items-center justify-center"
              >
                <Image
                  src={formData.image || "/imgs/profile_placeholder.webp"}
                  alt="Profile_Image"
                  width={60}
                  height={60}
                  className="object-cover w-full h-full"
                />
                <span className="w-full h-full absolute top-0 left-0 items-center justify-center hidden group-hover:flex bg-slate-600/10 cursor-pointer">
                  <RiImageEditLine className="text-2xl text-white" />
                </span>
                <input
                  type="file"
                  id="profile-upload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <ul className="flex gap-1 sm:gap-2 lg:gap-4">
              <TextButton
                text={"Save"}
                onClick={handleAddPatient}
                type="submit"
              />
            </ul>
          </div>
        )}
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
                value={
                  formData.dateOfBirth ? formData.dateOfBirth.split("T")[0] : ""
                }
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
            <InputSection title="Appointment Date & Time">
              <input
                type="datetime-local"
                name="upcomingAppointment"
                value={
                  formData.upcomingAppointment
                    ? formData.upcomingAppointment.toString()
                    : ""
                }
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
    </>
  );
};

export default AddPatientForm;
