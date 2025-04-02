import {
  Champagne,
  Cheers,
  House,
  QuestionMark,
  ShoppingCartSimple,
} from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { useOnClickOutside } from "usehooks-ts";

function MobileNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const toggleButtonRef = useRef(null);

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

  return (
    <>
      <button
        ref={toggleButtonRef}
        className="btn border border-primary bg-base-300  p-1 aspect-square ml-auto hover:bg-primary group  active:scale-95"
        onClick={toggleMobileNav}
        aria-label="Toggle mobile navigation"
        aria-expanded={isMobileNavOpen}
      >
        <Champagne
          size={24}
          className="fill-primary rotate-12 group-hover:fill-primary-content"
          weight="regular"
        />
      </button>

      <div
        ref={mobileNavRef}
        className={`
          fixed z-10 bg-base-200 top-0 -left-full w-4/5 h-full flex p-6 flex-col 
          rounded-br-2xl rounded-tr-2xl
          animate-fade-right animate-once duration-700 transition-all animate-ease-out /* Your animation classes */
          ${isMobileNavOpen ? "translate-x-[100vw]" : ""}
        `}
        aria-hidden={!isMobileNavOpen}
      >
        <img src="/logo.png" alt="" className="w-20 mx-auto mb-14" />
        <ul className="flex flex-col gap-4 font-secondary mx-auto">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative font-secondary flex  gap-2 text-secondary py-2 px-4 text-center rounded-lg ${
                  isActive
                    ? "text-secondary-content before:content-[''] before:absolute before:inset-0 before:bg-secondary before:rounded-lg before:-z-10"
                    : "text-secondary hover:bg-base-200"
                }`
              }
            >
              <House size={24} className="stroke-secondary" weight="regular" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/juices"
              className={({ isActive }) =>
                `relative font-secondary flex  gap-2 text-secondary py-2 px-4 text-center rounded-lg ${
                  isActive
                    ? "text-secondary-content before:content-[''] before:absolute before:inset-0 before:bg-secondary before:rounded-lg before:-z-10"
                    : "text-secondary hover:bg-base-200"
                }`
              }
            >
              <Cheers size={24} className="stroke-secondary" weight="regular" />
              <span>Juices</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                `relative font-secondary flex  gap-2 text-secondary py-2 px-4 text-center rounded-lg ${
                  isActive
                    ? "text-secondary-content before:content-[''] before:absolute before:inset-0 before:bg-secondary before:rounded-lg before:-z-10"
                    : "text-secondary hover:bg-base-200"
                }`
              }
            >
              <QuestionMark
                size={24}
                className="stroke-secondary"
                weight="regular"
              />
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cart"
              className={({ isActive }) =>
                `relative font-secondary flex  gap-2 text-secondary py-2 px-4 text-center rounded-lg ${
                  isActive
                    ? "text-secondary-content before:content-[''] before:absolute before:inset-0 before:bg-secondary before:rounded-lg before:-z-10"
                    : "text-secondary hover:bg-base-200"
                }`
              }
            >
              <ShoppingCartSimple
                size={24}
                className="stroke-secondary"
                weight="regular"
              />
              <span>Cart</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileNav;
