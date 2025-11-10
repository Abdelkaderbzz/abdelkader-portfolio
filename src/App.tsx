import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const routes: RouteObject[] = [
  { path: "/", element: <Index /> },
  { path: "*", element: <NotFound /> },
];

const router = createBrowserRouter(routes, {
  // keep router-level future configuration (some parts may read from router)
  future: {
    // @ts-expect-error - runtime-only flag supported by router internals
      v7_prependBasename: true,
  },
});

// Explicit future flags passed to RouterProvider at runtime to silence warnings
const futureFlags = ({
  // these are runtime-only flags read by RouterProvider
  v7_startTransition: true,
  v7_relativeSplatPath: true,
} as unknown);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
  <RouterProvider router={router} future={futureFlags} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
