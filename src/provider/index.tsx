import QueryProvider from "./query_provider/QueryProvider";
import AppRouterProvider from "./router_provider/AppRouterProvider";
import StoreProvider from "./store_provider/StoreProvider";

const Provider: React.FC = () => {
  return (
    <StoreProvider>
      <QueryProvider>
        <AppRouterProvider />
      </QueryProvider>
    </StoreProvider>
  );
};

export default Provider;
