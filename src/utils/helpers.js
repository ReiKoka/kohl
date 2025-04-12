// export const formatPriceALL = (price, options = {}) => {
//   const { decimals = 2 } = options;

//   if (typeof price !== "number" || isNaN(price)) {
//     console.error("Invalid input for formatPriceALL: Price must be a number.");
//     return "";
//   }

//   try {
//     const numberFormatter = new Intl.NumberFormat("sq-AL", {

//       minimumFractionDigits: decimals,
//       maximumFractionDigits: decimals,
//     });
//     const formattedNumber = numberFormatter.format(price);
//     return `${formattedNumber} Lek`;
//   } catch (error) {
//     console.error("Error formatting price:", error);
//     return `${price.toFixed(decimals)} Lek`;
//   }
// }

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

export const handleAddToCart = (e, onAdd, product, notify, quantity) => {
  e.stopPropagation();
  onAdd(product, quantity)
  notify();
}

export const capitalizeFirstLetter = (str) => {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }
  const firstChar = str.charAt(0).toUpperCase();
  const restOfString = str.slice(1);
  return firstChar + restOfString;
}

export const validateTextField = (value, fieldName,) => {
  if (!value || !value.trim()) {
    return `${fieldName} is required!`;
  }
  if (/\d/.test(value)) {
    return `${fieldName} cannot contain numbers!`;
  }
  return null;
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email is required!";
  if (!emailRegex.test(email)) return "Please enter a valid email address.";
  return null;
};

export const validatePhoneNumber = (phoneNumber) => {
  const digitsOnly = phoneNumber.replace(/\D/g, '');

  if (!phoneNumber || !phoneNumber.trim()) {
    return "Phone number is required!";
  }

  if (digitsOnly.length < 7 || digitsOnly.length > 15) {
    return "Phone number must be between 7 and 15 digits!";
  }

  return null;
};