import Search from '@components/Search/Search';
import SettingsIcon from '@mui/icons-material/Settings';
const Header: React.FC = () => {
  return (
    <>
      <div className="text-white sticky lg:ml-[250px] bg-[#3f141496] h-[68px] lg:w-[calc(100%-250px)] flex items-center justify-between p-[0_35px] z-[10000]">
        <Search />
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