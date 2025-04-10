import { createContext, useEffect, useRef, useState, ReactNode } from "react";

const NavContext = createContext(undefined);

export const NavProvider = ({ children }) => {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);

    return () => window.removeEventListener("resize", updateNavHeight);
  }, [navHeight]);

  return (
    <NavContext.Provider value={{ navHeight, navRef }}>
      {children}
    </NavContext.Provider>
  );
};

export { NavContext };
