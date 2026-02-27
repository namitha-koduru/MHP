import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <ul className="space-y-2">
          <li>Dashboard</li>
          <li>Manage Menu</li>
          <li>Orders</li>
        </ul>
      </div>

      <div className="flex-1 p-6 bg-slate-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;