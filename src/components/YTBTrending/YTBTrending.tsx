import { useEffect, useState } from "react";
import { SongYTB } from "./type";
import { AxiosRequestConfig } from "axios";
import { fetcher } from "@api/Fetcher";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const YTBTrending: React.FC = () => {
  const [songYTB, setSongYTB] = useState<SongYTB[]>([]);
  const [checkHoverPlay, setCheckHoverPlay] = useState<number | null>(0);
  const [openAdd, setOpenAdd] = useState<number | null >(null);

  useEffect(() => {
    const fetchRecommented = async () => {
      const config: AxiosRequestConfig = {
        method: "get",
        url: "https://laomusic.net/api/v1/songs/music-trending-ytb",
      };
      try {
        const data = await fetcher<SongYTB[]>(config);
        setSongYTB(data);
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
          <div className="text-white text-[22px] font-semibold mb-[20px]">Youtube Trending</div>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView='auto'
          spaceBetween={10}
          navigation
          className="mySwiper"
        >
          {songYTB?.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "217px", overflow: "visible" }} className="select-none relative">
              <div className="w-[217px] h-[217px] p-[16px] hover:bg-[#FFFFFF0A] rounded-[10px]"
                onMouseEnter={() => setCheckHoverPlay(index)}
                onMouseLeave={() => setCheckHoverPlay(null)}>
                <div className="w-[185px] h-[125px] overflow-hidden rounded-[5px] relative">
                  <img src={item.images.DEFAULT} alt="" className="h-full aspect-video rounded-[5px] hover:scale-[1.2] hover:transition-all hover:ease-in-out hover:duration-300" />
                  {checkHoverPlay === index &&
                    <PlayArrowIcon className="rounded-full p-[5px] bg-[#FF4319] absolute z-10  top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2" style={{ fontSize: "40px" }} />
                  }
                </div>
                <div className="w-[185px] flex items-center mt-[10px] flex-row">
                  <img src={item.artists?.[0]?.images.SMALL} alt="" className="w-[27px] h[27px] rounded-full mr-[10px]" />
                  <div>
                    <div className="text-white w-auto text-[16px] max-w-[130px] truncate">{item.name}</div>
                    <div className="text-[#8C8989] w-auto text-[16px] max-w-[130px] truncate">{item.artists?.[0]?.name}</div>
                  </div>
                  <button onClick={() => setOpenAdd(index)} className="text-white cursor-default relative">
                    <MoreHorizIcon className="rotate-90" />
                    {openAdd === index &&
                      <div className="flex flex-col absolute bottom-[-75px] left-0 z-[999] w-[200px] h-auto text-white  bg-[#1c1717] text-[16px] gap-1 p-[10px] items-start rounded-[5px]">
                        <div className=" ">
                          <AddIcon />
                          <span>Thêm vào playlists</span>
                        </div>
                        <div className="">
                          <AddIcon />
                          <span>Thêm vào hàng đợi</span>
                        </div>
                      </div>
                    }
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {openAdd !==null &&
          <div onClick={() => setOpenAdd(null)} className="fixed inset-0 z-40"></div>
        }
      </div>
    </>
  );
};

export default YTBTrending;