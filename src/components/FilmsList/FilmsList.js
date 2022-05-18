import React, { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { Slider } from "./Slider/Slider";
import { Pagination } from "./Pagination/Pagination";
import { fetchFilms } from "../../tools/fetchFilms";
import style from "./FilmsList.module.css";

export const FilmsList = () => {
  const [films, setFilms] = useState("");
  const [searchParams] = useSearchParams();
  const { lang } = useParams();
  const navigate = useNavigate();

  const getFilms = async () => {
    try {
      const newSearchParams = searchParams;
      newSearchParams.set("language", lang);
      const newFilms = await fetchFilms(newSearchParams.toString());
      setFilms(newFilms);
      return newFilms.count;
    } catch (error) {
      if (error.message === "Failed to fetch")
        navigate(`/${lang}/films/server-error`);
      else navigate(`/${lang}/films/no-results`);
      return;
    }
  };

  useEffect(() => {
    (async function () {
      const numberOfFilms = await getFilms();
      if (numberOfFilms === 0) navigate(`/${lang}/films/no-results`);
    })();
  }, [lang, searchParams]);

  if (!films?.films || films.count === 0) {
    return <div></div>;
  }
  return (
    <section className={style.list}>
      <div></div>
      <div>
        <Pagination page={films.page} pages={films.pages} />
        <Slider films={films.films} />
      </div>
      <div></div>
    </section>
  );
};
