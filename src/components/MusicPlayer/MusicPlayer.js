import React, { useEffect, useRef, useState, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext/LanguageContext";
import { Tooltip } from "../Tooltip/Tooltip";
import { musicPlayerDefaultState } from "../../variables";
import musicPath from "../../assets/music/bg-music.mp3";
import style from "./MusicPlayer.module.css";

export const MusicPlayer = () => {
  const { translations } = useContext(LanguageContext);
  const audio = useRef(null);
  const [isPlaying, setIsPLaying] = useState(musicPlayerDefaultState);
  const [volume, setVolume] = useState(20);

  const handlePlayMusic = () => {
    isPlaying ? audio.current.pause() : audio.current.play();
    setIsPLaying(prevState => !prevState);
  };

  const handleChangeVolume = e => {
    audio.current.volume = e.target.value / 100;
    setVolume(e.target.value);
  };

  useEffect(() => {
    audio.current.volume = volume / 100;
    setTimeout(() => {
      setIsPLaying(!audio.current.paused);
    }, 2000);
  }, []);

  return (
    <Tooltip title={translations.tooltip.musicPlayer} placement="left">
      <div className={style.container}>
        <audio
          ref={audio}
          controls
          src={musicPath}
          autoPlay={isPlaying}
          loop={true}
        ></audio>
        <div className={style.player}>
          <button onClick={handlePlayMusic}>
            <i className={`bx bx-${isPlaying ? "pause" : "play"}-circle`}></i>
          </button>
          <input
            type="range"
            max={100}
            value={volume}
            onChange={handleChangeVolume}
          />
        </div>
      </div>
    </Tooltip>
  );
};
