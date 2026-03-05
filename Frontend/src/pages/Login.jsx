import LoginForm from "@/components/auth/LoginForm"

export default function Login() {

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">

      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6">

        <h1 className="text-2xl font-bold text-center mb-6">
          MHP Canteen Login
        </h1>

        <LoginForm />

      </div>

    </div>
  )
}