import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import Layout from "../componentss/organisms/layout/Layout.component";
import HomeView from "../views/HomeView";

export const router = createBrowserRouter([
  {
    path: routes.base,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
    ],
  },
]);
