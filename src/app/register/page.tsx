import FormHeader from "@/components/forms/FormHeader";
import RegisterForm from "@/components/forms/register/RegisterForm";
import FormLayout from "@/components/layouts/FormLayout";

export default function SignUpPage() {
  return (
    <FormLayout>
      <FormHeader title="Register Me" subhead="Already have an Account" />
      <RegisterForm />
    </FormLayout>
  );
}
