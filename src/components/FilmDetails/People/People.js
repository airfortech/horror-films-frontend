import React from "react";
import { PersonInfo } from "../PersonInfo/PersonInfo";
import style from "./People.module.css";

export const People = ({ title, people }) => {
  return (
    <section className={style.cast}>
      <p>{title}</p>
      <ul>
        {people.map(person => (
          <PersonInfo key={person.id} {...person} />
        ))}
      </ul>
    </section>
  );
};
