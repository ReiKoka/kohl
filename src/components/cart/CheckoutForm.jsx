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
    <tr>
      <td><img src="${item.product.images[0] || ""}" alt="item" style="width:50px;height:50px;"></td>
      <td>${item.product.primaryName}</td>
      <td>QTY: ${item.quantity}</td>
    </tr>
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
        "service_la91uiu",
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
