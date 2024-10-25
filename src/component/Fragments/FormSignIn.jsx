import Checkbox from "../Elements/Checkbox";
import Button from "../Elements/Button";
import LabeledInput from "../Elements/LabeledInput";
const FormSignIn = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabeledInput
          label="Email address"
          type="email"
          placeholder="Enter your email address"
          name="email"
        />
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="Enter your email password"
          name="password"
        />
      </div>
      <div className="mb-3">
        <Checkbox label="Keep me signed in" name="status" />
      </div>
      <Button />
    </form>
  );
};
export default FormSignIn;
