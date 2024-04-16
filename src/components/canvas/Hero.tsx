import { Avatar } from "@/components/Avatar";
import { ScreenType, useScreenType } from "@/hooks/useScreenType";
import { Environment, OrbitControls, Stars, Text } from "@react-three/drei";
import { Canvas, Vector3, useThree } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense } from "react";

const HeroContent = () => {
  const { size } = useThree();
  const maxWidth = size.width > 720 ? 10 : 4;
  const screenType = useScreenType();

  const DESKTOP_TEXT_POSITION = [-1.5, 0.2, 0] as Vector3;
  const DESKTOP_AVATAR_POSITION = [1.5, 0, 0] as Vector3;

  const TABLET_TEXT_POSITION = [-1, 0.2, 0] as Vector3;
  const TABLET_AVATAR_POSITION = [2, 0, 0] as Vector3;

  const MOBILE_TEXT_POSITION = [0, -0.7, 0] as Vector3;
  const MOBILE_AVATAR_POSITION = [0, 0.7, 0] as Vector3;

  const TEXT_SPACING = [0, -0.6, 0] as Vector3;

  let textPosition, avatarPosition, fontSize;

  switch (screenType) {
    case ScreenType.Mobile:
      textPosition = MOBILE_TEXT_POSITION;
      avatarPosition = MOBILE_AVATAR_POSITION;
      fontSize = 0.35;
      break;
    case ScreenType.Tablet:
      textPosition = TABLET_TEXT_POSITION;
      avatarPosition = TABLET_AVATAR_POSITION;
      fontSize = 0.5;
      break;
    case ScreenType.Desktop:
    default:
      textPosition = DESKTOP_TEXT_POSITION;
      avatarPosition = DESKTOP_AVATAR_POSITION;
      fontSize = 0.5;
      break;
  }

  return (
    <>
      <color attach="background" args={["#000000"]} />
      <Stars speed={1} />
      <Environment preset="sunset" />
      <OrbitControls enableZoom={false} />
      <group position={textPosition}>
        <Text
          anchorX="center"
          anchorY="middle"
          maxWidth={maxWidth}
          fontSize={fontSize}
        >
          David Ramsdale
        </Text>
        <Text
          position={TEXT_SPACING}
          anchorX="center"
          anchorY="middle"
          maxWidth={maxWidth}
          fontSize={fontSize}
        >
          Full Stack Developer
        </Text>
      </group>
      <group position={avatarPosition}>
        <Avatar />
      </group>
    </>
  );
};

export const Hero = () => {
  return (
    <section id="home">
      <div className="relative flex items-end justify-center h-screen w-full pb-4">
        <div className="absolute inset-0">
          <Canvas>
            <Suspense>
              <HeroContent />
            </Suspense>
          </Canvas>
        </div>
        <motion.button
          className="z-30 container flex justify-center items-center pb-10"
          animate={{ y: ["0%", "10%", "0%"] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img
            className="cursor-pointer"
            src="/icons/arrow_down.png"
            alt="Scroll down"
          />
        </motion.button>
      </div>
    </section>
  );
};
