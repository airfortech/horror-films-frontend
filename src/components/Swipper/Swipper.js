import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import style from "./Swipper.module.css";

export const Swipper = () => {
  return (
    <Swiper
      className={style.swipper}
      modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      mousewheel={true}
      // onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
        <img
          className="img"
          alt="ad"
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/hFBWwWyOWSEuaPVAf6tnMfVr2JE.jpg"
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          alt="ad"
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/hFBWwWyOWSEuaPVAf6tnMfVr2JE.jpg"
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          alt="ad"
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/hFBWwWyOWSEuaPVAf6tnMfVr2JE.jpg"
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          alt="ad"
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/hFBWwWyOWSEuaPVAf6tnMfVr2JE.jpg"
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          alt="ad"
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/hFBWwWyOWSEuaPVAf6tnMfVr2JE.jpg"
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          alt="ad"
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/hFBWwWyOWSEuaPVAf6tnMfVr2JE.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
};
