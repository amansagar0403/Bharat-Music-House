import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    console.log("userData ", userData);
  };
  return (
    <div className="border p-10 m-5 ">
      <form onSubmit={handleSubmit} className="text-white">
        <div>
          <div>
            <div className="mb-3">
              <label className="text-white text-lg">First Name</label>
              <br />
              <input
                className="border p-3 w-full bg-black rounded-md outline-none "
                required
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                type="text"
              ></input>
            </div>
          </div>
          <div className="mb-3">
            <label className="text-white text-lg">Last Name</label>
            <br />
            <input
              className="border w-full p-3 bg-black rounded-md outline-none"
              required
              id="lastName"
              name="lastName"
              autoComplete="given-name"
              type="text"
            ></input>
          </div>
          <div className="mb-3">
            <label className="text-white text-lg">Email</label>
            <br />
            <input
              className="border w-full bg-black p-3 rounded-md outline-none"
              required
              id="email"
              name="email"
              autoComplete="email"
              type="email"
            ></input>
          </div>
          <div className="mb-3">
            <label className="text-white text-lg">Password</label>
            <br />
            <input
              className="border w-full bg-black p-3 rounded-md outline-none"
              required
              id="password"
              name="password"
              autoComplete="password"
              type="password"
            ></input>
          </div>
          <div>
            <button
              className="bg-white text-black w-full p-3 mt-5 rounded-md hover:bg-red-500 hover:text-white "
              type="submit"
            >
              Register
            </button>
          </div>
        </div>
      </form>
      <div className="flex justify-center flex-col items-center mt-4">
        <div className=" flex items-center">
          <p className="text-white mr-1">Already have an account?</p>
          <button
            onClick={() => navigate("/login")}
            className="outline-0 border-0 text-white hover:text-red-500"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
