import FormSignUp from "../component/Fragments/FormSIgnUp";
import AuthLayout from "../component/Layouts/AuthLayout";

const SignUpPage = () => {
  return (
    <AuthLayout type="sign up">
      <FormSignUp />
    </AuthLayout>
  );
};

export default SignUpPage;
