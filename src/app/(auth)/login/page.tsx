import FormLayout from "@/components/layouts/AuthFormLayout";
import LoginForm from "@/components/(forms)/login/LoginForm";
import FormHeader from "@/components/(forms)/FormHeader";

export default function SignInPage() {
  return (
    <FormLayout>
      <FormHeader title="Login Here" subhead="Don't Have an Account" />
      <LoginForm />
    </FormLayout>
  );
}
