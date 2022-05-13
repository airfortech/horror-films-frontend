import React, { useState, useContext } from "react";
import { Header } from "./Header/Header";
import { People } from "./People/People";
import { Gallery } from "./Gallery/Gallery";
import { Modal } from "./Gallery/Modal/Modal";
import { VideoPlayer } from "./VideoPlayer/VideoPlayer";
import { LanguageContext } from "../../context/LanguageContext/LanguageContext";
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
  const { translations } = useContext(LanguageContext);

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
          <People
            title={translations.filmDetails.direction}
            people={directors}
          />
        )}
        {screenplay.length > 0 && (
          <People
            title={translations.filmDetails.screenplay}
            people={screenplay}
          />
        )}
        {cast.length > 0 && (
          <People title={translations.filmDetails.cast} people={cast} />
        )}
        {video_url && <VideoPlayer src={video_url} />}
        {backdrops.length > 0 && (
          <Gallery
            items={backdrops}
            title={translations.filmDetails.gallery}
            openModal={openModal}
          />
        )}
        {posters.length > 0 && (
          <Gallery
            items={posters}
            title={translations.filmDetails.posters}
            openModal={openModal}
          />
        )}
      </section>
    </div>
  );
};
