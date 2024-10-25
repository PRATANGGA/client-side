import FormSignIn from "../component/Fragments/FormSignIn";
import AuthLayout from "../component/Layouts/AuthLayout";

const SignInPage = () => {
  return (
    <AuthLayout type="sign-in">
      <FormSignIn />
    </AuthLayout>
  );
};

export default SignInPage;
