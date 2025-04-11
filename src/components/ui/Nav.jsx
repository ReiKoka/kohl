import { useMediaQuery } from "usehooks-ts";
import { useNav } from "../../hooks/useNav";

import MobileNav from "../mobile/MobileNav";

import { useNavigate } from "react-router";
import WebNav from "../web/WebNav";

function Nav() {
  const matches = useMediaQuery("(min-width: 576px");
  const { navRef } = useNav();
  const navigate = useNavigate();

  return (
    <nav
      ref={navRef}
      className="font-primary z-30 border-secondary bg-base-300 fixed top-0 left-0 flex h-fit min-h-10 w-full items-center border-b p-3"
    >
      <div
        className="font-secondary text-secondary flex w-fit cursor-pointer items-center gap-2"
        onClick={() => navigate("/")}
      >
        <img
          src="/logo.png"
          alt="logo"
          className="w-12"
          width={48}
          height={48}
        />
        <h1 className="hidden text-2xl font-semibold lg:block">Kohl</h1>
      </div>

      {matches ? <WebNav /> : <MobileNav />}
    </nav>
  );
}

export default Nav;
