import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

const Layout = ({}: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
