import { Outlet } from "react-router";
import Nav from "../components/ui/Nav";
import { useNav } from "../hooks/useNav";
import Footer from "./../components/ui/Footer";

function AppLayout() {
  const { navHeight } = useNav();

  return (
    <main className="bg-base-300 flex h-svh max-h-svh w-dvw flex-col overflow-hidden">
      <Nav />
      <div
        style={{ marginTop: navHeight }}
        className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto"
      >
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default AppLayout;
