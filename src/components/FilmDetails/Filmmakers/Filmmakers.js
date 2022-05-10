import React from "react";
import { PersonInfo } from "../PersonInfo/PersonInfo";
import style from "./Filmmakers.module.css";

export const Filmmakers = ({ directors, screenplay }) => {
  return (
    <section className={style.filmmakers}>
      <div>
        <p>Direction</p>
        <ul>
          {directors.map(person => (
            <PersonInfo key={person.id} {...person} />
          ))}
        </ul>
      </div>
      <div>
        <p>Screenplay</p>
        <ul>
          {screenplay.map(person => (
            <PersonInfo key={person.id} {...person} />
          ))}
        </ul>
      </div>
    </section>
  );
};
