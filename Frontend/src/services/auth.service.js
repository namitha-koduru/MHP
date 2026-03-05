import axios from "axios"

const API = "http://localhost:5000/auth"

export const sendOtp = (mobile)=>{

  return axios.post(`${API}/send-otp`,{
    mobile
  })

}

export const verifyOtp = (data)=>{

  return axios.post(`${API}/verify-otp`,data)

}