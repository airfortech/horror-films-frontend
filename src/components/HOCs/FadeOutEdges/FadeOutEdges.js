import React, { useEffect, forwardRef, useRef } from "react";
import style from "./FadeOutEdges.module.css";

export const FadeOutEdges = forwardRef(
  (
    { fadingSize = "12%", maxOffset = 154, children, className, ...props },
    ref
  ) => {
    const div = useRef(null);
    const fadingSizeValue = Number(fadingSize.match(/\d+/));
    const fadingSizeUnit = fadingSize.match(/\D+/).toString();

    const handleScroll = () => {
      const topPosition = div.current.scrollTop;
      const bottomPosition =
        div.current.scrollHeight - div.current.offsetHeight - topPosition;
      const maxHeight = div.current.scrollHeight - div.current.offsetHeight;

      const topMaskSize =
        topPosition > maxOffset
          ? fadingSizeValue
          : (fadingSizeValue * topPosition) / maxOffset;
      div.current.style.setProperty(
        "--mask-size-top",
        topMaskSize + fadingSizeUnit
      );

      let bottomMaskSize = 0;
      if (maxHeight > 0)
        bottomMaskSize =
          bottomPosition > maxOffset
            ? fadingSizeValue
            : (fadingSizeValue * bottomPosition) / maxOffset;

      div.current.style.setProperty(
        "--mask-size-bottom",
        bottomMaskSize + fadingSizeUnit
      );
    };

    useEffect(() => {
      handleScroll();
      window.addEventListener("resize", handleScroll);
      return () => {
        window.removeEventListener("resize", handleScroll);
      };
    }, []);

    return (
      <div
        ref={node => {
          div.current = node;
          ref.current = node;
        }}
        className={className + " " + style.fadingEdges}
        {...props}
        onScroll={handleScroll}
      >
        {children}
      </div>
    );
  }
);
