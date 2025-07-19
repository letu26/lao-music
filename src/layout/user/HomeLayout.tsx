import { ReactNode } from "react";
import "./homelayout.scss";
import Sidebar from "@components/Sidebar/Sidebar";
import Header from "@components/Header/Header";
import Home from "src/Pages/Home/Home";
interface HomeLayoutProps {
  children: ReactNode;
}
const HomeLayout: React.FC<HomeLayoutProps> = () => {
  return(
    <>
      <Header />
      <Sidebar />
      <Home />
    </>
  )
}
export default HomeLayout;