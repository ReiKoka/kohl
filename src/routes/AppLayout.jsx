import { Outlet } from "react-router";
import Nav from "../components/ui/Nav";
import { useNav } from "../hooks/useNav";
import Loader from "../components/ui/Loader";

function AppLayout() {
  const { navHeight } = useNav();

  return (
    <main className="bg-base-200 flex h-svh max-h-svh w-dvw flex-col overflow-hidden">
      <Nav />
      <div
        style={{ marginTop: `${navHeight}px` }}
        className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto"
      >
        {navHeight ? (
          <div className="flex-1">
            <Outlet />
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </main>
  );
}

export default AppLayout;
