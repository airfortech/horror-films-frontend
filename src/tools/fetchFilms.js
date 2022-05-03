import { getFilmsUrl } from "../variables";

export const fetchFilms = async params => {
  try {
    console.log("fetchujemy film: " + getFilmsUrl + params);
    const res = await fetch(getFilmsUrl + params);
    // return res.json();
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error: " + error.message);
  }
};
