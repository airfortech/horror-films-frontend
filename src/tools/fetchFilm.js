import { getFilmUrl, getFilmUrlParams } from "../variables";

export const fetchFilm = async (id, language) => {
  try {
    const { backdrops, posters, cast } = getFilmUrlParams;
    const url = `${getFilmUrl}${id}?language=${language}&backdrops=${backdrops}&posters=${posters}&cast=${cast}`;
    console.log("fetchujemy film: " + url);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error: " + error.message);
  }
};
