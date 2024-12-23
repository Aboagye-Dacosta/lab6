import { RouterProvider } from "react-router-dom";
import { router } from "../../router/Router";

const AppRouterProvider: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
