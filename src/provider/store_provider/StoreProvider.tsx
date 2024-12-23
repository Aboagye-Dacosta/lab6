import { PropsWithChildren, memo } from "react";
import { Provider } from "react-redux";
import store from "../../store";

const StoreProvider: React.FC<PropsWithChildren> = memo(({ children }) => {
  return <Provider store={store}>{children}</Provider>;
});

StoreProvider.displayName = "StoreProvider";

export default StoreProvider;
