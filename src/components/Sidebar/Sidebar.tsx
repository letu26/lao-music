import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GridViewIcon from '@mui/icons-material/GridView';
const Sidebar: React.FC = () => {
  const navLinkActive = (e:any) => {
    return e.isActive ? "sidebar__item--contain sidebar__item--active": "sidebar__item--contain";
  }
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__logo">
          <img src="/image/logo.png" alt="" />
        </div>
        <div className="sidebar__item">
          <NavLink to="/" className={navLinkActive}>
            <HomeIcon className="sidebar__item--icon"/>
            <div className="sidebar__item--title">Home</div>
          </NavLink>
          <NavLink to="/ranking" className={navLinkActive}>
            <ListAltIcon className="sidebar__item--icon"/>
            <div className="sidebar__item--title">Rankings</div>
          </NavLink>
           <NavLink to="/topics" className={navLinkActive}>
            <GridViewIcon className="sidebar__item--icon"/>
            <div className="sidebar__item--title">Topics and genres</div>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Sidebar;