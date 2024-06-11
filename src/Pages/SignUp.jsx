import robot from "../assets/images/robot.png";
import logo from "../assets/images/logo.png";
import { useSignupMutation } from "../services/authApi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [signup, { isLoading }] = useSignupMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    const { name, email, password } = formData;

    try {
      const response = await signup({ name, email, password }).unwrap();
      console.log("Signup successful:", response);
      localStorage.setItem("token", response.authToken); // Save token to localStorage

      //redirect user to login or chat page;
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
      if (error.data) {
        setError(error.data.message);
      }
    }
  };
  //  testing2
  // testing002

  return (
    <div className="flex">
      <div className="bg-white lg:w-[30%] w-[100%] h-[100vh] flex items-center justify-center p-3">
        <form
          className="flex flex-col gap-4 items-center justify-center w-full"
          onSubmit={handleSubmit}
        >
          <img className="h-[50px] w-[50px]" src={logo} />
          <h1 className="text-[34px] text-[#9095A1] font-extrabold">Sign Up</h1>

          <span>{error && <p style={{ color: "red" }}>{error}</p>}</span>

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
              value={formData.email}
              onChange={handleChange}
              placeholder="test@test.com"
              className="mt-1 px-2 h-[47px] w-full rounded-md border-gray-400 bg-white text-sm text-gray-700 shadow-sm outline-blue-200"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-[#FF56A5]"
            >
              {" "}
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
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
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="*******"
              className="mt-1 h-[47px] px-2 w-full rounded-md border-gray-400 bg-white text-sm text-gray-700 shadow-sm outline-blue-200"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="Password"
              className="block text-sm font-medium  text-[#FF56A5]"
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="*******"
              value={formData.confirm_password}
              onChange={handleChange}
              className="mt-1 h-[47px] px-2 w-full rounded-md border-gray-400 bg-white text-sm text-gray-700 shadow-sm outline-blue-200"
            />
          </div>

          <button
            className="h-[44px] mt-4 w-full inline-block shrink-0 rounded-md border bg-[#15ABFF] px-12  text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            disabled={isLoading}
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>

          <Link
            className="text-[#15ABFF] text-[12px] flex items-start justify-start mr-[54%] mt-6 hover:underline whitespace-nowrap"
            to={"/"}
          >
            Already have an account? Login in
          </Link>
        </form>
      </div>
      <div className=" w-[70%] lg:block hidden">
        <img className="h-[100vh] w-full" src={robot} />
      </div>
    </div>
  );
};

export default SignUp;
