import { links } from "../utils/constants";
import WebNavLink from "./web/WebNavLink";

function WebNav() {
  return (
    <nav className="w-fit ml-auto">
      <ul className="flex gap-2">
        {links.map((link) => (
          <WebNavLink key={link.title} to={link.to} title={link.title} />
        ))}
      </ul>
    </nav>
  );
}

export default WebNav;
