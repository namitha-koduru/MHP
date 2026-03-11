import { useState } from "react";
import { loginUser } from "../../services/authService";

export default function AdminLogin(){

  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = async ()=>{

    try{

      const res = await loginUser({
        phone,
        password
      })

      /* ROLE CHECK */

      if(res.user.role !== "admin"){
        alert("Not an admin account")
        return
      }

      localStorage.setItem("token",res.token)

      window.location="/admin"

    }catch(err){

      alert(err.response?.data?.message || "Admin login failed")

    }

  }

  return(

    <div className="flex items-center justify-center min-h-screen bg-slate-900">

      <div className="bg-white w-[420px] p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-semibold text-center mb-2">
          Admin Login
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Enter your admin credentials to continue
        </p>

        <input
          placeholder="Admin ID"
          className="w-full border rounded-lg p-3 mb-4"
          onChange={(e)=>setPhone(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3 mb-6"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white p-3 rounded-lg"
        >
          Login
        </button>

        <p
          onClick={()=>window.location="/login"}
          className="text-center mt-4 text-gray-600 cursor-pointer"
        >
          Back to User Login
        </p>

      </div>

    </div>

  )

}