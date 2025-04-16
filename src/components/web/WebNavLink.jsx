import { NavLink } from "react-router";

function WebNavLink({ to, title }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `font-primary active:animate-jump animate-once animate-duration-300 animate-ease-out focus-visible:ring-primary relative flex gap-2 rounded-full px-4 py-2 text-center font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-0 ${
            isActive
              ? "text-primary-content bg-primary focus-visible:ring-offset-primary-content"
              : "text-secondary hover:text-primary-content hover:bg-primary focus-visible:ring-offset-base-300 focus-visible:border-primary focus-visible:border"
          }`
        }
      >
        {title}
      </NavLink>
    </li>
  );
}

export default WebNavLink;
