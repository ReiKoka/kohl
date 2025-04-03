import { useMediaQuery } from "usehooks-ts";
import { useNav } from "./../hooks/useNav";

import MobileNav from "./mobile/MobileNav";
import WebNav from "./WebNav";

function Nav() {
  const matches = useMediaQuery("(min-width: 1024px");
  const { navRef } = useNav();

  return (
    <nav
      ref={navRef}
      className="p-3 font-primary h-fit flex items-center w-full border-b border-secondary fixed top-0 left-0 bg-base-300"
    >
      <div className="w-fit flex gap-2 items-center font-secondary text-secondary">
        <img src="logo.png" alt="logo" className="w-12" />
        <h1 className="hidden lg:block font-semibold text-2xl">Kohl</h1>
      </div>

      {matches ? <WebNav /> : <MobileNav />}
    </nav>
  );
}

export default Nav;
