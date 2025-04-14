import { useState } from "react";
import { useCart } from "../../../hooks/useCart";
import { useNavigate } from "react-router";
import { handleSubmit } from "./formMethods";
import { EnvelopeSimple, Phone, User } from "@phosphor-icons/react";
import FormInput from './FormInput';

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
};

function CheckoutForm() {
  const [formData, setFormData] = useState(emptyFormData);
  const [errors, setErrors] = useState(errorsData);
  const { cart, setCart } = useCart();
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, formData, cart, navigate, setCart, setFormData)
      }
      className="flex w-full grow flex-col items-center gap-4 md:mx-auto md:w-1/2 lg:w-full lg:grow "
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
  );
}

export default CheckoutForm;
