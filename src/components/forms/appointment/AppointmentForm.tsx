"use client";

import React from "react";
import TextButton from "../../buttons/TextButton";
import { useAddAppointmentForm } from "./useAppointmentForm";
import InputRow, { InputSection } from "../InputRow";
import { APPOINTMENT_STATUS, APPOINTMENT_TYPE, DURATION_LIST } from "@/constants/formData";
import RadioGroup from "../RadioGroups";
import FormHeader from "./header/FormHeaderItem";
import { AppointmentFormProps } from "@/types/componentsTypes/appointmentForm";
import { FaRegBell } from "react-icons/fa6";

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  appt,
  onSuccess,
}) => {
  const {
    formData,
    handleChange,
    handleSubmit,
    isChecked,
    handleCheck,
    error,
    loading,
  } = useAddAppointmentForm(appt, onSuccess);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full mx-auto bg-white p-4 sm:p-6 rounded-md shadow-sm"
      >
        <div className="flex justify-center xs:justify-between items-center flex-wrap sm:px-8  xs:space-x-4">
          <FormHeader />
        </div>
        <div className="w-full max-h-[50vh] overflow-y-auto custom-scroll border-separate border-spacing-y-3">
          <div className="space-y-1 sm:space-y-4">
            <InputRow
              lable="Patient Name"
              setValue={handleChange}
              value={formData.patientName}
              name="patientName"
              inputType="text"
              placeholder="i.e. Jhon Doe"
              required
            />
            <InputRow
              lable="Purpose"
              setValue={handleChange}
              value={formData.purpose}
              name="purpose"
              inputType="text"
              placeholder="i.e. Cough"
              required
            />
            <InputSection title="Appointment Status">
              <div className="flex gap-2">
                <RadioGroup
                  name="status"
                  options={APPOINTMENT_STATUS}
                  selectedValue={formData.status}
                  onChange={handleChange}
                />
              </div>
            </InputSection>
            <InputSection title="Duration">
              <div className="flex gap-2">
                <RadioGroup
                  name="duration"
                  options={DURATION_LIST}
                  selectedValue={formData.duration}
                  onChange={handleChange}
                />
              </div>
            </InputSection>
            <InputSection title="Appointment Type">
              <div className="flex gap-2">
                <RadioGroup
                  name="type"
                  options={APPOINTMENT_TYPE}
                  selectedValue={formData.type}
                  onChange={handleChange}
                />
              </div>
            </InputSection>

            <InputSection title="Online Appointment">
              <label className="flex items-center gap-2 cursor-pointer">
                <div
                  className={`relative w-24 h-12 px-2 flex items-center border rounded-md transition-all duration-300 ${
                    isChecked ? "border-primary" : "border-red"
                  }`}
                  onClick={handleCheck}
                >
                  <span
                    className={`text-lg font-semibold text-gray-700 select-none ${
                      isChecked ? "" : "translate-x-14"
                    }`}
                  >
                    {isChecked ? "Yes" : "No"}
                  </span>
                  <div
                    className={`absolute left-1 w-1/2 h-[90%] flex items-center justify-center rounded-md px-3 shadow-md transition-all duration-300 transform select-none text-white ${
                      isChecked ? "translate-x-10 bg-primary" : "bg-red"
                    }`}
                  >
                    {isChecked ? "✔" : "✖"}
                  </div>
                </div>
              </label>
            </InputSection>
          </div>
          <div className="ml-8 my-4 md:my-9 w-full md:w-2/3">
            <div className="flex items-center gap-2 mb-2">
              <FaRegBell className="text-2xl text-md_gray" />
              <span className="font-semibold">Send Notification</span>
            </div>
            <p className="text-sm text-gray">
              Appointment confirmation and reminder messages will be
              automatically sent to clinic SMS notification settings.
            </p>
          </div>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}
        <TextButton
          type="submit"
          text={loading ? "Saving...😏" : "Save Appointment"}
        />
      </form>
    </>
  );
};

export default AppointmentForm;
