import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Tributes from "./pages/Tributes";
import Investigation from "./pages/Investigation";
import Media from "./pages/Media";
import SubmitTribute from "./pages/SubmitTribute";
import Prayer from "./pages/Prayer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/tributes" element={<Tributes />} />
          <Route path="/investigation" element={<Investigation />} />
          <Route path="/media" element={<Media />} />
          <Route path="/submit-tribute" element={<SubmitTribute />} />
          <Route path="/prayer" element={<Prayer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
