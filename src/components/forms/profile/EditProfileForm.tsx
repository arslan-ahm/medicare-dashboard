"use client";

import React from "react";
import TextButton from "../../buttons/TextButton";
import { useEditProfileForm } from "./useEditProfileForm";
import InputRow, { InputSection } from "../InputRow";
import CustomSelect from "../CustomSelect";
import { SPECIALIZATION_LIST } from "@/constants/formData";
import FormHeader from "../FormHeader";

const EditProfileForm = () => {
  const { formData, handleChange, handleSubmit, error, loading } =
    useEditProfileForm();
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-7 w-full mx-auto bg-white p-6 rounded-md shadow-sm mt-8"
      >
        <div className="text-center">
          <FormHeader title="Update Profile" noLink />
        </div>
        <table className="w-full border-separate border-spacing-y-3">
          <tbody>
            <InputRow
              lable="Name"
              setValue={handleChange}
              value={formData.name || ""}
              name="name"
              inputType="text"
              placeholder="i.e. Jhon Doe"
              required
            />
            <InputRow
              lable="Your Company"
              setValue={handleChange}
              value={formData.organization || ""}
              name="organization"
              inputType="text"
              placeholder="i.e. Health Care"
              required
            />
            <InputRow
              lable="Email"
              setValue={handleChange}
              value={formData.email || ""}
              name="email"
              inputType="email"
              required
            />
            <InputSection title="Specialization">
              <CustomSelect
                name="specialization"
                value={formData.specialization || ""}
                onChange={handleChange}
                options={SPECIALIZATION_LIST}
              />
            </InputSection>
          </tbody>
        </table>

        {error && <p className="text-sm text-red-600">{error}</p>}
        <TextButton
          type="submit"
          text={loading ? "Updating..." : "Update Profile"}
        />
      </form>
    </>
  );
};

export default EditProfileForm;
