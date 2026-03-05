import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginForm() {

  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [otpSent, setOtpSent] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {

    const userData = {
      phone
    }

    login(userData)

    navigate("/home")
  }

  return (
    <Card className="shadow-xl rounded-2xl">

      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          MHP Canteen Login
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">

        {!otpSent ? (
          <>
            <Input
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <Button
              className="w-full"
              onClick={() => setOtpSent(true)}
            >
              Send OTP
            </Button>
          </>
        ) : (
          <>
            <Input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <Button
              className="w-full"
              onClick={handleLogin}
            >
              Login
            </Button>
          </>
        )}

        <p className="text-center text-sm">
          New user? <a href="/register" className="text-blue-500">Create account</a>
        </p>

      </CardContent>

    </Card>
  )
}