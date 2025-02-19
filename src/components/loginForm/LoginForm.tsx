import React from "react";
import { useLoginForm } from "./useLoginForm";
import InputField from "../InputField";
import TextButton from "../TextButton";

const LoginForm = () => {
  const { formData, handleChange, handleLogin, error, loading } =
    useLoginForm();
  return (
    <>
      <form onSubmit={handleLogin} className="space-y-6">
        <InputField
          label="Email"
          name="email"
          inputType="primary"
          value={formData.email}
          setValue={handleChange}
        />
        <InputField
          label="Password"
          name="password"
          inputType="primary"
          value={formData.password}
          setValue={handleChange}
          fieldType="password"
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <TextButton text={loading ? "Loading..." : "Login"} />
      </form>
    </>
  );
};

export default LoginForm;
