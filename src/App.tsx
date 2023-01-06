import { useRoutes } from "react-router-dom";
import { routes } from "./Routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const client = new QueryClient();
  const elem = useRoutes(routes);
  return (
    <QueryClientProvider client={client}>
      {elem}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
export default App;
