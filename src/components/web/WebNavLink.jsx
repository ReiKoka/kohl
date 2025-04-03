import { NavLink } from "react-router";

function WebNavLink({ to, title }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `relative font-secondary flex  gap-2 text-secondary py-2 px-4 text-center rounded-lg ${
            isActive
              ? "text-secondary-content before:content-[''] before:absolute before:inset-0 before:bg-secondary before:rounded-lg before:-z-10"
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
