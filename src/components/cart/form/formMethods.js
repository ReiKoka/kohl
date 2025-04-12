import { validateEmail, validatePhoneNumber, validateTextField } from "../../../utils/helpers";

export const handleChange = (e, setFormData, setErrors) => {
  const { name, value } = e.target;

  setFormData((prev) => ({ ...prev, [name]: value }));

  let error = null;
  if (name === "firstName") {
    error = validateTextField(value, "First Name");
  } else if (name === "lastName") {
    error = validateTextField(value, "Last Name");
  } else if (name === "email") {
    error = validateEmail(value);
  } else if (name === 'phone') {
    error = validatePhoneNumber(value, "Phone Number")
  }

  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: error,
  }));
};