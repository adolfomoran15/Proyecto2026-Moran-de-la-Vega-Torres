import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
