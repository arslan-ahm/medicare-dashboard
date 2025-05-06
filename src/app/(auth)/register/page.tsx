import FormHeader from "@/components/forms/FormHeader";
import RegisterForm from "@/components/forms/registerForm/RegisterForm";
import FormLayout from "@/components/layouts/AuthFormLayout";

export default function SignUpPage() {
  return (
    <FormLayout>
      <FormHeader title="Welcome to MediCare" subhead="Tell us about your Company | " />
      <RegisterForm />
    </FormLayout>
  );
}
