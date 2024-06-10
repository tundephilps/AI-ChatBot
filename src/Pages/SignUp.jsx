import React from "react";
import robot from "../assets/images/robot.png";
import logo from "../assets/images/logo.png";

const SignUp = () => {
  return (
    <div className="flex">
      <div className="bg-white lg:w-[30%] w-[100%] h-[100vh] flex items-center justify-center p-3">
        <form className="flex flex-col gap-4 items-center justify-center w-full">
          <img className="h-[50px] w-[50px]" src={logo} />
          <h1 className="text-[34px] text-[#9095A1] font-extrabold">Sign Up</h1>
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
              id="Name"
              name="text"
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
              id="Password"
              name="password"
              placeholder="*******"
              className="mt-1 h-[47px] px-2 w-full rounded-md border-gray-400 bg-white text-sm text-gray-700 shadow-sm outline-blue-200"
            />
          </div>

          <button className="h-[44px] mt-4 w-full inline-block shrink-0 rounded-md border bg-[#15ABFF] px-12  text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
            Sign Up
          </button>
          <p className="text-[#15ABFF] text-[12px] flex items-start justify-start mr-[54%] mt-6 hover:underline whitespace-nowrap">
            Already have an account? Login in
          </p>
        </form>
      </div>
      <div className=" w-[70%] lg:block hidden">
        <img className="h-[100vh] w-full" src={robot} />
      </div>
    </div>
  );
};

export default SignUp;
