import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { showToast } from "../../utils/showToast";
import { useCart } from "../../hooks/useCart";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router";
import { EnvelopeSimple } from "@phosphor-icons/react";

function CheckoutForm({ isOpenForm, setIsOpenForm }) {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
  });
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  useOnClickOutside(formRef, () => {
    if (isOpenForm) {
      setIsOpenForm(false);
    }
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      cart_items: cart
        .map((item) => `${item.primaryName} x${item.quantity}`)
        .join(", "),
    };

    try {
      await emailjs.send(
        "service_t0mscmh",
        "template_ksvvt0m",
        templateParams,
        "JGYLDUx9juiD26eMC",
      );
      showToast("success", "Reserved Successfully, we''l be in touch shortly!");
      navigate("/");
      setCart([]);
      setFormData({
        name: "",
        surname: "",
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
      className={`bg-base-200 // Keep for smooth exit fixed bottom-0 left-0 z-50 h-[70svh] w-full rounded-t-3xl p-4 shadow-lg transition-all duration-700 ease-in-out ${
        isOpenForm
          ? "animate-fade-up animate-duration-700 animate-ease-out translate-y-0"
          : "translate-y-full"
      } `}
      aria-hidden={!isOpenForm}
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-heading"
    >
      <h1 className="font-primary text-secondary pb-6 text-center text-xl font-semibold">
        Checkout
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-center "
      >
        <label className="input validator">
          <EnvelopeSimple strokeWidth={2} className="h-6 w-6 text-gray-400" />
          <input
            type="email"
            placeholder="johndoe@mail.com"
            required
            className="font-primary input-lg leading-0"
          />
        </label>
        <div className="validator-hint hidden">
          Please enter a valid email address
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
