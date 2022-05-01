import React, {
  useContext,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import style from "./FilmsList.module.css";
import { Slider } from "./Slider/Slider";
import { Pagination } from "./Pagination/Pagination";
import { gsap } from "gsap";
import { Fog } from "../../effects/Fog/Fog";
import { LanguageContext } from "../../context/LanguageContext/LanguageContext";
import { fetchFilms } from "../../tools/fetchFilms";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export const FilmsList = () => {
  const { translations } = useContext(LanguageContext);
  const [films, setFilms] = useState("");
  const ref = useRef(null);
  console.log("Odpalamy filmlist");
  const [searchParams] = useSearchParams();
  const params = useParams();

  const getFilms = async () => {
    const newSearchParams = searchParams;
    newSearchParams.set("language", params.lang);
    const newFilms = await fetchFilms(newSearchParams.toString());
    setFilms(newFilms);
  };

  useEffect(() => {
    console.log("films update");
    console.log(searchParams.toString());
    getFilms();
  }, [params.lang, searchParams]);

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
  }, [films]);

  if (!films?.films || films.count === 0)
    return (
      <p ref={ref} className={style.noFilmsFound}>
        {translations.noFilmsFound}
      </p>
    );
  return (
    <section className={style.list}>
      <Pagination page={films.page} pages={films.pages} />
      <Slider films={films.films} />
    </section>
  );
};
