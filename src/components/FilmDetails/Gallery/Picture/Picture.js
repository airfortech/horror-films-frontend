import React from "react";
import { imgBaseUrl, imgSize } from "../../../../variables";
import style from "./Picture.module.css";

export const Picture = ({ src, index, openModal }) => {
  return (
    <div>
      <li className={style.picture} onClick={() => openModal(src, index + 1)}>
        <img
          src={imgBaseUrl + imgSize.w342 + src}
          alt={"Picture number " + index}
        />
        <div className={style.cover}>
          <i className="bx bx-zoom-in"></i>
        </div>
      </li>
    </div>
  );
};
