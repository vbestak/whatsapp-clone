import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import ErrorPage from "./pages/ErrorPage";
import User from "./pages/User";
import { UsersProvider } from "./context/usersContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <User />,
      },
    ],
  },
]);

function App() {
  return (
    <UsersProvider>
      <RouterProvider router={router} />
    </UsersProvider>
  );
}

export default App;
