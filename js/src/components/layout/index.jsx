import { Outlet } from "react-router-dom";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-700 dark:text-gray-200 transition-color duration-500 ease-in-out">
      <h1 className="a11y-hidden">멋사컴</h1>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
