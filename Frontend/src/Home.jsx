import { useAuth } from "@/context/AuthContext"
import { Link } from "react-router-dom"

export default function Home(){

  const { user } = useAuth()

  return(

    <div>

      <header className="flex justify-between p-4 shadow">

        <h1 className="font-bold text-xl">
          MHP Canteen
        </h1>

        {user ? (

          <Link to="/profile">
            Profile
          </Link>

        ) : (

          <Link to="/login">
            Login
          </Link>

        )}

      </header>

    </div>
  )
}