import { getFilmUrl, getFilmUrlParams } from "../variables";

export const fetchFilm = async (id, language) => {
  try {
    const { backdrops, posters, cast } = getFilmUrlParams;
    const url = `${getFilmUrl}${id}?language=${language}&backdrops=${backdrops}&posters=${posters}&cast=${cast}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
