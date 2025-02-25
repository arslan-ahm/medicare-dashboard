"use client";

import React from "react";
import TextButton from "../../TextButton";
import { useAddAppointmentForm } from "./useAddAppointmentForm";
import InputRow, { InputSection } from "../InputRow";
import CustomSelect from "../CustomSelect";
import { SPECIALIZATION_LIST } from "@/constants/formValues";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import Text from "@/components/Text";

const AddAppointmentForm = () => {
  const { formData, handleChange, handleSubmit, error, loading } =
    useAddAppointmentForm();

  const topOptions = [
    {
      title: "Partictioner",
      subtitle: "Jhon Doe",
      icon: <FaUserDoctor />,
      bold_text: "General Doctor",
    },
    {
      title: "date and time",
      subtitle: "Tue, 26 October",
      icon: <FaBusinessTime />,
      bold_text: "9:00",
    },
    {
      title: "location",
      subtitle: "General clinic",
      icon: <FaMagnifyingGlassLocation />,
      bold_text: "Room 2",
    },
  ];
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-7 w-full mx-auto bg-white p-6 rounded-md shadow-sm mt-8"
      >
        <div className="flex justify-between px-8 space-x-4">
          {topOptions.map((option, index) => (
            <div key={index} className="flex flex-col items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full text-white">
                {option.icon}
              </div>
              <div>
                <Text text={option.title} type="h4" />
                <Text text={option.subtitle} type="h4" />
                <Text text={option.bold_text} type="h4" />
              </div>
            </div>
          ))}
        </div>
        <table className="w-full border-separate border-spacing-y-3">
          <tbody>
            <InputRow
              lable="Name"
              setValue={handleChange}
              value={formData.name}
              name="name"
              inputType="text"
              placeholder="i.e. Jhon Doe"
              required
            />
            <InputRow
              lable="Your Company"
              setValue={handleChange}
              value={formData.organization}
              name="organization"
              inputType="text"
              placeholder="i.e. Health Care"
              required
            />
            <InputRow
              lable="Email"
              setValue={handleChange}
              value={formData.email}
              name="email"
              inputType="email"
              required
            />
            <InputSection title="Specialization">
              <CustomSelect
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                options={SPECIALIZATION_LIST}
              />
            </InputSection>
          </tbody>
        </table>

        {error && <p className="text-sm text-red-600">{error}</p>}
        <TextButton text={loading ? "Adding..." : "Add Appointment"} />
      </form>
    </>
  );
};

export default AddAppointmentForm;
