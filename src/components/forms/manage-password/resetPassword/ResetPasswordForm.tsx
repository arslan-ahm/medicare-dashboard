"use client";

import React from "react";
import InputField from "../../../InputField";
import TextButton from "../../../TextButton";
import { useResetPasswordForm } from "./useResetPasswordForm";

const ResetPasswordForm = () => {
  const { formData, handleChange, handleRegister, error, loading } =
    useResetPasswordForm();
  return (
    <>
      <form onSubmit={handleRegister} className="space-y-7">
        <InputField
          label="New Password"
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
          inputType="primary"
          name="confirmPassword"
          value={formData.confirmPassword}
          setValue={handleChange}
          labelStyle="text-[13px]"
          fieldType="password"
          required
        />
        {error && <p className="text-sm text-rose-600">{error}</p>}
        <TextButton
          type="submit"
          text={loading ? "Saving New Password..." : "Save New Password"}
        />
      </form>
    </>
  );
};

export default ResetPasswordForm;
