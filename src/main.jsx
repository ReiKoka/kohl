import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import "./assets/styles/embla.css";
import App from "./App.jsx";
import { NavProvider } from "./context/NavContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavProvider>
      <CartProvider>
        <App />
        <ToastContainer />
      </CartProvider>
    </NavProvider>
  </StrictMode>,
);
