import React from "react";
import style from "./People.module.css";
import { Person } from "./Person/Person";
import { useState, useRef, useEffect } from "react";

export const People = () => {
  const [scrollTopOpacity, handleScrollTopOpacity] = useState(0);
  const [scrollBottomOpacity, handleScrollBottomOpacity] = useState(0);

  const ulEl = useRef(null);

  const handleScroll = () => {
    const margin = 54;
    const speed = 2.5;
    const topPosition = ulEl.current.scrollTop;
    const maxHeight = ulEl.current.scrollHeight - ulEl.current.offsetHeight;

    handleScrollTopOpacity((topPosition / margin) * speed);
    if (maxHeight === 0) handleScrollBottomOpacity(0);
    else
      handleScrollBottomOpacity(((maxHeight - topPosition) / margin) * speed);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
  }, []);

  return (
    <div>
      {scrollTopOpacity && (
        <div
          className={style.scroll}
          style={{ opacity: scrollTopOpacity }}
        ></div>
      )}

      <ul className={style.people} onScroll={handleScroll} ref={ulEl}>
        <Person avatarSrc="https://i.pravatar.cc/300?img=3" />
        <Person avatarSrc="" />
        <Person active avatarSrc="https://i.pravatar.cc/300?img=4" />
        <Person avatarSrc="" />
        <Person avatarSrc="" />
        <Person avatarSrc="" />
        <Person avatarSrc="https://i.pravatar.cc/300?img=8" />
        <Person avatarSrc="https://i.pravatar.cc/300?img=9" />
        <Person avatarSrc="https://i.pravatar.cc/300?img=11" />
        {/* <Person avatarSrc="https://i.pravatar.cc/300?img=12" /> */}
        {/* <Person avatarSrc="https://i.pravatar.cc/300?img=31" /> */}
      </ul>
      {scrollBottomOpacity && (
        <div
          className={`${style.scroll} ${style.scrollBottom}`}
          style={{ opacity: scrollBottomOpacity }}
        ></div>
      )}
    </div>
  );
};
