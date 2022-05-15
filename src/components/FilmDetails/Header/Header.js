import React, { useContext } from "react";
import { imgPosterUrl } from "../../../variables";
import { minutesToHours } from "../../../tools/minutesToHours";
import { formatCurrency } from "../../../tools/formatCurrency";
import { LanguageContext } from "../../../context/LanguageContext/LanguageContext";
import style from "./Header.module.css";
import { Tooltip } from "../../Tooltip/Tooltip";

export const Header = ({
  title,
  release_date,
  runtime,
  genres,
  vote_average,
  vote_count,
  tagline,
  original_title,
  budget,
  revenue,
  poster_path,
  overview,
}) => {
  const { translations } = useContext(LanguageContext);

  return (
    <header className={style.header}>
      {poster_path && (
        <img
          className={style.img}
          src={imgPosterUrl + poster_path}
          alt={title + " poster"}
        ></img>
      )}
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
        <Tooltip title={vote_count + " " + translations.filmDetails.votesCount}>
          <p>
            {vote_average * 10}
            <span>%</span>
          </p>
        </Tooltip>
        <p>{translations.filmDetails.usersRating}</p>
      </div>
      <div className={style.secondaryInfo}>
        <p>{translations.filmDetails.originalTitle}:</p>
        <p> {original_title}</p>
        <p>{translations.filmDetails.budget}: </p>
        <p>
          {budget ? formatCurrency(budget) : translations.filmDetails.noInfo}
        </p>
        <p>{translations.filmDetails.revenue}:</p>
        <p>
          {revenue ? formatCurrency(revenue) : translations.filmDetails.noInfo}
        </p>
      </div>
      {overview && (
        <p className={style.overview}>
          <i className="bx bxs-quote-right"></i>
          {overview}
          <i className="bx bxs-quote-right"></i>
        </p>
      )}
    </header>
  );
};
