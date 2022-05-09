export const minutesToHours = min => {
  var hours = Math.floor(min / 60);
  var minutes = min % 60;

  return (hours ? hours + "h " : "") + minutes + "m";
};
