import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GridViewIcon from '@mui/icons-material/GridView';
const Sidebar: React.FC = () => {
  const navLinkActive = (e: any) => {
    return e.isActive ? "sidebar--contain sidebar--active" : "sidebar--contain";
  }
  return (
    <>
      <div className="
        h-screen 
        w-[250px] 
        fixed 
        z-10 
        top-0 
        left-0 
        bg-[linear-gradient(#3F1414,_#161110_40%)]
      ">
        <div className="
          flex 
          justify-center 
          p-[28px_0]
          mb-[20px]
          border-b
          border-[#3C3A3A]
        ">
          <img src="/image/logo.png" alt="" className="w-[180px] h-auto"/>
        </div>
        <div className="
          text-[#8C8989]
          border-b
          border-[#3C3A3A]
          pb-[20px]
          mb-[20px]
        ">
          <NavLink to="/" className={navLinkActive}>
            <HomeIcon className="text-[24px] mr-[14px]" />
            <div className="text-[14px]">Home</div>
          </NavLink>
          <NavLink to="/ranking" className={navLinkActive}>
            <ListAltIcon className="text-[24px] mr-[14px]" />
            <div className="text-[14px]">Rankings</div>
          </NavLink>
          <NavLink to="/topics" className={navLinkActive}>
            <GridViewIcon className="text-[24px] mr-[14px]" />
            <div className="text-[14px]">Topics and genres</div>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Sidebar;