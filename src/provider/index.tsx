import AppRouterProvider from "./router_provider/AppRouterProvider";
import StoreProvider from "./store_provider/StoreProvider";

const Provider: React.FC = () => {
  return (
    <StoreProvider>
      <AppRouterProvider />
    </StoreProvider>
  );
};

export default Provider;
