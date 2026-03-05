import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white">
      
      <Navbar />

      <div className="flex items-center justify-center h-[80vh]">
        <h1 className="text-4xl font-bold text-yellow-400">
          Welcome to MHP
        </h1>
      </div>

    </div>
  );
}
export default function Login() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white flex items-center justify-center">
      <div className="bg-[#2a2a2a] p-8 rounded-xl w-80 shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6">
          Login
        </h2>

        <input
          type="text"
          placeholder="Enter Phone Number"
          className="w-full p-3 rounded-lg bg-[#1c1c1c] border border-yellow-500/20 mb-4"
        />

        <button className="w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
          Send OTP
        </button>
      </div>
    </div>
  );
}