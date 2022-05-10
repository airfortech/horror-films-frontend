import React from "react";
import { PersonInfo } from "../PersonInfo/PersonInfo";
import style from "./Cast.module.css";

export const Cast = ({ cast }) => {
  return (
    <section className={style.cast}>
      <p>Cast</p>
      <ul>
        {cast.map(person => (
          <PersonInfo key={person.id} {...person} />
        ))}
      </ul>
    </section>
  );
};
