import React, { useEffect, useRef, useState } from "react";
import { Player, Youtube, DefaultUi, DefaultSettings } from "@vime/react";
import "@vime/core/themes/default.css";
import style from "./VideoPlayer.module.css";

export const VideoPlayer = ({ src }) => {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    console.log("player: " + isPlaying);
  }, [isPlaying]);
  return (
    <div className={style.videoPlayerSection}>
      <p>Trailer</p>
      <div>
        <Player
          className={style.player}
          ref={ref}
          onVmPausedChange={() => setIsPlaying(!ref.current.paused)}
        >
          <Youtube videoId={src} />
          <DefaultUi />
        </Player>
      </div>
    </div>
  );
};
