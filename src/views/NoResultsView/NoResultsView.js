import React, { useRef, useContext, useEffect } from "react";
import { gsap } from "gsap";
import style from "./NoResultsView.module.css";
import { LanguageContext } from "../../context/LanguageContext/LanguageContext";

export const NoResultsView = () => {
  const { translations } = useContext(LanguageContext);
  const ref = useRef(null);

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
  }, [translations.noFilmsFound]);

  return (
    <p ref={ref} className={style.noFilmsFound}>
      {translations.noFilmsFound}
    </p>
  );
};
