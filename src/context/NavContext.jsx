// src/contexts/NavContext.jsx (Ensure it looks like this)
import {
  createContext,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  const updateHeight = useCallback((observedElement) => {
    if (observedElement) {
      const currentHeight = observedElement.offsetHeight;
      if (currentHeight > 0) {
        setNavHeight(currentHeight);
      }
    }
  }, []);

  useLayoutEffect(() => {
    const node = navRef.current;
    if (!node) return;

    updateHeight(node);

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry?.target) {
        window.requestAnimationFrame(() => {
          updateHeight(entry.target);
        });
      }
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [updateHeight]);

  return (
    <NavContext.Provider value={{ navRef, navHeight }}>
      {children}
    </NavContext.Provider>
  );
};

export { NavContext };
