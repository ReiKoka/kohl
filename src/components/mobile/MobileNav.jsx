import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { Cheers, ShoppingCartSimple } from "@phosphor-icons/react";
import { createPortal } from "react-dom";
import { links } from "./../../utils/constants";
import MobileNavLink from "./MobileNavLink";
import { useNavigate } from "react-router";
import { useCart } from "../../hooks/useCart";

function MobileNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const [portalContainer, setPortalContainer] = useState(null);
  const navigate = useNavigate();
  const { totalItems } = useCart();

  useEffect(() => {
    const portalRoot = document.getElementById("portal-root");
    if (portalRoot) {
      setPortalContainer(portalRoot);
    } else {
      console.error("Portal root element #portal-root not found in the DOM.");
    }
  }, []);

  const handleClickOutside = (event) => {
    if (
      isMobileNavOpen &&
      mobileNavRef.current &&
      !mobileNavRef.current.contains(event.target) &&
      toggleButtonRef.current &&
      !toggleButtonRef.current.contains(event.target)
    ) {
      setIsMobileNavOpen(false);
    }
  };

  useOnClickOutside(mobileNavRef, handleClickOutside);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prevState) => !prevState);
  };

  const navPanelClasses = `
    fixed z-50 bg-base-200 top-0 -left-full w-4/5 md:w-1/3 h-full flex p-6 flex-col
    rounded-br-2xl rounded-tr-2xl
    animate-fade-right animate-once duration-700 transition-all animate-ease-out
    ${isMobileNavOpen ? "translate-x-[100vw]" : ""}
  `;

  return (
    <>
      <div className="flex w-fit items-center gap-3">
        <button
          className="btn border-primary bg-base-300 active:animate-jump hover:bg-primary group btn-square relative p-1"
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

        <button
          ref={toggleButtonRef}
          className="btn border-primary bg-base-300 hover:bg-primary group btn-square active:animate-jump border p-1"
          onClick={toggleMobileNav}
          aria-label="Toggle mobile navigation"
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-nav-panel"
        >
          <Cheers
            size={24}
            className="fill-primary group-hover:fill-primary-content rotate-12"
            weight="regular"
          />
        </button>
      </div>

      {portalContainer &&
        createPortal(
          <div
            id="mobile-nav-panel"
            ref={mobileNavRef}
            className={navPanelClasses}
            aria-hidden={!isMobileNavOpen}
          >
            <img src="/logo.png" alt="" className="mx-auto mb-14 w-20" />
            <ul className="font-secondary flex w-full flex-col gap-4">
              {links.map((link) => (
                <MobileNavLink
                  key={link.title}
                  to={link.to}
                  title={link.title}
                  icon={link.icon}
                  setIsMobileNavOpen={setIsMobileNavOpen}
                />
              ))}
            </ul>
          </div>,
          portalContainer,
        )}
    </>
  );
}

export default MobileNav;
