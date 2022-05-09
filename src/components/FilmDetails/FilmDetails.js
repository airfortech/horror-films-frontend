import React from "react";
import { Header } from "./Header/Header";
import style from "./FilmDetails.module.css";

export const FilmDetails = ({ film }) => {
  const {
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
  } = film;
  console.log(title);
  return (
    <section
      // ref={ref}
      className={style.filmView + " " /* + style.mask */}
      // onScroll={handleScroll}
    >
      <Header
        title={title}
        release_date={release_date}
        runtime={runtime}
        genres={genres}
        vote_average={vote_average}
        tagline={tagline}
        original_title={original_title}
        budget={budget}
        revenue={revenue}
        poster_path={poster_path}
        overview={overview}
      />
    </section>
  );
};
