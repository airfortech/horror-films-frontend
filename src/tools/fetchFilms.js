import { getFilmsUrl } from "../variables";

export const fetchFilms = async params => {
  try {
    const res = await fetch(getFilmsUrl + params);
    return res.json();
  } catch (error) {
    console.log("error: " + error.message);
  }
};
