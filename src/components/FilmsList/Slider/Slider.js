import React, { useContext, useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Mousewheel } from "swiper";
import { gsap } from "gsap";
import { Card } from "./Card/Card";
import { QueryContext } from "../../../context/QueryContext/QueryContext";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/scrollbar";
import style from "./Slider.module.css";

export const Slider = () => {
  console.log("odpalamy slidera");
  const { films } = useContext(QueryContext);
  const ref = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log("Animations");
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "sine.in" }
    );
  }, [films]);

  useEffect(() => {
    const widthListener = window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    return () => window.removeEventListener(widthListener);
  }, []);

  return (
    <div ref={ref} className={style.slider + " " + style.mask}>
      <Swiper
        modules={[Scrollbar, Mousewheel]}
        spaceBetween={20}
        // slidesPerView={3}
        /* strzałki nawigacyjne */
        // navigation
        /* ilość widocznych slajdów, "auto" jest bardziej responsywne */
        slidesPerView="auto"
        /* liczba slajdów, o które ma przewijać się slajder */
        slidesPerGroup={1}
        /* "horizontal" lub "vertical" */
        direction="horizontal"
        // gridRows={2}
        /* centruje slajdy jeśli jest ich mniej niż szerokość slajdera */
        centerInsufficientSlides={true}
        /* aktywny slajd jest wycentrowany */
        centeredSlides={false}
        scrollbar={{ draggable: true }}
        mousewheel={true}
        breakpoints={{
          570: {
            slidesPerGroup: 2,
          },
        }}
        // onSwiper={swiper => console.log(swiper)}
        // onSlideChange={swiper => console.log(swiper.slides[swiper.activeIndex])}
      >
        {films.films.map(
          ({
            id,
            title,
            overwiew,
            vote_average,
            release_date,
            poster_path,
          }) => (
            <SwiperSlide key={id} className={style.slide}>
              <Card
                id={id}
                title={title}
                overview={overwiew}
                vote_average={vote_average}
                release_date={release_date}
                poster_path={poster_path}
                windowWidth={windowWidth}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};
