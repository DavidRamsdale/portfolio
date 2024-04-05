import { Avatar } from "@/components/Avatar";
import { Environment, Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const Scene = () => {
  const { size } = useThree();
  const maxWidth = size.width > 720 ? 10 : 4; // Adjust these values as needed

  return (
    <>
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
      <fog attach="fog" args={["#f0f0f0", 10, 20]} />
      <Environment preset="sunset" />
    </>
  );
};
