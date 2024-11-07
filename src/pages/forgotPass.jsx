import FormForgotPassword from "../component/Fragments/ForgetPassword";
import AuthLayout from "../component/Layouts/AuthLayout";

const ForgotPass = () => {
  return (
    <AuthLayout type="forgot">
      <FormForgotPassword />
    </AuthLayout>
  );
};

export default ForgotPass;
