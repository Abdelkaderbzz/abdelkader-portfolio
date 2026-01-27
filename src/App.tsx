import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import { getCalApi } from "@calcom/embed-react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Cal.com floating button initialization
const useCalWidget = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("floatingButton", {
        calLink: "abdelkader/30min",
        buttonPosition: "bottom-left",
        config: { layout: "month_view", theme: "light" },
      });
      cal("ui", { theme: "light", hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
};

const routes: RouteObject[] = [
  { path: "/", element: <Index /> },
  { path: "*", element: <NotFound /> },
];

const router = createBrowserRouter(routes, {
  future: {
    // @ts-expect-error - runtime-only flag supported by router internals
      v7_prependBasename: true,
  },
});

const futureFlags = ({
  v7_startTransition: true,
  v7_relativeSplatPath: true,
} as unknown);

const App = () => {
  // Initialize Cal.com floating button
  useCalWidget();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} future={futureFlags} />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
