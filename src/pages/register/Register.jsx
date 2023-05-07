import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import upload from "../../utils/upload.js";
import { kuppilogo } from "../../assets";
import {BuildingLibraryIcon, EnvelopeIcon, LockClosedIcon, UserCircleIcon, UserIcon, } from '@heroicons/react/24/outline'
import "./Register.css";


const Register = () => {

  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    university: "",
    isTeacher: false,
    phone: "",
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.persist();
      setUser((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex flex-col  justify-center items-center ">
            <img
              src={kuppilogo}
              alt="site-logo"
              className="w-[8rem] h-[8rem] logo object-contain mt-32  sm:mt-10 "
            />
          </div>

          <h1 class=" text-2xl font-semibold text-white capitalize sm:text-3xl ">
            sign Up
          </h1>

          <div class="relative flex items-center mt-8">
            <span className="absolute">
            <UserIcon className="w-6 h-6 mx-3 text-gray-300" aria-hidden="true" />
            </span>

            <input
              type="text"
              name="username"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleChange}
              placeholder="Username"
            />
          </div>

          <div class="relative flex items-center mt-4">
            <span className="absolute">
            <EnvelopeIcon className="w-6 h-6 mx-3 text-gray-300" aria-hidden="true" />
            </span>

            <input
              name="email"
              type="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleChange}
              placeholder="Email address"
            />
          </div>

          <div class="relative flex items-center mt-4">
            <span className="absolute">
            <BuildingLibraryIcon className="w-6 h-6 mx-3 text-gray-300" aria-hidden="true" />
            </span>

            <input
              type="text"
              name="university"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleChange}
              placeholder="University"
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
            <LockClosedIcon className="w-6 h-6 mx-3 text-gray-300" aria-hidden="true" />
            </span>

            <input
              type="password"
              name="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <div className="relative flex items-center mt-4">
            <span className="absolute">
            <UserCircleIcon className="w-6 h-6 mx-3 text-gray-300" aria-hidden="true" />
            </span>

            <input
              type="file"
              name="img"
              className="block w-full px-10 py-3 text-gray-700"
              onChange={(e) => setFile(e.target.files[0])}
              placeholder="image"
            />
          </div>

          <div className="mt-6">
            <button
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              type="submit"
            >
              Sign Up
            </button>
       

            {/* <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
              or sign in with
            </p>

            <a
              href="#"
              onClick={signInWithGoogle}
              className="flex items-center  text-white hover:text-[#0a0a23] justify-center px-6 py-3 mt-4 transition-colors duration-300 transform border rounded-lg  hover:bg-gray-50"
            >
              <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>

              <span className="mx-2">Sign in with Google</span>
            </a> */}

            <div className="mt-6 text-center ">
              Already have an account?
              <Link
                to="/login"
                className="text-sm px-3 text-blue-500 hover:underline "
              >
                Login
              </Link>
              now
            </div>

          </div>
        </form>
      </div>
    </section>
  );
};
export default Register;
