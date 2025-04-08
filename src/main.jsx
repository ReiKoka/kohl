import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import "./assets/styles/embla.css";
import App from "./App.jsx";
import { NavProvider } from "./context/NavContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </NavProvider>
  </StrictMode>,
);
