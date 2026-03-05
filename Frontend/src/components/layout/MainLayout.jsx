import Navbar from "../components/layout/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-24 px-4">{children}</div>
    </div>
  );
};

export default MainLayout;