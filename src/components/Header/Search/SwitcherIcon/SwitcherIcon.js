import React, { useState, useContext, useEffect } from "react";
import style from "./SwitcherIcon.module.css";
import { QueryContext } from "../../../../context/QueryContext/QueryContext";

const sortModes = [
  { type: "ascending", icon: "a-z" },
  { type: "descending", icon: "z-a" },
];

export const SwitcherIcon = () => {
  const [sortMode, setSortMode] = useState(sortModes[0]);
  const { updateParams } = useContext(QueryContext);

  const switchCategory = () => {
    setSortMode(() =>
      sortMode === sortModes[0] ? sortModes[1] : sortModes[0]
    );
  };

  useEffect(() => {
    console.log(sortMode);
    const newParams = updateParams("sort_type", sortMode.type).toString();
    console.log(newParams.toString());
  }, [sortMode]);

  return (
    <button
      type="button"
      className={style.switcherIcon}
      onClick={switchCategory}
    >
      <i className="bx bxs-sort-alt"></i>
    </button>
  );
};
