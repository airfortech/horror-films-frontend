import React from "react";
import { imgPosterUrl } from "../../../variables";
import { minutesToHours } from "../../../tools/minutesToHours";
import style from "./Header.module.css";

export const Header = ({
  title,
  release_date,
  runtime,
  genres,
  vote_average,
  tagline,
  original_title,
  budget,
  revenue,
  poster_path,
  overview,
}) => {
  return (
    <header className={style.header}>
      {poster_path && (
        <img
          className={style.img}
          src={imgPosterUrl + poster_path}
          alt={title + " poster"}
        ></img>
      )}
      <div className={style.info}>
        <div className={style.mainInfo}>
          <h2>{title}</h2>
          <div>
            <p>{release_date.split("-").reverse().join(".")}</p>
            <p>{minutesToHours(runtime)}</p>
          </div>
          <p>{genres.join(", ")}</p>
        </div>

        {tagline && <p className={style.tagline}>{tagline}</p>}
        <div className={style.vote}>
          <p>
            {vote_average * 10}
            <span>%</span>
          </p>
          <p>Ocena użytkowników</p>
        </div>
        <div className={style.secondaryInfo}>
          <p>Oryginal title:</p>
          <p> {original_title}</p>
          <p>Budget: </p>
          <p>
            {" "}
            {new Intl.NumberFormat("en-us", {
              currency: "USD",
              style: "currency",
            }).format(budget)}
          </p>
          <p>Revenue:</p>
          <p>
            {" "}
            {new Intl.NumberFormat("en-us", {
              currency: "USD",
              style: "currency",
            }).format(revenue)}
          </p>
        </div>
        <p className={style.overview}>
          <i class="bx bxs-quote-right"></i>
          {overview}
          <i class="bx bxs-quote-right"></i>
        </p>
      </div>
    </header>
  );
};
