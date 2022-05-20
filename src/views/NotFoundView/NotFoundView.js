import React, { useRef, useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext/LanguageContext";
import { gsap } from "gsap";
import style from "./NotFoundView.module.css";

export const NotFoundView = () => {
  const { translations } = useContext(LanguageContext);
  const ref = useRef(null);

  useEffect(() => {
    gsap.set(ref.current, { opacity: 0 });
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      {
        opacity: 0.8,
        duration: 0.8,
        ease: "sine.in",
        delay: 0.3,
      }
    );
  }, [translations.noFilmsFound]);

  return (
    <p ref={ref} className={style.notFoundView}>
      {translations.notFoundView}
    </p>
  );
};
