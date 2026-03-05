import { useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function RegisterForm(){

  const { login } = useAuth()
  const navigate = useNavigate()

  const [form,setForm]=useState({
    role:"",
    name:"",
    regid:"",
    mobile:""
  })

  const handleSubmit=()=>{

    login(form)

    navigate("/")
  }

  return(

    <div className="space-y-3">

      <select
        className="w-full border p-2 rounded"
        onChange={(e)=>setForm({...form,role:e.target.value})}
      >
        <option>Select Role</option>
        <option>Student</option>
        <option>Faculty</option>
      </select>

      <input
        placeholder="Name"
        className="w-full border p-2 rounded"
        onChange={(e)=>setForm({...form,name:e.target.value})}
      />

      <input
        placeholder="Registration ID"
        className="w-full border p-2 rounded"
        onChange={(e)=>setForm({...form,regid:e.target.value})}
      />

      <input
        placeholder="Mobile Number"
        className="w-full border p-2 rounded"
        onChange={(e)=>setForm({...form,mobile:e.target.value})}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-indigo-500 text-white p-2 rounded"
      >
        Register
      </button>

    </div>

  )
}