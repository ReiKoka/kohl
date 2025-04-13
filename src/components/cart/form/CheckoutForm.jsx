import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { useCart } from "../../../hooks/useCart";
import { useNavigate } from "react-router";
import { EnvelopeSimple, Phone, User } from "@phosphor-icons/react";

import FormInput from "./FormInput";
import { handleSubmit } from "./formMethods";

const emptyFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const errorsData = {
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
}

function CheckoutForm({ isOpenForm, setIsOpenForm }) {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(emptyFormData);
  const [errors, setErrors] = useState(errorsData);

  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  useOnClickOutside(formRef, () => {
    if (isOpenForm) {
      setIsOpenForm(false);
    }
  });

  return (
    <div
      ref={formRef}
      className={`bg-base-200 // Keep for smooth exit fixed bottom-0 left-0 z-50 flex h-[80svh] w-full flex-col rounded-t-3xl p-4 md:p-6 shadow-custom-2 transition-all duration-700 ease-in-out md:h-[60svh] md:rounded-t-4xl ${
        isOpenForm
          ? "animate-fade-up animate-duration-700 animate-ease-out translate-y-0"
          : "translate-y-full"
      } `}
      aria-hidden={!isOpenForm}
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-heading"
    >
      <h1 className="font-primary text-secondary pb-6 text-center text-2xl md:text-3xl md:pb-8 font-semibold">
        Checkout
      </h1>
      <form
        onSubmit={(e) => handleSubmit(e, formData, cart, navigate, setCart, setFormData)}
        className="flex w-full md:w-1/2 md:mx-auto grow flex-col items-center gap-4"
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
