import { useState } from "react";
import { loginUser } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {

  const navigate = useNavigate();

  const [regId, setRegId] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      let payload = { password };

      if (regId) payload.regId = regId;
      else if (phone) payload.phone = phone;
      else {
        alert("Enter Registration ID or Mobile Number");
        return;
      }

      const res = await loginUser(payload);

      /* SAVE TOKEN */

      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      const role = res.user.role;

      /* ROLE BASED ROUTING */

      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }

    } catch (err) {

      alert(err.response?.data?.message || "Login failed");

    }

  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-slate-200">

      <div className="bg-white w-[420px] p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-semibold text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Login to your account
        </p>

        <label className="text-sm font-medium">
          Registration Number
        </label>

        <input
          type="text"
          placeholder="Enter your registration number"
          className="w-full border rounded-lg p-3 mt-1 mb-4"
          onChange={(e)=>setRegId(e.target.value)}
        />

        <p className="text-center text-gray-400 mb-3">OR</p>

        <label className="text-sm font-medium">
          Mobile Number
        </label>

        <input
          type="text"
          placeholder="Enter your mobile number"
          className="w-full border rounded-lg p-3 mt-1 mb-4"
          onChange={(e)=>setPhone(e.target.value)}
        />

        <label className="text-sm font-medium">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter password"
          className="w-full border rounded-lg p-3 mt-1 mb-6"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white p-3 rounded-lg font-medium"
        >
          Login
        </button>

        {/* REGISTER LINK */}

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/registerForm" className="text-blue-600">
            Register
          </Link>
        </p>

        {/* ADMIN LOGIN */}

        <p
  onClick={()=>navigate("/admin-login")}
  className="text-center mt-3 text-gray-600 cursor-pointer"
>
  Admin Login
</p>

      </div>

    </div>

  );
}