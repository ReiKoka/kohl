/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useRef, useState, ReactNode } from "react";

const NavContext = createContext(undefined);

export const NavProvider = ({ children }) => {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        const newHeight = navRef.current.offsetHeight;
        if (newHeight !== navHeight) {
          setNavHeight(newHeight);
        }
      }
    };

    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);

    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  return (
    <NavContext.Provider value={{ navHeight, navRef }}>
      {children}
    </NavContext.Provider>
  );
};

export { NavContext };
