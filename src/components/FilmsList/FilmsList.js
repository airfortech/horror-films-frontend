import React, { useEffect, useState } from "react";
import style from "./FilmsList.module.css";
import { Slider } from "./Slider/Slider";
import { Pagination } from "./Pagination/Pagination";
import { fetchFilms } from "../../tools/fetchFilms";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

export const FilmsList = () => {
  const [films, setFilms] = useState("");
  console.log("Odpalamy filmlist");
  const [searchParams] = useSearchParams();
  const params = useParams();
  const navigate = useNavigate();

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

  if (!films?.films || films.count === 0) {
    navigate(`/${params.lang}/films/no-results`);
    console.log("blabla");
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
