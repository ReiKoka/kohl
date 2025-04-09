import { Outlet } from "react-router";
import Nav from "../components/ui/Nav";
import { useNav } from "../hooks/useNav";

function AppLayout() {
  const { navHeight } = useNav();

  return (
    <div className="bg-base-300 flex h-svh w-dvw flex-col">
      <Nav />
      <div
        style={{
          minHeight: `calc(100svh - ${navHeight}px)`,
          marginTop: `${navHeight}px`,
        }}
        className="overflow-x-clip overflow-y-auto"
      >
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
