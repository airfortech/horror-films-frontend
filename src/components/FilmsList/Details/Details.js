import React from "react";
import style from "./Details.module.css";
import { Avatar } from "../Avatar/Avatar";

export const Details = () => {
  return (
    <div className={style.card}>
      <Avatar avatarSrc="https://i.pravatar.cc/300" />
      <p className={style.name}>John Doe</p>
      <ul className={style.moreInfo}>
        <li className={style.li}>
          <p className={style.key}>gender</p>
          <p className={style.value}>male</p>
        </li>
        <li className={style.li}>
          <p className={style.key}>city</p>
          <p className={style.value}>Chicago</p>
        </li>
        <li className={style.li}>
          <p className={style.key}>email</p>
          <p className={style.value}>email@gmail.com</p>
        </li>
        <li className={style.li}>
          <p className={style.key}>phone</p>
          <p className={style.value}>042-873-60-73</p>
        </li>
      </ul>
    </div>
  );
};
