import { useEffect, useState } from "react";
import { TopGenres } from "./type";
import { AxiosRequestConfig } from "axios";
import { fetcher } from "@api/Fetcher";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NavLink } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TopGenresPlaylists: React.FC = () => {
  const [topGenresPlaylists, setTopGenresPlaylists] = useState<TopGenres[]>([]);
  const [checkHoverPlay, setCheckHoverPlay] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecommented = async () => {
      const config: AxiosRequestConfig = {
        method: "get",
        url: "https://laomusic.net/api/v1/genres/top-genres-playlists?page=0&pageSize=3",
      };
      try {
        const data = await fetcher<TopGenres[]>(config);
        setTopGenresPlaylists(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecommented();
  }, []);
  return (
    <>
      {topGenresPlaylists?.map((item, index) => (
        <div className="p-6 ml-[250px] w-[calc(100%-250px)]" key={`playlists-${item.id}-${index}`}>
          <div className="flex text-[#FF4319] items-center justify-between">
            <div className="text-white text-[22px] font-semibold mb-[20px]">{item.name}</div>
            <NavLink to="/" className="flex items-center">Xem thêm <ArrowForwardIosIcon /></NavLink>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView='auto'
            spaceBetween={10}
            navigation
            className="mySwiper"
          >
            {item.playlists?.map((items, index) => (
              <SwiperSlide key={`song-playlists-${items.id}-${index}`} style={{ width: "217px", overflow: "visible" }} className="select-none relative">
                <div className="w-[217px] h-[247px] p-[16px] hover:bg-[#FFFFFF0A] rounded-[10px]"
                  onMouseEnter={() => setCheckHoverPlay(items.id + item.id)}
                  onMouseLeave={() => setCheckHoverPlay(null)}>
                  <div className="w-[185px] h-[185px] overflow-hidden rounded-[5px] relative">
                    <img src={items.images.DEFAULT} alt="" className="w-[185px] h-[185px] rounded-[5px] hover:scale-[1.2] hover:transition-all hover:ease-in-out hover:duration-300" />
                    {checkHoverPlay === items.id + item.id &&
                      <PlayArrowIcon className="rounded-full p-[5px] bg-[#FF4319] absolute z-10  top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2" style={{ fontSize: "40px" }} />
                    }

                  </div>
                  <div className="rounded-[5px] w-full m-[10px_0]">
                    <div className="text-white text-[16px] max-w-[185px] truncate">{items.name}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </>
  );
};

export default TopGenresPlaylists;