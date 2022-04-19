import React from "react";
import style from "./Avatar.module.css";
import avatarImg from "../../../assets/images/avatar.jpg";

export const Avatar = props => {
  return (
    <img
      className={`${style.avatar} ${props.small && style.small}`}
      src={props.avatarSrc ? props.avatarSrc : avatarImg}
      alt=""
    />
  );
};
