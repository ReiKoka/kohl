import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { showToast } from "../../utils/showToast";
import { useCart } from "../../hooks/useCart";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router";
import { EnvelopeSimple, Phone, User } from "@phosphor-icons/react";

import FormInput from "./form/FormInput";

const emptyFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

function CheckoutForm({ isOpenForm, setIsOpenForm }) {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(emptyFormData);
  const [errors, setErrors] = useState({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
  });

  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  console.log(cart);

  useOnClickOutside(formRef, () => {
    if (isOpenForm) {
      setIsOpenForm(false);
    }
  });

  const handleSubmit = async (e) => {
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
      await emailjs.send(
        "service_1rxadtg",
        "template_7nhrk5h",
        templateParams,
        "JGYLDUx9juiD26eMC",
      );
      showToast("success", "Reserved Successfully, we''l be in touch shortly!");
      navigate("/");
      setCart([]);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      showToast("error", "Something Went Wrong!");
    }
  };

  return (
    <div
      ref={formRef}
      className={`bg-base-200 // Keep for smooth exit fixed bottom-0 left-0 z-50 flex h-[80svh] w-full flex-col rounded-t-3xl p-4 shadow-lg transition-all duration-700 ease-in-out ${
        isOpenForm
          ? "animate-fade-up animate-duration-700 animate-ease-out translate-y-0"
          : "translate-y-full"
      } `}
      aria-hidden={!isOpenForm}
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-heading"
    >
      <h1 className="font-primary text-secondary pb-6 text-center text-2xl font-semibold">
        Checkout
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex w-full grow flex-col items-center gap-4"
      >
        <FormInput
          value={formData.firstName}
          error={errors.firstName}
          setFormData={setFormData}
          setErrors={setErrors}
          name="firstName"
          labelText="first name"
          icon={User}
        />

        <FormInput
          value={formData.lastName}
          error={errors.lastName}
          setFormData={setFormData}
          setErrors={setErrors}
          name="lastName"
          labelText="last name"
          icon={User}
        />

        <FormInput
          value={formData.email}
          error={errors.email}
          setFormData={setFormData}
          setErrors={setErrors}
          name="email"
          labelText="email"
          icon={EnvelopeSimple}
          type="email"
        />

        <FormInput
          value={formData.phone}
          error={errors.phone}
          setFormData={setFormData}
          setErrors={setErrors}
          name="phone"
          labelText="phone number"
          icon={Phone}
          type="numeric"
        />

        <div className="mt-auto flex w-full gap-4">
          <button
            className="btn btn-outline font-primary flex-1/2"
            type="button"
            title="Clear fields"
            onClick={() => {
              setErrors({
                firstName: null,
                lastName: null,
                email: null,
                phone: null,
              });
              setFormData(emptyFormData);
            }}
          >
            Cancel
          </button>

          <button
            type="submit"
            title="Confirm Order"
            className="btn btn-primary font-primary flex-1/2"
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
