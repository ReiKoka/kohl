import { useNavigate } from "react-router";
import { links } from "../../utils/constants";
import WebNavLink from "./WebNavLink";
import { ShoppingCart, ShoppingCartSimple } from "@phosphor-icons/react";
import { useCart } from "./../../hooks/useCart";

function WebNav() {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  

  return (
    <>
      <nav className="w-fit">
        <ul className="flex gap-2">
          {links.map((link) => (
            <WebNavLink key={link.title} to={link.to} title={link.title} />
          ))}
        </ul>
      </nav>
      <button
        className="btn btn-ghost btn-circle active:animate-jump hover:bg-primary group relative"
        onClick={() => navigate("/cart")}
      >
        <ShoppingCartSimple
          size={22}
          className="group-hover:fill-primary-content fill-secondary"
          weight="regular"
        />
        <div
          className={`${totalItems > 0 ? "animate-jump-in bg-primary text-primary-content absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-center" : "hidden"}`}
        >
          <p className="leading-0">{totalItems}</p>
        </div>
      </button>
    </>
  );
}

export default WebNav;
