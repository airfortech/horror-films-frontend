export const formatCurrency = value => {
  const result = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
  }).format(value);
  return result[0] + " " + result.slice(1);
};
