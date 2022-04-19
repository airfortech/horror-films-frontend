import React from "react";
import style from "./Person.module.css";
import { Avatar } from "../../Avatar/Avatar";

export const Person = props => {
  return (
    <li className={`${style.person} ${props.active && style.active}`}>
      <div className={style.moreInfo}>
        <p className={style.name}>John Doe</p>
        <p className={style.key}>Gender: male</p>
        <p className={style.key}>Location: Chicago</p>
      </div>
      <Avatar small avatarSrc={props.avatarSrc} />
    </li>
  );
};
