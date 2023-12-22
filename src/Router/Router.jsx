import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AboutPage from "../pages/About";
import JobPost from "../pages/JobPost";
import MyJobs from "../pages/MyJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post-job",
        element: <JobPost />,
      },
      {
        path: "/my-job",
        element: <MyJobs />,
      },
    ],
  },
]);
export default router;
