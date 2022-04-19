export const convertDate = (date, translatedMonths) => {
  const newDate = date
    .split("-")
    .map(string => Number(string))
    .reverse();
  return `${newDate[0]} ${translatedMonths[newDate[1] - 1]} ${newDate[2]}`;
};
