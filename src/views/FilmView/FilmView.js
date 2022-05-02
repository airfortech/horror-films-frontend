import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useParams } from "react-router-dom";

export const FilmView = () => {
  const ref = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "sine.in" }
    );
  }, [id]);

  return <div ref={ref}>Film: {id}</div>;
};

// id
// title
// original_title
// overview
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
