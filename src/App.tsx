import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { ToastContainer } from "react-toastify";
import { HeroCanvas } from "@/components/canvas/HeroCanvas";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";

function App() {
  return (
    <main className="h-screen w-full relative">
      <Router>
        <Nav />
        <HeroCanvas />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <ToastContainer />
      </Router>
    </main>
  );
}

export default App;
