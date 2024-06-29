import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    console.log("userData ", userData);
  };
  return (
    <div className="border p-10 m-5">
      <form onSubmit={handleSubmit} className="text-white">
        <div>
          <div className="mb-3">
            <label className="text-white">Email</label>
            <br />
            <input
              className="border w-full bg-black rounded-md  p-3"
              required
              id="email"
              name="email"
              autoComplete="email"
              type="email"
            ></input>
          </div>
          <div className="mb-3">
            <label className="text-white">Password</label>
            <br />
            <input
              className="border w-full bg-black rounded-md  p-3"
              required
              id="password"
              name="password"
              autoComplete="password"
              type="password"
            ></input>
          </div>
          <div>
            <button
              className="bg-white text-black w-full p-3 mt-5 rounded-md hover:bg-red-500 hover:text-white"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <div className="flex justify-center flex-col items-center mt-4">
        <div className=" flex items-center">
          <p className="text-white mr-1">Create new account?</p>
          <button
            onClick={() => navigate("/register")}
            className="outline-0 border-0 text-white hover:text-red-500"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
