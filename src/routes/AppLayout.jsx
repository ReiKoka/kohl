import { Outlet } from "react-router";
import Nav from "../components/Nav";
import { useNav } from "../hooks/useNav";

function AppLayout() {
  const { navHeight } = useNav();

  return (
    <div className="h-svh w-dvw bg-base-300 flex flex-col">
      <Nav />
      <div
        style={{
          minHeight: `calc(100svh - ${navHeight}px)`,
          marginTop: `${navHeight}px`,
        }}
        className="overflow-y-auto overflow-x-clip"
      >
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
