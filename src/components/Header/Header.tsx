import "./header.scss";
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        <div className="header__search">
          <SearchIcon />
          <input className="header__search--input" type="text" placeholder="What do you want to listen to?" />
        </div>
        <div className="header__menu">
          <span><SettingsIcon className="header__menu--icon"/></span>
          <button className="header__menu--btn">Login</button>
        </div>
      </div>
    </>
  )
}
export default Header;