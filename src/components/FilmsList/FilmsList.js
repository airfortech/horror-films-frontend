import React, { useEffect, useState } from "react";
import style from "./FilmsList.module.css";
import { Slider } from "./Slider/Slider";
import { Pagination } from "./Pagination/Pagination";
import { fetchFilms } from "../../tools/fetchFilms";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

export const FilmsList = () => {
  const [films, setFilms] = useState("");
  console.log("Odpalamy filmslist");
  const [searchParams] = useSearchParams();
  const params = useParams();
  const navigate = useNavigate();

  const getFilms = async () => {
    const newSearchParams = searchParams;
    newSearchParams.set("language", params.lang);
    const newFilms = await fetchFilms(newSearchParams.toString());
    setFilms(newFilms);
    return newFilms.count;
  };

  useEffect(() => {
    (async function () {
      const result = await getFilms();
      console.log(result);
      if (!result) navigate(`/${params.lang}/films/no-results`);
    })();
  }, [params.lang, searchParams]);

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
