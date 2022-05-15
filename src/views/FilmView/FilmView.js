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
