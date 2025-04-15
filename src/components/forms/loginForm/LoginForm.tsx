"use client";

import React from "react";
import { useLoginForm } from "./useLoginForm";
import InputField from "../../InputField";
import TextButton from "../../buttons/TextButton";
import Text from "../../Text";

const LoginForm = () => {
  const { formData, handleChange, handleLogin, error, loading } =
    useLoginForm();
  return (
    <>
      <form onSubmit={handleLogin} className="space-y-7">
        <InputField
          label="Email"
          name="email"
          inputType="primary"
          value={formData.email}
          setValue={handleChange}
          labelStyle="text-[13px]"
          placeholder="i.e. Jhon Doe"
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
        <div className="flex justify-end">
          <Text text="Forget Password" type="span" link="/forget-password" />
        </div>
        {error && <p className="text-sm font-semibold text-red">{error}</p>}
        <TextButton type="submit" text={loading ? "Loading..." : "Login"} />
      </form>
    </>
  );
};

export default LoginForm;
