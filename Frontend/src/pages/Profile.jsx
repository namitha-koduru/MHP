import { useAuth } from "@/context/AuthContext"

export default function Profile() {

  const { user } = useAuth()

  if (!user) return <p>No user logged in</p>

  return (
    <div className="max-w-xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-4">
        My Profile
      </h1>

      <div className="space-y-2">

        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Department:</b> {user.department}</p>
        <p><b>Year:</b> {user.year}</p>
        <p><b>Roll:</b> {user.roll}</p>

      </div>

    </div>
  )
}