import { NavLink } from "react-router";

function WebNavLink({ to, title }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `font-secondary text-secondary relative flex gap-2 rounded-lg px-4 py-2 text-center ${
            isActive
              ? "text-secondary-content before:bg-secondary before:absolute before:inset-0 before:-z-10 before:rounded-lg before:content-['']"
              : "text-secondary hover:bg-base-200"
          }`
        }
      >
        {title}
      </NavLink>
    </li>
  );
}

export default WebNavLink;
