"use client";

import React from "react";
import TextButton from "../../TextButton";
import InputRow from "../InputRow";
import FormHeader from "../FormHeader";
import { useChangePasswordForm } from "./useChangePasswordForm";

const ChangePasswordForm = () => {
  const { formData, handleChange, handleRegister, error, loading } =
    useChangePasswordForm();
  return (
    <>
      <form
        onSubmit={handleRegister}
        className="space-y-7 w-full mx-auto bg-white p-6 rounded-md shadow-sm mt-8"
      >
        <div className="text-center">
          <FormHeader title="Change Password" noLink />
        </div>
        <table className="w-full border-separate border-spacing-y-3">
          <tbody>
            <InputRow
              lable="Current Password"
              setValue={handleChange}
              value={formData.currentPassword}
              name="currentPassword"
              inputType="password"
              placeholder="********"
              required
            />
            <InputRow
              lable="Change Password"
              setValue={handleChange}
              value={formData.changePassword}
              name="changePassword"
              inputType="password"
              placeholder="********"
              required
            />
            <InputRow
              lable="Confirm Password"
              setValue={handleChange}
              value={formData.confirmPassword}
              name="confirmPassword"
              inputType="password"
              placeholder="********"
              required
            />
          </tbody>
        </table>

        {error && <p className="text-sm text-red-600">{error}</p>}
        <TextButton text={loading ? "Updating..." : "Update Password"} />
      </form>
    </>
  );
};

export default ChangePasswordForm;
