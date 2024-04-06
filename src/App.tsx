import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Home } from "@/pages/Home";
import { Skills } from "@/pages/Skills";
import { Portfolio } from "@/pages/Portfolio";
import { Contact } from "@/pages/Contact";
import { Suspense } from "react";

function App() {
  return (
    <main className="h-screen w-full relative">
      <Router>
        <Nav />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </main>
  );
}

export default App;
