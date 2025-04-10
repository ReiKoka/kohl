import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./routes/Home";
import About from "./routes/About";
import Juices from "./routes/Juices";
import Cart from "./routes/Cart";
import AppLayout from "./routes/AppLayout";
import Juice from "./components/juices/Juice";
import ErrorRoute from "./routes/ErrorRoute";

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
          path: "/juices/:name",
          element: <Juice />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "*",
          element: <ErrorRoute />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
