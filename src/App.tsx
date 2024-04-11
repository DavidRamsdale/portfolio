import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { ToastContainer } from "react-toastify";
import { HeroCanvas } from "./components/Canvas/HeroCanvas";

function App() {
  return (
    <main className="h-screen w-full relative">
      <Router>
        <Nav />
        <ToastContainer />
        <HeroCanvas />
        <Skills />
        <Projects />
        <Contact />
      </Router>
    </main>
  );
}

export default App;
