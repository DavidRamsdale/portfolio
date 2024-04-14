import { Avatar } from "@/components/Avatar";
import { Environment, OrbitControls, Stars, Text } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";

const HeroContent = () => {
  const { size } = useThree();
  const maxWidth = size.width > 720 ? 10 : 4;

  return (
    <>
      <color attach="background" args={["#000000"]} />
      <Stars speed={1} />
      <Environment preset="sunset" />
      <OrbitControls enableZoom={false} />
      <group position={[-1.5, 0.2, 0]}>
        <Text
          anchorX="center"
          anchorY="middle"
          maxWidth={maxWidth}
          fontSize={0.5}
        >
          David Ramsdale
        </Text>
        <Text
          position={[0, -0.6, 0]}
          anchorX="center"
          anchorY="middle"
          maxWidth={maxWidth}
          fontSize={0.5}
        >
          Full Stack Developer
        </Text>
      </group>
      <group position={[1.5, 0, 0]}>
        <Avatar />
      </group>
    </>
  );
};

export const Hero = () => {
  return (
    <Canvas>
      <HeroContent />
    </Canvas>
  );
};
