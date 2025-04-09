export function formatPriceALL(price, options = {}) {
  const { decimals = 2 } = options;

  if (typeof price !== "number" || isNaN(price)) {
    console.error("Invalid input for formatPriceALL: Price must be a number.");
    return "";
  }

  try {
    const numberFormatter = new Intl.NumberFormat("sq-AL", {

      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    const formattedNumber = numberFormatter.format(price);
    return `${formattedNumber} Lek`;
  } catch (error) {
    console.error("Error formatting price:", error);
    return `${price.toFixed(decimals)} Lek`;
  }
}

export const normalizeString = (inputString) => {

  if (typeof inputString !== "string") {
    console.error("Invalid input: Expected a string.");
    return "";
  }

  return inputString.replace(/%20| /g, "");
};