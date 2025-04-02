import { useMediaQuery } from "usehooks-ts";
import { useNav } from "./../hooks/useNav";

import MobileNav from "./MobileNav";
import WebNav from "./WebNav";

function Nav() {
  const matches = useMediaQuery("(min-width: 1024px");
  const { navRef } = useNav();

  return (
    <nav
      ref={navRef}
      className="p-3 font-primary flex items-center w-full border-b border-primary fixed top-0 left-0 bg-base-300"
    >
      <div className="w-fit">
        <img src="logo.png" alt="logo" className="w-12" />
      </div>

      {matches ? <WebNav /> : <MobileNav />}
    </nav>
  );
}

export default Nav;
