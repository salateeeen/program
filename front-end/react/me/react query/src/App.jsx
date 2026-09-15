import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Query from "./Query";
import Form from "./Form";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
 
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Query/>
      <Form/>
    </QueryClientProvider>
  );
}

export default App;
