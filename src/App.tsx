import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Diretoria from "./pages/Diretoria";
import Curriculo from "./pages/Curriculo";
import QuemSomos from "./pages/QuemSomos";
import Equipe from "./pages/Equipe";
import Noticias from "./pages/Noticias";
import SetembroAmarelo from "./pages/SetembroAmarelo";
import CriatividadeConsciencia from "./pages/CriatividadeConsciencia";
import ParceriaInstituto from "./pages/ParceriaInstituto";
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
          <Route path="/diretoria" element={<Diretoria />} />
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/setembro-amarelo" element={<SetembroAmarelo />} />
          <Route path="/noticias/criatividade-consciencia" element={<CriatividadeConsciencia />} />
          <Route path="/noticias/parceria-instituto" element={<ParceriaInstituto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
