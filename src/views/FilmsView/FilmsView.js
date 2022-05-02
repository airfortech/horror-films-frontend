import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FilmsList } from "../../components/FilmsList/FilmsList";
import { useLocation } from "react-router-dom";

export const FilmsView = () => {
  const ref = useRef(null);
  const { pathname, search } = useLocation();

  useEffect(() => {
    console.log("newPath");
    console.log(search);
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "sine.in" }
    );
  }, [pathname]);

  return <div>{<FilmsList ref={ref} />}</div>;
};
