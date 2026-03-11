import { useState } from "react";
import { registerUser } from "@/services/authService";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {

  const navigate = useNavigate();

  const [form,setForm] = useState({
    name:"",
    regId:"",
    phone:"",
    password:"",
    role:"student"
  });

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleRegister = async ()=>{

    try{

      const res = await registerUser(form);

      alert("Account created successfully");

      /* Navigate to login page */

      navigate("/login");

    }catch(err){

      alert(err.response?.data?.message || "Registration failed");

    }

  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-200">

      <div className="bg-white p-8 rounded-xl shadow-md w-[400px]">

        <h2 className="text-xl font-bold text-center mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Enter your details to register
        </p>

        {/* NAME */}
        <label className="text-sm font-medium">Name</label>
        <input
          name="name"
          placeholder="Enter your name"
          className="w-full border p-2 rounded mb-3"
          onChange={handleChange}
        />

        {/* REG ID */}
        <label className="text-sm font-medium">Registration Number</label>
        <input
          name="regId"
          placeholder="Enter your registration number"
          className="w-full border p-2 rounded mb-3"
          onChange={handleChange}
        />

        {/* PHONE */}
        <label className="text-sm font-medium">Mobile Number</label>
        <input
          name="phone"
          placeholder="Enter your mobile number"
          className="w-full border p-2 rounded mb-3"
          onChange={handleChange}
        />

        {/* PASSWORD */}
        <label className="text-sm font-medium">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="w-full border p-2 rounded mb-5"
          onChange={handleChange}
        />

        {/* BUTTON */}
        <button
          onClick={handleRegister}
          className="w-full bg-black text-white p-2 rounded"
        >
          Register
        </button>

      </div>

    </div>

  );
}