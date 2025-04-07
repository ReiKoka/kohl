import { links } from "../../utils/constants";
import WebNavLink from "./WebNavLink";

function WebNav() {
  return (
    <nav className="ml-auto w-fit">
      <ul className="flex gap-2">
        {links.map((link) => (
          <WebNavLink key={link.title} to={link.to} title={link.title} />
        ))}
      </ul>
    </nav>
  );
}

export default WebNav;
