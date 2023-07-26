import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import { lazy } from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: lazy(() => import("./pages/HomePage")),
      },
      {
        path: "games/:slug",
        Component: lazy(() => import("./pages/GameDetailPage")),
      },
    ],
  },
]);
export default router;
