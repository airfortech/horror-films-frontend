import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FilmsList } from "../../components/FilmsList/FilmsList";
import { gsap } from "gsap";
import style from "./FilmsView.module.css";

export const FilmsView = () => {
  const ref = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "sine.in" }
    );
  }, [pathname]);

  return (
    <div className={style.filmsView} ref={ref}>
      {<FilmsList />}
    </div>
  );
};
