import React, { useContext, useState } from "react";
import style from "./Search.module.css";
import { Switcher } from "./Switcher/Switcher";
import { SwitcherIcon } from "./SwitcherIcon/SwitcherIcon";
import { LanguageContext } from "../../../context/LanguageContext/LanguageContext";
import { QueryContext } from "../../../context/QueryContext/QueryContext";

export const Search = () => {
  const [value, setValue] = useState("");
  const { translations } = useContext(LanguageContext);
  const { updateParams, updateFilms } = useContext(QueryContext);

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  const handleInputSend = e => {
    e.preventDefault();
    console.log("entered: " + value);
    const newParams = updateParams("title", value).toString();
    updateFilms(newParams);
  };

  return (
    <form className={style.form} onSubmit={handleInputSend}>
      <input
        className={style.input}
        type="text"
        placeholder={translations.searchInput}
        value={value}
        onChange={handleInputChange}
        // id="exampleInputEmail1"
        // aria-describedby="emailHelp"
      />
      <Switcher />
      <SwitcherIcon />
    </form>
  );
};
