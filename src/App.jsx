import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    // {
    //   path: "/ForgotPass",
    //   element: <For,
    // },
  ]);

  return <RouterProvider router={myRouter} />;
};

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-green-400">
    <h1 className="text-4xl font-bold text-white mb-8">
      WELLCOME to FINEBank.IO
    </h1>
    <nav className="flex gap-4">
      <Link
        to="/login"
        className="bg-white text-blue-500 font-semibold py-3 px-6 rounded shadow-lg hover:shadow-xl transition duration-300"
      >
        Sign In
      </Link>
      <Link
        to="/register"
        className="bg-white text-green-500 font-semibold py-3 px-6 rounded shadow-lg hover:shadow-xl transition duration-300"
      >
        Sign Up
      </Link>
    </nav>
  </div>
);

export default App;
