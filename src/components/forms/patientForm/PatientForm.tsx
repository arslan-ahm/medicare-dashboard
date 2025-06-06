"use client";

import React from "react";
import { usePatientForm } from "./usePatientForm";
import RadioGroup from "../RadioGroups";
import InputRow, { InputSection } from "../InputRow";
import { GENDER_OPTIONS, PATIENT_STATUS } from "@/constants/formData";
import PageTitleBar from "@/components/titlebarActions/PageTitieBar";
import TextButton from "@/components/buttons/TextButton";
import Image from "next/image";
import { RiImageEditLine } from "react-icons/ri";
import type { PatientForm } from "@/types/componentsTypes/forms/patientForm";

const PatientForm: React.FC<PatientForm> = ({
  type = "page",
  patient,
  onSuccess,
}) => {
  const {
    formData,
    handleChange,
    recordForm,
    setRecordForm,
    extraData,
    setExtraData,
    error,
    loading,
    handleAddPatient,
    handleCancel,
    handleImageChange,
  } = usePatientForm(patient, type === "model" ? onSuccess : undefined);

  return (
    <>
      {type === "page" && (
        <PageTitleBar title="Add New Patients">
          <ul className="flex gap-1 sm:gap-2 lg:gap-4">
            <TextButton
              text="Cancel"
              onClick={handleCancel}
              variant="outline"
            />
            <TextButton
              text={loading ? "Saving..." : "Save"}
              onClick={handleAddPatient}
              type="submit"
            />
          </ul>
        </PageTitleBar>
      )}
      <div className="w-full custom-scroll overflow-y-auto max-h-[70vh] p-2 sm:p-4">
        {type === "model" ? (
          <div className="pl-8 flex justify-between items-center">
            <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] overflow-hidden bg-gray-200 cursor-pointer">
              <label
                htmlFor="profile-upload"
                className="group w-full h-full flex items-center justify-center"
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
                text={loading ? "Saving..." : "Save"}
                onClick={handleAddPatient}
                type="submit"
              />
            </ul>
          </div>
        ) : (
          <div className="w-full flex justify-center items-center mb-2">
            <div className="relative flex items-center justify-center rounded-full w-[80px] h-[80px] overflow-hidden bg-gray-200 cursor-pointer">
              <label
                htmlFor="profile-upload"
                className="group w-full h-full flex items-center justify-center"
              >
                <Image
                  src={formData.image || "/imgs/profile_placeholder.webp"}
                  alt="Profile_Image"
                  width={50}
                  height={50}
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
          </div>
        )}
        <table className="w-full border-separate border-spacing-y-3">
          <tbody>
            <InputSection title="Record Number">
              <p className="text-md_gray">
                Record number will be assigned automatically when you save.
              </p>
              {!recordForm ? (
                <button
                  onClick={() => setRecordForm(true)}
                  className="p-2 my-1 text-sm border border-gray-300 rounded-sm hover:bg-gray-100 focus:outline-none focus:ring-2 font-semibold"
                >
                  Assign manually
                </button>
              ) : (
                <div>
                  <input
                    className="border border-gray-300 rounded-sm placeholder:text-md_gray p-2 py-[2px] outline-none"
                    placeholder="Enter Record Number"
                    type="text"
                  />
                </div>
              )}
            </InputSection>
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
                className="w-full  border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-primary"
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
              <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
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
            <InputRow
              lable="Phone"
              setValue={(e) =>
                setExtraData({ ...extraData, phone: e.target.value })
              }
              value={extraData.phone}
              inputType="text"
              name="phone"
              placeholder="+1 234 567 890"
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PatientForm;
