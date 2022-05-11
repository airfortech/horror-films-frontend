import React, { useState } from "react";
import { Header } from "./Header/Header";
import { Filmmakers } from "./Filmmakers/Filmmakers";
import { Cast } from "./Cast/Cast";
import { Gallery } from "./Gallery/Gallery";
import { Modal } from "./Gallery/Modal/Modal";
import { VideoPlayer } from "./VideoPlayer/VideoPlayer";
import style from "./FilmDetails.module.css";

export const FilmDetails = ({ film }) => {
  const {
    title,
    release_date,
    runtime,
    genres,
    vote_average,
    tagline,
    original_title,
    budget,
    revenue,
    poster_path,
    overview,
    directors,
    screenplay,
    cast,
    backdrops,
    posters,
    video_url,
  } = film;
  console.log(title);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageProps, setImageProps] = useState(null);

  function openModal(url, index) {
    setIsOpen(true);
    setImageProps({ url, index });
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className={style.filmView}>
      <Modal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={imageProps?.url}
        index={imageProps?.index}
      />
      <Header
        title={title}
        release_date={release_date}
        runtime={runtime}
        genres={genres}
        vote_average={vote_average}
        tagline={tagline}
        original_title={original_title}
        budget={budget}
        revenue={revenue}
        poster_path={poster_path}
        overview={overview}
      />
      <Filmmakers directors={directors} screenplay={screenplay} />
      <Cast cast={cast} />
      <VideoPlayer src={video_url} />
      <Gallery items={backdrops} title="Gallery" openModal={openModal} />
      <Gallery items={posters} title="Posters" openModal={openModal} />
    </section>
  );
};
