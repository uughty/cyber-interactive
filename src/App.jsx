import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Privacy from "./components/Privacy";        // ← add this
import Footer from "./components/Footer";          // ← add this

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    let link = document.querySelector("link[rel='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = "/assets/logo.png";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <BrowserRouter>
        <Header />
        <main style={{
          paddingTop: "72px",
          overflowX: "hidden",
          background: "#111928",                   // ← update to match privacy bg
          minHeight: "100vh",
          color: "#FBF9F9",
        }}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy" element={            // ← add this route
              <>
                <Privacy />
                <Footer />
              </>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;