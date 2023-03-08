import CreateLinkPage from "./components/CreateLinkPage";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/addLink",
      element: <CreateLinkPage />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="min-h-screen w-screen text-white px-16 py-7">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
