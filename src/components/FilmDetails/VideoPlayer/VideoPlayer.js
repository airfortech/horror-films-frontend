import React, { useEffect, useRef, useState, useContext } from "react";
import { Player, Youtube, DefaultUi } from "@vime/react";
import { LanguageContext } from "../../../context/LanguageContext/LanguageContext";
import { gsap } from "gsap";
import "@vime/core/themes/default.css";
import style from "./VideoPlayer.module.css";

export const VideoPlayer = ({ src }) => {
  const playerRef = useRef(null);
  const overlayRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { translations } = useContext(LanguageContext);

  useEffect(() => {
    if (isPlaying) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          duration: 0.8,
          delay: 0.3,
          display: "none",
          ease: "sine.in",
        }
      );
    } else {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 1, display: "block" },
        {
          opacity: 1,
          duration: 0,
          ease: "sine.in",
        }
      );
    }
  }, [isPlaying]);
  return (
    <div className={style.videoPlayerSection}>
      <p>{translations.filmDetails.trailer}</p>
      <div>
        <div className={style.overlay} ref={overlayRef}></div>
        <Player
          className={style.player}
          ref={playerRef}
          onVmPausedChange={() => setIsPlaying(!playerRef.current.paused)}
          src={src}
        >
          <Youtube videoId={src} src={src} />
          <DefaultUi />
        </Player>
      </div>
    </div>
  );
};
