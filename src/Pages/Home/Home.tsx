import React, { useEffect, useRef, useState } from "react";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PauseIcon from '@mui/icons-material/Pause';
import "./Home.scss";

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

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

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setProgress(audio.currentTime);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) setDuration(audio.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio) {
      const newTime = parseFloat(e.target.value);
      audio.currentTime = newTime;
      setProgress(newTime);
    }
  };

  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! + 1) % musicData.item.length); 
      setProgress(0);
    }
  };

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
      <div className="container">
        <div className="home__title">{musicData.title}</div>
        <div className="home__music">
          {musicData.item.map((items, index) => (
            <div
              className="home__music--cart"
              key={index}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="home__music--img">
                <img src={items.image} alt={items.name} />
              </div>
              <div className="home__music--content">
                <span>{items.name}</span>
                <span className="home__music--singer">{items.singer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentSong && (
        <div className="music-player">
          <audio
            ref={audioRef}
            src={currentSong.audio}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />
          <div className="music-player__left">
            <img src={currentSong.image} alt="song" />
            <div>
              <div className="music-player__title">{currentSong.name}</div>
              <div className="music-player__artist">{currentSong.singer}</div>
            </div>
          </div>
          <div className="music-player__center">
            <div className="music-player__controls">
              <button onClick={handlePrev}><SkipPreviousIcon /></button>
              <button onClick={togglePlay}>{isPlaying ? <PauseIcon />: <NotStartedIcon />}</button>
              <button onClick={handleNext}><SkipNextIcon /></button>
            </div>
            <div className="music-player__progress">
              <span>{formatTime(progress)}</span>
              <input
                type="range"
                min="0"
                max={duration}
                value={progress}
                onChange={handleSeek}
              />
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
