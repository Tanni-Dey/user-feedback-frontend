import App from "../App.jsx";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import UserFeedback from "../pages/UserFeedback/UserFeedback.jsx";
import SingleFeedback from "../pages/SingleFeedback/SingleFeedback.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <UserFeedback />,
      },
      {
        path: "/feature-request/:id",
        element: <SingleFeedback />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
export default router;
