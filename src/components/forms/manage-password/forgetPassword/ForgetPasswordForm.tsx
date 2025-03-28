"use client";

import React from "react";
import { useForgetPasswordForm } from "./useForgetPasswordForm";
import InputField from "../../../InputField";
import TextButton from "../../../buttons/TextButton";

const LoginForm = () => {
  const { email, handleChange, handleForgetPassword, error, loading } =
    useForgetPasswordForm();
  return (
    <>
      <form onSubmit={handleForgetPassword} className="space-y-7">
        <InputField
          label="Email"
          inputType="primary"
          value={email}
          setValue={handleChange}
          labelStyle="text-[13px]"
          fieldType="email"
          required
        />
        {error && <p className="text-sm text-rose-600">{error}</p>}
        <TextButton
          type="submit"
          text={loading ? "Making magic link..." : "Send me Magic Link"}
        />
      </form>
    </>
  );
};

export default LoginForm;
