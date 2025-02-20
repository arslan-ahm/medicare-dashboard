"use client";

import React from "react";
import { useAddPatientForm } from "./useAddPatientForm";
import InputField from "../../InputField";
import TextButton from "@/components/TextButton";

const AddPatientForm = () => {
  const { formData, handleChange, handleAddPatient, error, loading } =
    useAddPatientForm();
  return (
    <>
      <div className="bg-white w-full md:w-[80%] mx-auto px-4 py-2 rounded-lg shadow-md mt-3 ">
        <div className="w-full custom-scroll overflow-y-auto max-h-[70vh]">
          <table className="w-full border-separate border-spacing-4">
            <FormInput
              lable="Forename"
              setValue={handleChange}
              value={formData.forename}
              inputType="search"
              name="forename"
              placeholder="i.e. Jhon"
            />
            <FormInput
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
                {["Male", "Female"].map((sex) => (
                  <label
                    key={sex}
                    className={`cursor-pointer px-4 py-2 border-2 rounded-md transition-colors duration-200 ${
                      formData.gender === sex
                        ? "border-primary bg-primary text-white"
                        : "border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={sex}
                      checked={formData.gender === sex}
                      onChange={handleChange}
                      className="hidden"
                    />
                    {sex}
                  </label>
                ))}
              </div>
            </InputSection>
            <FormInput
              lable="Diagnosis"
              setValue={handleChange}
              value={formData.diagnosis}
              inputType="text"
              name="diagnosis"
              placeholder=" "
            />
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
          </table>
        </div>
        <TextButton
          className="w-[50%] min-w-24 mx-auto"
          text={!loading ? "Add Patient" : "Loading..."}
          onClick={handleAddPatient}
        />
      </div>
    </>
  );
};

type FormInputProps = {
  lable: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  inputType: string;
  placeholder?: string;
  required?: boolean;
};

const FormInput: React.FC<FormInputProps> = ({
  lable,
  value,
  setValue,
  name,
  inputType,
  placeholder = "",
  required = false,
}) => {
  return (
    <InputSection title={lable}>
      <InputField
        name={name}
        inputType="secondary"
        value={value}
        setValue={setValue}
        labelStyle="text-[13px]"
        placeholder={placeholder}
        required={required}
        fieldType={inputType}
        inputStyle="focus:border-primary"
      />
    </InputSection>
  );
};

const InputSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <tr>
      <td className="align-top pt-2 px-2">{title}</td>
      <td>{children}</td>
    </tr>
  );
};

export default AddPatientForm;
