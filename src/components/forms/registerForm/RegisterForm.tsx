"use client";

import React from "react";
import { useRegisterForm } from "./useRegisterForm";
import InputField from "../../InputField";
import TextButton from "../../buttons/TextButton";
import { SPECIALIZATION_LIST } from "@/constants/formData";
import CustomSelect from "../CustomSelect";

const RegisterForm = () => {
  const {
    formData,
    handleChange,
    handleRegister,
    error,
    loading,
    extraData,
    setExtraData,
  } = useRegisterForm();
  return (
    <>
      <form
        onSubmit={handleRegister}
        className="space-y-7 max-h-[70vh] custom-scroll px-2 overflow-y-auto"
      >
        <InputField
          label="Name"
          name="name"
          inputType="primary"
          value={formData.name}
          setValue={handleChange}
          labelStyle="text-[13px]"
          placeholder="i.e. Jhon Doe"
          required
        />
        <InputField
          label="Company Name"
          name="organization"
          inputType="primary"
          value={formData.organization}
          setValue={handleChange}
          labelStyle="text-[13px]"
          placeholder="i.e. SMITH & Co."
          required
        />
        <InputField
          label="Industry"
          name="industry"
          inputType="primary"
          value={extraData.industry}
          setValue={(e) =>
            setExtraData({ ...extraData, industry: e.target.value })
          }
          labelStyle="text-[13px]"
          placeholder="i.e. Health Care"
        />
        <InputField
          label="Email"
          name="email"
          fieldType="email"
          inputType="primary"
          value={formData.email}
          setValue={handleChange}
          labelStyle="text-[13px]"
          required
        />
        <InputField
          label="Password"
          name="password"
          inputType="primary"
          value={formData.password}
          setValue={handleChange}
          labelStyle="text-[13px]"
          fieldType="password"
          required
        />
        <InputField
          label="Number of Employees"
          name="text"
          inputType="primary"
          value={extraData.employCount}
          setValue={(e) =>
            setExtraData({ ...extraData, employCount: e.target.value })
          }
          labelStyle="text-[13px]"
          fieldType="text"
          placeholder="i.e. 40 - 100"
        />
        <div className="mb-6">
          <label
            htmlFor="specialization"
            className="block text-sm font-medium text-gray-700"
          >
            Specialization
          </label>
          <CustomSelect
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            options={SPECIALIZATION_LIST}
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}
        <TextButton type="submit" text={loading ? "Loading..." : "Finish"} />
      </form>
    </>
  );
};

export default RegisterForm;
