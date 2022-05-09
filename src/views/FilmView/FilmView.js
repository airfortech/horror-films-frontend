import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useParams } from "react-router-dom";
import { FadeOutEdges } from "../../components/HOCs/FadeOutEdges/FadeOutEdges";
import style from "./FilmView.module.css";

export const FilmView = () => {
  const ref = useRef(null);
  const { id } = useParams();
  const [pos, setPos] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "sine.in" }
    );
  }, [id]);

  useEffect(() => {
    console.log(pos);
    setPos(prevState => prevState + 1);
  }, []);

  return (
    <FadeOutEdges ref={ref} className={style.container} fadingSize={"80%"}>
      <section
        // ref={ref}
        className={style.filmView + " " /* + style.mask */}
        // onScroll={handleScroll}
      >
        <h2>Film: {id}</h2>
        <br></br>
        <h3>What is Lorem Ipsum?</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <br></br>
        <h3>Where does it come from?</h3>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
        <br></br>
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
        <br></br>
        <h3>Why do we use it?</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </section>
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
