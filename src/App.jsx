import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import BalancePage from "./pages/balance";
import ForgotPass from "./pages/forgotPass";
import DashboardPage from "./pages/dashboard";
import ErrorRoute from "./pages/errorRoute";
import GoalsPage from "./pages/goals";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorRoute />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
      errorElement: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },

    {
      path: "/balance",
      element: <BalancePage />,
    },
    {
      path: "/forgot-pass",
      element: <ForgotPass />,
    },
    {
      path: "/goal",
      element: <GoalsPage />,
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
    <h1 className="text-5xl font-extrabold text-white mb-6 animate-fadeIn">
      WELCOME to <span className="text-yellow-300">FINEBank.IO</span>
    </h1>
    <p className="text-lg text-white mb-10 text-center max-w-md opacity-90">
      Your one-stop solution for all your banking needs. Sign up or sign in to
      explore your opportunities.
    </p>
    <nav className="flex gap-6">
      <Link
        to="/login"
        className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl hover:bg-blue-100 transition duration-300 transform hover:-translate-y-1"
      >
        Sign In
      </Link>
      <Link
        to="/register"
        className="bg-white text-pink-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl hover:bg-pink-100 transition duration-300 transform hover:-translate-y-1"
      >
        Sign Up
      </Link>
    </nav>
    <footer className="absolute bottom-4 text-white text-sm opacity-75">
      © 2024 FINEBank.IO - All Rights Reserved
    </footer>
  </div>
);

export default App;
