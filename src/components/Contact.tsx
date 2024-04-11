import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stars } from "@react-three/drei";
import { ContactForm } from "@/components/ContactForm";

export const Contact = () => {
  return (
    <div className="relative flex justify-center items-center h-screen w-full">
      <div className="absolute inset-0">
        <Canvas>
          <Environment preset="sunset" />
          <color attach="background" args={["#000000"]} />
          <Stars speed={1} />
          <Environment preset="sunset" />
          <OrbitControls enableZoom={false} />
          <Stars />
        </Canvas>
      </div>
      <ContactForm />
    </div>
  );
};
