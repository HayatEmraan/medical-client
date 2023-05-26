import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import img from "../assets/login/login.svg";
import { AuthData } from "../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const { googleProvider, user } = useContext(AuthData);
  if (user) {
    return <Navigate to="/" />;
  }
  const handleGoogle = () => {
    googleProvider()
      .then((res) => console.log(res.user))
      .catch((data) => console.log(data));
  };
  return (
    <div className="container mx-auto mt-12">
      <div className="flex gap-12 justify-center items-center">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="border rounded-lg p-16">
          <div className="text-center text-4xl">
            <h2>LogIn</h2>
          </div>
          <form className="space-y-6 my-8" >
            <div className="form-group w-96 space-y-2">
              <label className="font-semibold text-xl" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="border px-4 py-3 rounded-md w-full"
                id="email"
                placeholder="Enter Email"
                name="email"
              />
            </div>
            <div className="form-group w-96 space-y-2">
              <label className="font-semibold text-xl" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="border px-4 py-3 rounded-md w-full w-full"
                id="password"
                placeholder="Enter Password"
                name="password"
              />
            </div>
            <button
              type="submit"
              className="btn bg-[#FF3811] text-xl w-96 border-0"
            >
              LogIn
            </button>
          </form>
          <div className="text-center text-lg">
            <h2>Or Sign In With</h2>
          </div>
          <div className="flex gap-5 text-3xl justify-center mt-4">
            <div onClick={handleGoogle} className="cursor-pointer">
              <FcGoogle />
            </div>
            <div className="cursor-pointer">
              <FaGithub className="w-7" />
            </div>
          </div>
          <div>
            <h1 className="text-center mt-4">
              Don't Have a Account?{" "}
              <Link to="/register" className="hover:underline text-[#FF3811]">
                Register
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
