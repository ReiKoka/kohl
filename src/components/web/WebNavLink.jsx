import { NavLink, useLocation } from "react-router";
import { useCart } from "./../../hooks/useCart";

function WebNavLink({ to, title }) {
  const { totalItems } = useCart();
  const location = useLocation();
  console.log(location);

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `font-primary active:animate-jump animate-once animate-duration-300 animate-ease-out relative flex gap-2 rounded-full px-4 py-2 text-center font-medium transition-all duration-300 ${
            isActive
              ? "text-primary-content bg-primary"
              : "text-secondary hover:text-primary-content hover:bg-primary"
          }`
        }
      >
        {title}
        {!(location.pathname === "/cart") && (
          <p
            className={`${title.toLowerCase() === "cart" && totalItems > 0 ? "animate-jump-in bg-primary text-primary-content absolute -top-2.5 right-0 h-6 w-6 rounded-full text-center" : "hidden"}`}
          >
            {totalItems}
          </p>
        )}
      </NavLink>
    </li>
  );
}

export default WebNavLink;
