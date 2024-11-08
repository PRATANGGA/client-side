import { useNavigate } from "react-router-dom";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";

const LoginForm = () => {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah perilaku default form
    // Di sini, Anda dapat menambahkan logika untuk mendaftar jika diperlukan

    // Mengarahkan ke halaman balance setelah pendaftaran berhasil
    navigate("/balance");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <LabeledInput
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
        />
      </div>
      <Button variant="bg-[#299D91] w-full text-white" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
