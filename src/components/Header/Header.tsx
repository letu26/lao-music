import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
const Header: React.FC = () => {
  return (
    <>
      <div className="text-white sticky ml-[250px] bg-[#3f141496] h-[68px] w-[calc(100%-250px)] flex items-center justify-between p-[0_35px]">
        <div className="w-[550px] h-[45px] bg-[#3F1414] rounded-[20px] flex items-center pl-[20px]">
          <SearchIcon />
          <input className="ml-[7px] bg-transparent w-full text-[#8C8989]" type="text" placeholder="What do you want to listen to?" />
        </div>
        <div>
          <span className="relative inline-block p-[7px] bg-[#3F1414] rounded-full mr-[20px] before:content-[''] before:absolute before:right-[-20px] before:top-1/2 before:-translate-y-1/2 before:scale-y-100 before:w-[2px] before:h-[16px] before:bg-[#3C3A3A]">
            <SettingsIcon/>
          </span>
          <button className="ml-[20px] w-[65px] h-[40px] bg-[#ff4319] rounded-[20px]">Login</button>
        </div>
      </div>
    </>
  )
}
export default Header;