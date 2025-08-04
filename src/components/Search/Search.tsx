import SearchIcon from '@mui/icons-material/Search';
import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import useDebounce from 'src/hooks/useDebounce';
import { SearchSong } from './type';
import { fetcher } from '@api/Fetcher';

const Search: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [songSearch, setSongSearch] = useState<SearchSong[]>([]);
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  const handlechange = (e: any) => {
    setValue(e.target.value);
  }

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    const fetchSearch = async () => {
      const config: AxiosRequestConfig = {
        method: "get",
        url: `https://laomusic.net/api/v1/search/songs?keyword=${debouncedValue}`,
      };
      try {
        const data = await fetcher<SearchSong[]>(config);
        setSongSearch(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSearch();
  }, [debouncedValue]);

  return (
    <>
      <div className="w-[550px] h-[45px] bg-[#441b1b] rounded-[20px] flex items-center pl-[20px] relative focus-within:rounded-t-[20px] focus-within:rounded-b-none transition-all duration-200">
        <SearchIcon />
        <input className="ml-[7px] bg-transparent w-full text-[#8C8989]" type="text" placeholder="What do you want to listen to?" value={value} onChange={handlechange} onClick={() => setOpenAdd(true)} />
        {openAdd &&
          <div className="absolute  bg-[#441b1b] w-[550px] h-[30vh] top-[45px] left-0 border-t-[#3C3A3A] border-t-[1px] flex flex-col gap-2 pt-3 max-h-[30vh] p-4 overflow-auto">
            {songSearch?.map((item, index) => (
              <div key={index}>
                {item.name}
              </div>
            ))}
          </div>
        }
      </div>
      {openAdd &&
        <div onClick={() => setOpenAdd(false)} className="fixed inset-0 z-40"></div>
      }
    </>
  )
}
export default Search;