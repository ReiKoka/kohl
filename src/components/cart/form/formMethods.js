import { validateEmail, validatePhoneNumber, validateTextField } from "../../../utils/helpers";
import { showToast } from "../../../utils/showToast";
import emailjs from 'emailjs-com';

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

export const handleSubmit = async (e, formData, cart, navigate, setCart, setFormData, setIsSubmitting, emptyFormData) => {
  e.preventDefault();

  const firstName = formData.firstName;
  const lastName = formData.lastName;
  const email = formData.email;
  const phone = formData.phone;
  const numItems = cart.reduce((total, item) => total + item.quantity, 0);

  let itemsHTML = "";
  cart.forEach((item) => {
    itemsHTML += `
      <div style="width: 100%; border-bottom: 1px solid #777;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; padding: 15px 0;">
          <tr>
            <!-- Image Column -->
            <td width="90" style="width: 90px; padding-right: 15px; vertical-align: middle;">
              <div style="width: 80px; height: 120px; background: #f5f5f5; border-radius: 10px; text-align: center;">
                <!--[if mso]> <!-- Centering trick for Outlook -->
                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:120px;v-text-anchor:middle;width:80px;" arcsize="12%" strokecolor="#f5f5f5" fillcolor="#f5f5f5">
                  <w:anchorlock/>
                  <center style="color:#000000;font-family: 'Trebuchet MS', Helvetica, Arial, sans-serif;font-size:13px;font-weight:bold;">
                <![endif]-->
                    <img src="${item.product.images[0] || ""}" alt="${item.product.primaryName}" width="80" style="max-width: 80px; max-height: 120px; height: auto; object-fit: contain; border-radius: 10px; display: block; margin: 0 auto; vertical-align: middle;" border="0">
                <!--[if mso]>
                  </center>
                </v:roundrect>
                <![endif]-->
              </div>
            </td>

            <!-- Product Name Column (takes remaining space) -->
            <td style="padding-left: 10px; padding-right: 10px; font-weight: 700; font-family: 'Trebuchet MS', Helvetica, Arial, sans-serif; color: #B00B33; font-size: 16px; text-transform: capitalize; vertical-align: middle; text-align: left;">
              ${item.product.primaryName}
            </td>

            <!-- Quantity Column -->
            <td width="60" style="width: 60px; text-align: right; font-weight: 700; font-family: 'Trebuchet MS', Helvetica, Arial, sans-serif; vertical-align: middle;">
              QTY: ${item.quantity}
            </td>
          </tr>
        </table>
      </div>
    `;
  });

  const templateParams = {
    firstName,
    lastName,
    email,
    phone,
    numItems: numItems,
    itemsTable: itemsHTML,
  };

  try {
    setIsSubmitting(true);

    await emailjs.send(
      "service_1rxadtg",
      "template_7nhrk5h",
      templateParams,
      "JGYLDUx9juiD26eMC",
    );
    showToast(
      "success",
      "Order reservation successful, we will be in touch shortly!",
    );
    navigate("/");
    setCart([]);
    setFormData(emptyFormData);
  } catch (error) {
    console.error("Email sending failed:", error);
    showToast("error", "Something Went Wrong!");
  } finally {
    setIsSubmitting(false)
  }
};