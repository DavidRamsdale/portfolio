import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Avatar } from "./components/Avatar";
import { Environment, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <main className="h-screen w-full relative">
      <Canvas>
        <Avatar />
        <OrbitControls />
        <Environment preset="sunset" />
      </Canvas>
    </main>
  );
}

export default App;
