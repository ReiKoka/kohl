import { Outlet } from "react-router";
import Nav from "../components/ui/Nav";
import { useNav } from "../hooks/useNav";
import { useEffect, useRef } from "react";

function AppLayout() {
  const { navHeight } = useNav();
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.minHeight = `calc(100% - ${navHeight}px)`;
      contentRef.current.style.marginTop = `${navHeight}px`;
    }
  }, [navHeight]);

  return (
    <div className="bg-base-300 flex h-svh max-h-svh w-dvw flex-col overflow-hidden">
      <Nav />
      <div ref={contentRef} className="overflow-x-clip overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
