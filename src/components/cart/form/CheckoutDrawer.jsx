import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import CheckoutForm from "./CheckoutForm";

function CheckoutDrawer({ isOpenForm, setIsOpenForm }) {
  const formRef = useRef(null);

  useOnClickOutside(formRef, () => {
    if (isOpenForm) {
      setIsOpenForm(false);
    }
  });

  return (
    <div
      ref={formRef}
      className={`bg-base-200 // Keep for smooth exit shadow-custom-2 fixed bottom-0 left-0 z-50 flex h-[80svh] w-full flex-col rounded-t-3xl p-4 transition-all duration-700 ease-in-out md:h-[60svh] md:rounded-t-4xl md:p-6 ${
        isOpenForm
          ? "animate-fade-up animate-duration-700 animate-ease-out translate-y-0"
          : "translate-y-full"
      } `}
      aria-hidden={!isOpenForm}
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-heading"
    >
      <h1 className="font-primary text-secondary pb-6 text-center text-2xl font-semibold md:pb-8 md:text-3xl">
        Checkout
      </h1>
      <CheckoutForm />
    </div>
  );
}

export default CheckoutDrawer;
