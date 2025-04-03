import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import "./assets/styles/embla.css";
import App from "./App.jsx";
import { NavProvider } from "./context/NavContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavProvider>
      <App />
    </NavProvider>
  </StrictMode>
);
