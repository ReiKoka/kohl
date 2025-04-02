import { createContext, useEffect, useRef, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);
  return (
    <NavContext.Provider value={{ navRef, navHeight }}>
      {children}
    </NavContext.Provider>
  );
};

export { NavContext };
