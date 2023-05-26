import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthData } from "../Context/AuthContext";
import img from '../assets/login/login.svg'
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { googleProvider, createUser } = useContext(AuthData);
  // console.log(createUser);
  const handleRegister = (e) => {
    e.preventDefault();
    const middle = e.target;
    const name = middle.name.value;
    const email = middle.email.value;
    const password = middle.password.value;
    // console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
        })
          .then(() => {
            console.log("Profile updated");
          })
          .catch((error) => {
            console.log("An error occurred");
          });
      })
      .catch((err) => console.log(err));
  };
  const handleGoogle = () => {
    googleProvider()
      .then((res) => console.log(res.user))
      .catch((data) => console.log(data));
  };
  return (
    <div className="container mx-auto mt-12">
      <div className="flex gap-12 justify-center items-center">
        <div><img src={img} alt="" /></div>
        <div className="border rounded-lg p-16">
          <div className="text-center text-4xl">
            <h2>Register</h2>
          </div>
          <form className="space-y-6 my-8" onSubmit={handleRegister}>
            <div className="form-group w-96 space-y-2">
              <label className="font-semibold text-xl" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className="border px-4 py-3 rounded-md w-full"
                id="name"
                placeholder="Your Name"
                name="name"
              />
            </div>
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
              Register
            </button>
          </form>
          <div className="text-center text-lg">
            <h2>Or Register With</h2>
          </div>
          <div className="flex gap-5 text-3xl justify-center mt-4">
            <FcGoogle className="cursor-pointer" onClick={handleGoogle} />
            <FaGithub className="w-7 cursor-pointer" />
          </div>
          <div>
            <h1 className="text-center mt-4">
              Already have an Account?{" "}
              <Link to="/login" className="hover:underline text-[#FF3811]">
                LogIn
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
