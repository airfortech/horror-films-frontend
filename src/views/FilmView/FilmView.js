import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useParams, useNavigate } from "react-router-dom";
import { FadeOutEdges } from "../../components/HOCs/FadeOutEdges/FadeOutEdges";
import { fetchFilm } from "../../tools/fetchFilm";
import { FilmDetails } from "../../components/FilmDetails/FilmDetails";

import style from "./FilmView.module.css";

export const FilmView = () => {
  const ref = useRef(null);
  const { id, lang } = useParams();
  const [film, setFilm] = useState(null);
  const navigate = useNavigate();

  const getFilm = async () => {
    try {
      console.log(id, lang);
      const data = await fetchFilm(id, lang);
      setFilm(data);
      gsap.fromTo(
        ref.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "sine.in" }
      );
    } catch (error) {
      console.log("error blabla");
      navigate(`/${lang}/films/no-results`);
      return;
    }
  };

  useEffect(() => {
    getFilm();
  }, [lang]);

  if (!film) return <div></div>;

  return (
    <FadeOutEdges ref={ref} className={style.container} fadingSize={"12%"}>
      <FilmDetails film={film} />
    </FadeOutEdges>
  );
};

// zebrać dane w danym jęzuku a jak nie ma np overview, dorzucić wersję angielską i komunikat wyrzucać, że jest taka wersja dostępna i by zmienić język

// id
// title
// original_title
// overview - "" || string
// vote_average
// popularity
// release_date
// poster_path
// tagline
// budget
// revenue (dochód)
// genres
// runtime (czas trwania)

// video
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=xxxxx&language=de
// "key": "elqO-GNfStM"
// https://www.youtube.com/watch?v=elqO-GNfStM
// jesli "results": [], mozna szukac po "en"

// credits
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=xxxxxx

// cast - aktorzy (np max 10)
// "name": "Johnny Depp",
// "profile_path": "/ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg",
// https://image.tmdb.org/t/p/w138_and_h175_face/ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg

// crew
// "job": "Screenplay", np pierwszych 3
// "job": "Writer", jeśli nie ma "Screenplay"
// "job": "Director"
// "name": "Gore Verbinski",
// "profile_path": "/rSQRdmLNAwdKxrtvBSSlBmWeSsj.jpg",

// images - galeria + modal - poszukac libki
// https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=xxxxxxx
// "backdrops"
// "posters"

const film = {
  id: 60735,
  title: "The Moomin Characters",
  original_title: "The Moomin Characters",
  overview:
    "" ||
    "Mummifamilien har ligget i vinterdvale i flere måneder og drømt om sol og sommer. Men så kommer",
  /* if(!overview) fetchFrom("api/film/60735") */
  overview_en: "" || "English overview",
  vote_average: 9,
  popularity: 5.072,
  release_date: "1990-01-01",
  /* if(!poster_path) fetchFrom("api/film/60735") */
  poster_path: "/mjR4GQQGAtuY0YT8lNcXr9Ln9CV.jpg",
  tagline: "Captain Jack is back!",
  /* 0 - unknown */
  budget: 0,
  /* 0 - unknown */
  revenue: 0,
  /* 0 - unknown */
  runtime: 95,
  genres: [
    {
      id: 27,
      /* zostawic same name bez horrorow (sa juz przetlumaczone) */
      name: "Horror",
    },
    {
      id: 53,
      name: "Thriller",
    },
  ],
  /* ze zmiennej key, jesli results = [] fetchowac z en i pobrac index 0 */
  video: "elqO-GNfStM",
  /* ustawic max liczbe aktorow, domyslnei 10 pierwszych */
  cast: [
    {
      name: "Johnny Depp",
      original_name: "Johnny Depp",
      profile_path: "/ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg",
    },
  ],
  /* "job": "Director" */
  director: [
    {
      name: "Gore Verbinski",
      original_name: "Gore Verbinski",
      profile_path: "/ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg",
    },
  ],
  /* polaczyc z "job": "Writer" */
  screenplay: [
    {
      name: "Ted Elliott",
      original_name: "Ted Elliott",
      profile_path: "/ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg",
    },
  ],
  /* backdrops + posters */
  images: [
    {
      aspect_ratio: 1.778,
      file_path: "/8zfRLCgKrLAc5SSnACz8ZqmeKAP.jpg",
    },
  ],
};
