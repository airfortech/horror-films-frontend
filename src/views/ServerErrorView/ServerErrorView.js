import React, { useRef, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext/LanguageContext";
import { gsap } from "gsap";
import style from "./ServerErrorView.module.css";

export const ServerErrorView = () => {
  const { translations } = useContext(LanguageContext);
  const ref = useRef(null);
  const { lang } = useParams();

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
  }, [lang]);

  return (
    <p ref={ref} className={style.serverErrorView}>
      {translations.serverError}
    </p>
  );
};
