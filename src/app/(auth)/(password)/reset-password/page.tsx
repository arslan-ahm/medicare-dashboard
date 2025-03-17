"use client";
import FormHeader from "@/components/forms/FormHeader";
import ResetPasswordForm from "@/components/forms/manage-password/resetPassword/ResetPasswordForm";
import FormLayout from "@/components/layouts/AuthFormLayout";

const ResetPassword = () => {
  return (
    <FormLayout>
      <FormHeader
        title="Reset Password"
        subhead="Enter your New Password "
        noLink
      />
      <ResetPasswordForm />
    </FormLayout>
  );
};

export default ResetPassword;
