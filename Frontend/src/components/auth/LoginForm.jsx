"use client";
import { useState } from "react"
import { sendOtp, verifyOtp } from "@/services/authService"

export default function LoginForm(){

  const [mobile,setMobile]=useState("")
  const [otp,setOtp]=useState("")
  const [step,setStep]=useState(1)

  const handleSendOtp=async()=>{

    await sendOtp(mobile)

    setStep(2)
  }

  const handleVerify=async()=>{

    await verifyOtp({
      mobile,
      otp
    })

    window.location="/"
  }

  return(

    <div>

      {step===1 &&(

        <>
        <input
          placeholder="Mobile Number"
          onChange={(e)=>setMobile(e.target.value)}
        />

        <button onClick={handleSendOtp}>
          Send OTP
        </button>
        </>

      )}

      {step===2 &&(

        <>
        <input
          placeholder="Enter OTP"
          onChange={(e)=>setOtp(e.target.value)}
        />

        <button onClick={handleVerify}>
          Verify
        </button>
        </>

      )}

    </div>
  )
}