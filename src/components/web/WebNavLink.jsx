import { NavLink } from "react-router";

function WebNavLink({ to, title }) {
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
      </NavLink>
    </li>
  );
}

export default WebNavLink;
