import { useEffect, useState } from "react";
import { Artist } from "./type";
import { AxiosRequestConfig } from "axios";
import { fetcher } from "@api/Fetcher";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import AddIcon from '@mui/icons-material/Add';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FavoriteArtist: React.FC = () => {
  const [favoriteArtist, setfavoriteArtist] = useState<Artist[]>([]);

  useEffect(() => {
    const fetchRecommented = async () => {
      const config: AxiosRequestConfig = {
        method: "get",
        url: "https://laomusic.net/api/v1/artists/top-favourite",
      };
      try {
        const data = await fetcher<Artist[]>(config);
        setfavoriteArtist(data);
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
          <div className="text-white text-[22px] font-semibold mb-[20px]">Nghệ sĩ yêu thích</div>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView='auto'
          spaceBetween={10}
          navigation
          className="mySwiper"
        >
          {favoriteArtist?.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "217px", overflow: "visible" }} className="select-none relative">
              <div className="w-[190px] h-[320px] p-[16px] hover:bg-[#FFFFFF0A] rounded-[10px]">
                <div className="w-[160px] h-[160px] overflow-hidden rounded-full relative">
                  <img src={item.images.DEFAULT} alt="" className="w-[160px] h-[160px] rounded-[5px] hover:scale-[1.2] hover:transition-all hover:ease-in-out hover:duration-300" />
                </div>
                <div className="w-full mt-[10px]">
                  <div className="flex justify-center items-center flex-col">
                    <div className="text-white w-auto text-[16px] max-w-[185px] truncate">{item.name}</div>
                    <div className="text-[#8C8989] text-[13px] mt-[10px]">
                      <div>{item.totalSongs} Bài hát</div>
                      <div>{item.totalLikes} Yêu thích</div>
                    </div>
                    <button className="text-white text-[14px] bg-[#FF4319] p-[8px_14px] flex items-center justify-center mt-[10px] rounded-full">
                      <AddIcon />
                      Favorite
                    </button>
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

export default FavoriteArtist;