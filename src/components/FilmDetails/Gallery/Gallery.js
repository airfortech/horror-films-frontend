import React from "react";
import { Picture } from "./Picture/Picture";
import style from "./Gallery.module.css";

export const Gallery = ({ items, title, openModal }) => {
  return (
    <div className={style.gallery}>
      <p>{title}</p>
      <ul>
        {items.map((item, i) => (
          <Picture key={item} src={item} index={i} openModal={openModal} />
        ))}
      </ul>
    </div>
  );
};
