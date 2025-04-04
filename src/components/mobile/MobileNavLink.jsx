import { NavLink } from "react-router";

function MobileNavLink({ setIsMobileNavOpen, to, icon: Icon, title }) {
  return (
    <li>
      <NavLink
        onClick={() => setIsMobileNavOpen()}
        to={to}
        className={({ isActive }) =>
          `relative font-secondary md:w-full flex  gap-2 text-secondary py-2 px-4 text-center rounded-lg ${
            isActive
              ? "text-secondary-content before:content-[''] before:absolute before:inset-0 before:bg-secondary before:rounded-lg before:-z-10"
              : "text-secondary hover:bg-base-200"
          }`
        }
      >
        {Icon && (
          <Icon size={24} className="stroke-secondary" weight="regular" />
        )}
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

export default MobileNavLink;
