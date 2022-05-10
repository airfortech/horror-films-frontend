import React from "react";
import { imgBaseUrl, imgSize } from "../../../../variables";
import style from "./Picture.module.css";

export const Picture = ({ src, index }) => {
  return (
    <li className={style.picture}>
      <img
        src={imgBaseUrl + imgSize.w342 + src}
        alt={"Picture number " + index}
      />
      <div className={style.cover}>
        <i class="bx bx-zoom-in"></i>
      </div>
    </li>
  );
};
