import robot from "../assets/images/robot.png";
import logo from "../assets/images/logo.png";
import { useLoginMutation } from "../services/authApi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(credentials).unwrap();
      localStorage.setItem("token", response.authToken); // Save token to localStorage

      // redirect to the Chat page upon successful login
      navigate("/chat");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex">
      <div className="bg-white lg:w-[30%] w-[100%] h-[100vh] flex items-center justify-center p-3">
        <form
          className="flex flex-col gap-4 items-center justify-center w-full"
          onSubmit={handleSubmit}
        >
          <img className="h-[50px] w-[50px]" src={logo} />
          <h1 className="text-[34px] text-[#9095A1] font-extrabold">Log In</h1>
          <div className="w-full">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-[#FF56A5]"
            >
              {" "}
              Email{" "}
            </label>

            <input
              type="email"
              id="Email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="test@test.com"
              className="mt-1 px-2 h-[47px] w-full rounded-md border-gray-400 bg-white text-sm text-gray-700 shadow-sm outline-blue-200"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="Password"
              className="block text-sm font-medium  text-[#FF56A5]"
            >
              Password
            </label>

            <input
              type="password"
              id="Password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="*******"
              className="mt-1 h-[47px] px-2 w-full rounded-md border-gray-400 bg-white text-sm text-gray-700 shadow-sm outline-blue-200"
            />
          </div>

          <button
            className="h-[44px] mt-4 w-full inline-block shrink-0 rounded-md border bg-[#15ABFF] px-12  text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          {/*   <p className="text-[#15ABFF] text-[12px] flex items-start justify-start mr-[54%] mt-6">
            Dont have an account? Sign Up
          </p>
 */}
          <Link
            className="text-[#15ABFF] text-[12px] flex items-start justify-start mr-[54%] mt-6 whitespace-nowrap"
            to={"/signup"}
          >
            Dont have an account? Sign Up
          </Link>
        </form>
      </div>
      <div className=" w-[70%] lg:block hidden">
        <img className="h-[100vh] w-full" src={robot} />
      </div>
    </div>
  );
};

export default Login;
