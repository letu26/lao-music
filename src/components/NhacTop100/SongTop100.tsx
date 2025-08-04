import { useEffect, useState } from "react";
import { SongTop100 } from "./type";
import { AxiosRequestConfig } from "axios";
import { fetcher } from "@api/Fetcher";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NavLink } from "react-router-dom";

const SongTop: React.FC = () => {
  const [songTop100, setSongTop100] = useState<SongTop100[]>([]);
  const [checkHoverPlay, setCheckHoverPlay] = useState<number | null>(0);

  useEffect(() => {
    const fetchRecommented = async () => {
      const config: AxiosRequestConfig = {
        method: "get",
        url: "https://laomusic.net/api/v1/playlists/top100",
      };
      try {
        const data = await fetcher<SongTop100[]>(config);
        setSongTop100(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecommented();
  }, []);
  return (
    <>
      <div className="p-6 ml-[250px] w-[calc(100%-250px)]">
        <div className="flex text-[#FF4319] items-center justify-between">
          <div className="text-white text-[22px] font-semibold mb-[20px]">Nhạc TOP 100</div>
          <NavLink to="/" className="flex items-center">Xem thêm <ArrowForwardIosIcon /></NavLink>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView='auto'
          spaceBetween={10}
          navigation
          className="mySwiper"
        >
          {songTop100?.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "217px", overflow: "visible" }} className="select-none relative">
              <div className="w-[217px] h-[267px] p-[16px] hover:bg-[#FFFFFF0A] rounded-[10px]"
                onMouseEnter={() => setCheckHoverPlay(index)}
                onMouseLeave={() => setCheckHoverPlay(null)}>
                <div className="w-[185px] h-[185px] overflow-hidden rounded-[5px] relative">
                  <img src={item.images.DEFAULT} alt="" className="w-[185px] h-[185px] rounded-[5px] hover:scale-[1.2] hover:transition-all hover:ease-in-out hover:duration-300" />
                  {checkHoverPlay === index &&
                    <PlayArrowIcon className="rounded-full p-[5px] bg-[#FF4319] absolute z-10  top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2" style={{ fontSize: "40px" }} />
                  }

                </div>
                <div className= "w-full flex items-center justify-center flex-col mt-[10px]">
                  <div>
                    <div className="text-white w-auto text-[16px] max-w-[185px] truncate">{item.name}</div>
                    <div className="text-[#8C8989] w-auto text-[16px] max-w-[185px] truncate">{item.artists?.[0]?.name}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SongTop;