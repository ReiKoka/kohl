import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./routes/Home";
import About from "./routes/About";
import Juices from "./routes/Juices";
import Cart from "./routes/Cart";
import AppLayout from "./routes/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/juices",
          element: <Juices />,
        },
        {
          path: "/juices/:productName",
          element: <Juices />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
