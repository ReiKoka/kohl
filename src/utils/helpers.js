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

export const handleImageLoad = (event, index, setImageAspectRatios) => {
  const img = event.target;
  const { naturalWidth, naturalHeight } = img;

  let aspectRatioType = "square";
  if (naturalHeight > naturalWidth) {
    aspectRatioType = "portrait";
  } else if (naturalWidth > naturalHeight) {
    aspectRatioType = "landscape";
  }

  setImageAspectRatios((prevRatios) => ({
    ...prevRatios,
    [index]: aspectRatioType,
  }));
};

export const handleAddToCart = (e, setCart, product, quantity, notify) => {
  e.stopPropagation();
  setCart((prev) => {
    const existingProduct = prev.find(
      (item) => item.id === product.id,
    );
    if (existingProduct) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      );
    }
    return [...prev, { ...product, quantity: quantity }];
  });
  notify();
}

export function capitalizeFirstLetter(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }
  const firstChar = str.charAt(0).toUpperCase();
  const restOfString = str.slice(1);
  return firstChar + restOfString;
}

