import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "src/styles/index.css";
import { store } from "./store/index.ts";

import Router from "./router/Router.tsx";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Router />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
