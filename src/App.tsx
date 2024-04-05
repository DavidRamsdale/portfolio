import "./App.css";
import { Nav } from "@/components/Nav";
import { Home } from "./components/Home";

function App() {
  return (
    <main className="h-screen w-full relative">
      <Nav />
      <Home />
    </main>
  );
}

export default App;
