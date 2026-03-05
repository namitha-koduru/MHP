import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-[#151515] border-b border-yellow-500/20 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-yellow-400">MHP</h1>

      <div className="flex gap-6 text-white">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
}