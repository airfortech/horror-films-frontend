import React, { useState } from "react";
import { Header } from "./Header/Header";
import { People } from "./People/People";
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
    <div>
      <Modal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={imageProps?.url}
        index={imageProps?.index}
      />
      <section className={style.filmView}>
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
        {directors.length > 0 && (
          <People title="Direction" people={directors} />
        )}
        {screenplay.length > 0 && (
          <People title="Screenplay" people={screenplay} />
        )}
        {cast.length > 0 && <People title="Cast" people={cast} />}
        {video_url && <VideoPlayer src={video_url} />}
        {backdrops.length > 0 && (
          <Gallery items={backdrops} title="Gallery" openModal={openModal} />
        )}
        {posters.length > 0 && (
          <Gallery items={posters} title="Posters" openModal={openModal} />
        )}
      </section>
    </div>
  );
};
