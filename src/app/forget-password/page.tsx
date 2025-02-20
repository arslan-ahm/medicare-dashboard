import FormHeader from "@/components/forms/FormHeader";
import ForgetPasswordForm from "@/components/forms/forgetPassword/ForgetPasswordForm";
import FormLayout from "@/components/layouts/FormLayout";

export default function SignUpPage() {
  return (
    <FormLayout>
      <FormHeader
        title="Forget Password"
        subhead="Let's try once more... "
      />
      <ForgetPasswordForm />
    </FormLayout>
  );
}
