import React, { useContext, useState } from "react";
import style from "./Card.module.css";
import { LanguageContext } from "../../../../context/LanguageContext/LanguageContext";
import { convertDate } from "../../../../tools/convertDate";
import { imgPosterUrl } from "../../../../variables";
import { cutText } from "../../../../tools/cutText";
import defaultPoster from "../../../../assets/images/default-poster.png";

let windowWidth = 0;

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
});

const cutOvierviewText = text => {
  return windowWidth > 560 ? cutText(text, 200) : cutText(text, 80);
};

export const Card = props => {
  const [active, setActive] = useState(false);
  const languageContext = useContext(LanguageContext);
  const { translations } = languageContext;
  const { id, title, overview, vote_average, release_date, poster_path } =
    props;
  const date = convertDate(release_date, translations.months);
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
          <a href="#" type="button" className={style.moreInfo}>
            <p>{translations.cardMoreInfoButton}</p>
          </a>
        </div>
      </div>
    </div>
  );
};
