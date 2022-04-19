import React, { useContext, useRef, useEffect } from "react";
import style from "./FilmsList.module.css";
import { Slider } from "./Slider/Slider";
import { Pagination } from "./Pagination/Pagination";
import { gsap } from "gsap";
import { Fog } from "../../effects/Fog/Fog";
import { LanguageContext } from "../../context/LanguageContext/LanguageContext";
import { QueryContext } from "../../context/QueryContext/QueryContext";

export const FilmsList = () => {
  const { translations } = useContext(LanguageContext);
  const { films } = useContext(QueryContext);
  const ref = useRef(null);
  console.log("Odpalamy filmlist");

  useEffect(() => {
    console.log("Animations");
    gsap.set(ref.current, { opacity: 0 });
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      {
        opacity: 0.8,
        duration: 0.8,
        ease: "sine.in",
        delay: 0.3,
        onComplete: () => {
          console.log("ok");
        },
      }
    );
  }, [films.count, translations]);

  if (!films?.films || films.count === 0)
    return (
      <p ref={ref} className={style.noFilmsFound}>
        {translations.noFilmsFound}
      </p>
    );
  return (
    <section className={style.list}>
      <Pagination />
      <Slider />
    </section>
  );
};
