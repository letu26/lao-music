import { ReactNode } from "react";
import "./homelayout.scss";
import Sidebar from "@components/Sidebar/Sidebar";
import Header from "@components/Header/Header";
import { Outlet } from "react-router-dom";
interface HomeLayoutProps {
  children: ReactNode;
}
const HomeLayout: React.FC<HomeLayoutProps> = () => {
  return(
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  )
}
export default HomeLayout;