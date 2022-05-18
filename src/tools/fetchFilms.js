import { getFilmsUrl } from "../variables";

export const fetchFilms = async params => {
  try {
    const res = await fetch(getFilmsUrl + params);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
