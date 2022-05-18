import React from "react";
import { imgPersonUrl } from "../../../variables";
import defaultAvatar from "../../../assets/images/default-avatar.png";
import style from "./PersonInfo.module.css";

export const PersonInfo = ({ name, character, profile_path }) => {
  return (
    <li key={name} className={style.personInfo}>
      <div className={style.image}>
        <img
          src={defaultAvatar}
          alt={"photograph of " + name}
          className={style.defaultImage}
        />
        {profile_path && (
          <img
            src={imgPersonUrl + profile_path}
            alt={"photograph of " + name}
            className={style.loadedImage}
          />
        )}
      </div>
      <div className={style.info}>
        <p className={style.name}>{name}</p>
        {character && <p className={style.character}>{character}</p>}
      </div>
    </li>
  );
};
