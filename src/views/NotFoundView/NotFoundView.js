import React, { useRef, useContext, useEffect } from "react";
import { gsap } from "gsap";
import style from "./NotFoundView.module.css";
import { LanguageContext } from "../../context/LanguageContext/LanguageContext";
import { useParams } from "react-router-dom";

export const NotFoundView = () => {
  const { translations } = useContext(LanguageContext);
  const ref = useRef(null);
  const { lang } = useParams();

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
  }, [lang]);

  return (
    <p ref={ref} className={style.notFoundView}>
      {translations.notFoundView}
    </p>
  );
};
