import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const QueryProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
