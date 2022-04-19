import React, { createContext, useEffect, useState } from "react";
import { getFilmsUrlParams } from "../../variables";
import { fetchFilms } from "../../tools/fetchFilms";

export const QueryContext = createContext();

const searchParams = new URLSearchParams(getFilmsUrlParams);

export const QueryProvider = props => {
  const [params, setParams] = useState(searchParams);
  const [films, setFilms] = useState([]);

  const updateParams = (param, value) => {
    const newParams = params;
    newParams.set(param, value);
    setParams(newParams);
    return newParams;
  };

  const updateFilms = async params => {
    const newFilms = await fetchFilms(params);
    setFilms(newFilms);
  };

  useEffect(() => {
    updateFilms(params);
  }, []);

  return (
    <QueryContext.Provider value={{ updateParams, films, updateFilms }}>
      {props.children}
    </QueryContext.Provider>
  );
};
