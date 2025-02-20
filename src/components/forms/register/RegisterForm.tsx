"use client";

import React from "react";
import { useRegisterForm } from "./useRegister";
import InputField from "../../InputField";
import TextButton from "../../TextButton";

const RegisterForm = () => {
  const { formData, handleChange, handleRegister, error, loading } =
    useRegisterForm();
  return (
    <>
      <form onSubmit={handleRegister} className="space-y-7">
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
          label="Confirm Password"
          name="confirmPassword"
          inputType="primary"
          value={formData.confirmPassword}
          setValue={handleChange}
          labelStyle="text-[13px]"
          fieldType="password"
          required
        />
        <div className="mb-6">
          <label
            htmlFor="specialization"
            className="block text-sm font-medium text-gray-700"
          >
            Specialization
          </label>
          <select
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            id="specialization"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Specialization</option>
            <option value="General Medicalcare">General Medicalcare</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Neurology">Neurology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Psychiatry">Psychiatry</option>
          </select>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}
        <TextButton text={loading ? "Loading..." : "Register"} />
      </form>
    </>
  );
};

export default RegisterForm;
