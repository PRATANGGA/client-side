import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/button";

const FormForgetPassword = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabeledInput
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>

      <Button variant="bg-[#299D91] w-full text-white" type="submit">
        Forgot Password
      </Button>
    </form>
  );
};

export default FormForgetPassword;