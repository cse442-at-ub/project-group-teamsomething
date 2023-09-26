import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePic from "./pages/ProfilePic";
import ChangePassword from "./pages/ChangePassword";
import "./App.css";
import Root from "./pages/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/profile",
        element: <ProfilePic />,
      },
      {
        path: "/security",
        element: <ChangePassword />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
