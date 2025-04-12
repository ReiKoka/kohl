import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useCart } from "../../../hooks/useCart";

import { useNavigate } from "react-router";
import { showToast } from "../../../utils/showToast";

export const Form = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
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
    <div className="flex items-center justify-center p-6">
      <div className="bg-base-200 w-full max-w-md space-y-6 rounded-2xl p-8 shadow-xl">
        <h1 className="font-secondary text-secondary pt-4 text-center text-2xl font-normal uppercase md:text-3xl lg:text-4xl">
          Checkout Information
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Surname
            </label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your surname"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-2 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="you@example.com"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary font-primary focus-visible:ring-primary btn-sm ring-offset-base-300 md:btn-lg xl:btn-xl pointer-events-auto mt-4 rounded-full outline-0 focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            Reserve
          </button>
        </form>
      </div>
    </div>
  );
};
