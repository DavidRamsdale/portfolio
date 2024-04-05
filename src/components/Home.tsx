import { Canvas } from "@react-three/fiber";
import { Scene } from "@/components/Scene";
import { Camera } from "@/components/Camera";

export const Home = () => {
  return (
    <Canvas>
      <color attach="background" args={["#000000"]} />
      <Scene />
      <Camera />
    </Canvas>
  );
};
