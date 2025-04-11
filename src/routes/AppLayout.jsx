import { Outlet } from "react-router";
import Nav from "../components/ui/Nav";
import { useNav } from "../hooks/useNav";
import Footer from "./../components/ui/Footer";

function AppLayout() {
  const { navHeight } = useNav();

  return (
    <div className="bg-base-300 flex h-svh max-h-svh w-dvw flex-col overflow-hidden">
      <Nav />
      <div
        style={{ marginTop: navHeight }}
        className="flex h-auto flex-col overflow-x-hidden overflow-y-auto"
      >
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
