import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import UserLayout from "./layouts/UserLayoutTest";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/auth/ProtectedRoute"
import Dashboard from "./pages/admin/Dashboard";
import MenuManage from "./pages/admin/MenuManage";
import Orders from "./pages/admin/OrdersManage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* USER */}
        <Route element={<UserLayout />}>
  <Route
    path="/home"
    element={
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    }
  />

  <Route
    path="/menu"
    element={
      <ProtectedRoute>
        <Menu />
      </ProtectedRoute>
    }
  />

  <Route
    path="/cart"
    element={
      <ProtectedRoute>
        <Cart />
      </ProtectedRoute>
    }
  />
</Route>
        {/* ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="menu" element={<MenuManage />} />
          <Route path="orders" element={<Orders />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;