import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {CssBaseline} from "@mui/material";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import App from "./App.tsx";
import "./index.css";

// Create a client
const queryClient = new QueryClient();
// Global default settings for all queries, also we can use any options for any query individually
// {
//   defaultOptions: {
//     queries: {
//       retry: 3, //3 times  >> retry requests (default value 3 times)
//       staleTime: 10 * 1000, //10s >> cached data considered stale (Outdated) after (default value 10 seconds)
//       cacheTime: 5 * 1000 * 60, //5m >> if cached data has no observers remove from cache after (default value 5 minutes)
//        keepPreviousData: true, // When keepPreviousData is set to true, React Query will return the previous data while fetching new data.
//       /*Refresh the cache
//         React Query refresh in 3 cases by default
//         - Network reconnection
//         - Component is mounted
//         - Window is refocused
//       */
//       refetchOnReconnect: false,
//       refetchOnMount: false,
//       refetchOnWindowFocus: false,
//     },
//   },
// }

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
