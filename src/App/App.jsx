import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from "./router/router";
import ScrollProgressBar from "../components/ScrollProgressBar/ScrollProgressBar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <ScrollProgressBar />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
