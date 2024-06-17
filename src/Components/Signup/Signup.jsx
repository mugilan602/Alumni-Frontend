import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar2 from "../Navbar/Navbar2";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      setError("Already an user exist with same email.");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div>
      <Navbar2 />
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center ">
          <div className="sm:w-1/2 px-16">
            <h2 className="font-bold text-2xl flex justify-center">Create Account</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                required
                className="p-2 mt-8 rounded-xl border"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                required
                className="p-2 rounded-xl border"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="p-2 rounded-xl border"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className="p-2 rounded-xl border"
              />
              {error && <div className="flex justify-center text-red-600">{error}</div>}
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-[#387ADF] rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-5 text-gray-400 text-sm flex justify-center">
              <div className="mr-1">Existing user?</div>
              <Link to="/login" className="text-[#387ADF]">
                Login
              </Link>
            </div>
          </div>
          <div className="w-1/2 sm:block hidden">
            <img
              className="object-cover rounded-2xl"
              src="https://enrollacademy.com/wp-content/uploads/2024/01/Sai-sairam-College-Bangalore-Photo.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
