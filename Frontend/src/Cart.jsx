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
export default function Cart() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white p-6">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">
        Your Cart
      </h2>

      <div className="bg-[#2a2a2a] p-6 rounded-xl">
        Cart items will appear here.
      </div>
    </div>
  );
}