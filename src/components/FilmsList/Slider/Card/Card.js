import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Card.module.css";
import { LanguageContext } from "../../../../context/LanguageContext/LanguageContext";
import { convertDate } from "../../../../tools/convertDate";
import { imgPosterUrl } from "../../../../variables";
import { cutText } from "../../../../tools/cutText";
import defaultPoster from "../../../../assets/images/default-poster.png";

export const Card = props => {
  const { lang } = useParams();
  const [active, setActive] = useState(false);
  const languageContext = useContext(LanguageContext);
  const { translations } = languageContext;
  const {
    id,
    title,
    overview,
    vote_average,
    release_date,
    poster_path,
    windowWidth,
  } = props;
  const date = convertDate(release_date, translations.months);

  const cutOvierviewText = text => {
    return windowWidth > 560 ? cutText(text, 200) : cutText(text, 80);
  };

  const generateURL = (id, title) => {
    return `${id}-${title}`.replace(/\s+/g, "-");
  };

  return (
    <div
      className={style.card}
      onClick={() => setActive(prevState => !prevState)}
      onMouseLeave={() => setActive(false)}
    >
      <div className={style.image}>
        <img src={defaultPoster} alt={""} className={style.defaultImage} />
        {poster_path && (
          <img
            src={imgPosterUrl + poster_path}
            alt={title + " poster"}
            className={style.loadedImage}
          />
        )}
      </div>
      <div className={style.voteAverage}>
        {vote_average * 10}
        <span>%</span>
      </div>
      <div className={style.info}>
        <div className={active ? style.active : ""}>
          <p className={style.date}>{date}</p>
          <p className={style.title}>{cutText(title, 60)}</p>
          <p className={style.overview}>{cutOvierviewText(overview)}</p>
          <Link
            to={`/${lang}/films/${generateURL(id, title)}`}
            className={style.moreInfo}
          >
            <p>{translations.cardMoreInfoButton}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
