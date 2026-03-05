import RegisterForm from "@/components/auth/RegisterForm"

export default function Register(){

  return(

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">

      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-xl font-bold text-center mb-4">
          Create Account
        </h1>

        <RegisterForm/>

      </div>

    </div>
  )
}