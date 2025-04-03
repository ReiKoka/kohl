import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { Champagne } from "@phosphor-icons/react";
import { createPortal } from "react-dom";
import { links } from "./../../utils/constants";
import MobileNavLink from "./MobileNavLink";

function MobileNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const [portalContainer, setPortalContainer] = useState(null);

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
    fixed z-50 bg-base-200 top-0 -left-full w-4/5 h-full flex p-6 flex-col
    rounded-br-2xl rounded-tr-2xl
    animate-fade-right animate-once duration-700 transition-all animate-ease-out
    ${isMobileNavOpen ? "translate-x-[100vw]" : ""}
  `;

  return (
    <>
      <button
        ref={toggleButtonRef}
        className="btn border border-primary bg-base-300 p-1 aspect-square ml-auto hover:bg-primary group active:scale-95"
        onClick={toggleMobileNav}
        aria-label="Toggle mobile navigation"
        aria-expanded={isMobileNavOpen}
        aria-controls="mobile-nav-panel"
      >
        <Champagne
          size={24}
          className="fill-primary rotate-12 group-hover:fill-primary-content"
          weight="regular"
        />
      </button>

      {portalContainer &&
        createPortal(
          <div
            id="mobile-nav-panel"
            ref={mobileNavRef}
            className={navPanelClasses}
            aria-hidden={!isMobileNavOpen}
          >
            <img src="/logo.png" alt="" className="w-20 mx-auto mb-14" />
            <ul className="flex flex-col gap-4 font-secondary mx-auto">
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
          portalContainer
        )}
    </>
  );
}

export default MobileNav;
