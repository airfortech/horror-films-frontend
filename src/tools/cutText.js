export const cutText = (text, maxChars) => {
  return text.slice(0, maxChars) + (text.length > maxChars ? "..." : "");
};
