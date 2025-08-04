import { useEffect, useState } from "react";
import { SongData } from "./typeSong";
import { AxiosRequestConfig } from "axios";
import { fetcher } from "@api/Fetcher";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SongRecommented: React.FC = () => {
  const [recommentedSong, setRecommentedSong] = useState<SongData[]>([]);
  const [checkHoverPlay, setCheckHoverPlay] = useState<number | null>(0);
  const [checkHoverTitle, setCheckHoverTitle] = useState<number | null>(null);

  useEffect(() => {
    const fetchRecommented = async () => {
      const config: AxiosRequestConfig = {
        method: "get",
        url: "https://laomusic.net/api/v1/songs/recommended",
      };
      try {
        const data = await fetcher<SongData[]>(config);
        setRecommentedSong(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecommented();
  }, []);

  return (
    <>
      <div className="p-6 ml-[250px] w-[calc(100%-250px)]">
        <div className="text-white text-[22px] font-semibold mb-[20px]">Nghe gì hôm nay</div>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView='auto'
          spaceBetween={10}
          navigation
          className="mySwiper"
        >
          {recommentedSong?.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "182px", overflow: "visible" }} className="select-none relative">
              <div className="w-[182px] h-[182px] p-[16px] hover:bg-[#FFFFFF0A] rounded-[10px]"
                onMouseEnter={() => { setCheckHoverPlay(index); setCheckHoverTitle(index) }}
                onMouseLeave={() => { setCheckHoverPlay(0); setCheckHoverTitle(null) }}>
                <div className="w-[150px] h-[150px] overflow-hidden rounded-[5px]">
                  <img src={item.images.DEFAULT} alt="" className="w-[150px] h-[150px] rounded-[5px] hover:scale-[1.2] hover:transition-all hover:ease-in-out hover:duration-300" />
                  {checkHoverPlay === index &&
                    <PlayArrowIcon className=" absolute z-10  top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2" style={{ fontSize: "40px" }} />
                  }

                </div>
                {checkHoverTitle === index &&
                  <div className="absolute z-20 h-[85px] bottom-[-80px] bg-black p-[10px] rounded-[5px] left-1/2 -translate-x-1/2 w-full flex items-center justify-center flex-col">
                    <div>
                      <div className="text-white w-auto text-[16px]">{item.name}</div>
                      <div className="text-[#8C8989] w-auto text-[16px]">{item.artists?.[0]?.stageName}</div>
                    </div>
                  </div>
                }
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SongRecommented;