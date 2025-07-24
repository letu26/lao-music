import React, { useEffect, useRef, useState } from "react";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PauseIcon from '@mui/icons-material/Pause';

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  const musicData = {
    title: "Vietnamese Song",
    item: [
      {
        id: 1,
        image: "https://th.bing.com/th/id/OIP.I_qrL6ULJ9WHTGF_vUzMPwHaHa?w=177&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        name: "Nơi này có anh",
        singer: "Sơn Tùng MTP",
        audio: "/radio/noinaycoanh.mp3"
      },
      {
        id: 2,
        image: "https://th.bing.com/th/id/OIP.bz5l1ka02vDLF0fxbka5_wHaI1?w=163&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        name: "Đường tôi chở em về",
        singer: "Bùi Trường Linh",
        audio: "/radio/duongtoichoemve.mp3"
      },
      {
        id: 3,
        image: "https://th.bing.com/th/id/OIP.F-W8EYlsWAOptXrBjPaHrwHaLG?w=204&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        name: "Thằng điên",
        singer: "JUSTATEE x PHƯƠNG LY",
        audio: "/radio/thangdien.mp3"
      },
      {
        id: 4,
        image: "https://th.bing.com/th/id/OIP.W9Wj1UJSNCbXfGb5l7pUpAHaHa?w=182&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        name: "Yêu 5",
        singer: "Rhymastic",
        audio: "/radio/yeu5.mp3"
      },
      {
        id: 5,
        image: "https://th.bing.com/th/id/OIP.MBFJX0D174twUbUbDlQeZQHaLH?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        name: "Ex’s Hate Me",
        singer: "AMEE x B RAY",
        audio: "/radio/exhateme.mp3"
      }
    ]
  };

  const currentSong = currentIndex !== null ? musicData.item[currentIndex] : null;

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  //lấy thời gian hiện tại
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setProgress(audio.currentTime);
  };

  //lấy tổng thời gian
  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) setDuration(audio.duration);
  };

  //cập nhật thời gian 
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio) {
      const newTime = parseFloat(e.target.value);
      audio.currentTime = newTime;
      setProgress(newTime);
    }
  };

  //chuyển đến bài tiếp theo
  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! + 1) % musicData.item.length);
      setProgress(0);
    }
  };

  //chuyển về bài trước
  const handlePrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) =>
        prev! - 1 < 0 ? musicData.item.length - 1 : prev! - 1
      );
      setProgress(0);
    }
  };

  useEffect(() => {
    if (currentSong && audioRef.current) {
      const audio = audioRef.current;
      audio.load();
      audio.play();
      setIsPlaying(true);
    }
  }, [currentIndex]);

  return (
    <>
      <div className="ml-[250px] min-h-screen bg-[linear-gradient(#3f14146f,_#161110_40%)] p-[25px_35px_0_35px]">
        <div className="text-white text-[22px] font-semibold">{musicData.title}</div>
        <div className="flex">
          {musicData.item.map((items, index) => (
            <div
              className="w-[230px] m-[5] p-[10px] hover:bg-[#FFFFFF0A] rounded-[10px]"
              key={index}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="rounded-[10px] overflow-hidden">
                <img src={items.image} alt={items.name} className="rounded-[10px] max-h-full max-w-full w-auto h-auto object-cover aspect-square hover:scale-[1.2] hover:transition-all hover:ease-in-out hover:duration-300
"/>
              </div>
              <div className="text-white flex flex-col mt-[10px]">
                <span>{items.name}</span>
                <span className="text-[#8C8989]">{items.singer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentSong && (
        <div className="fixed bottom-0 w-full bg-dark-gradient text-white p-[10px_20px] flex items-center z-50 h-[96px]">
          <audio
            ref={audioRef}
            src={currentSong.audio}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />
          <div className="flex items-center gap-[15px] w-[200px]">
            <img src={currentSong.image} alt="song" className="w-[50px] h-[50px] rounded-[8px]"/>
            <div>
              <div className="font-semibold">{currentSong.name}</div>
              <div className="text-[12px] text-[#aaa]">{currentSong.singer}</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center gap-[5px]">
            <div className="flex items-center gap-[10px]">
              <button className="bg-transparent border-none text-[20px] text-white cursor-pointer" onClick={handlePrev}><SkipPreviousIcon /></button>
              <button className="bg-transparent border-none text-[20px] text-white cursor-pointer" onClick={togglePlay}>{isPlaying ? <PauseIcon /> : <NotStartedIcon />}</button>
              <button className="bg-transparent border-none text-[20px] text-white cursor-pointer" onClick={handleNext}><SkipNextIcon /></button>
            </div>
            <div className="flex items-center gap-[10px]">
              <span>{formatTime(progress)}</span>
              <input
                type="range"
                min="0"
                max={duration}
                value={progress}
                onChange={handleSeek}
                className="w-[500px] h-[4px]"
              />
              <span className="text-[12px] w-[40px] text-center">{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
