export const categories = [
  "title",
  "release_date",
  "vote_average",
  "popularity",
];
export const imgBaseUrl = "https://image.tmdb.org/t/p/";
export const imgSize = {
  w92: "w92",
  w154: "w154",
  w185: "w185",
  w300: "w300",
  w342: "w342",
  w500: "w500",
  w780: "w780",
  w1280: "w1280",
  original: "original",
};
export const imgPosterUrl = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
export const imgPersonUrl =
  "https://www.themoviedb.org/t/p/w138_and_h175_face/";
// export const apiDomain = "http://localhost:3001/api";
export const apiDomain = "http://192.168.100.3:3001/api";
export const getFilmsUrl = apiDomain + "/films/?";
export const getFilmsUrlParams =
  "title=&page=1&sort_type=ascending&sort_by=title";
export const getFilmUrl = apiDomain + "/films/";
export const getFilmUrlParams = {
  backdrops: 20,
  posters: 6,
  cast: 10,
};
