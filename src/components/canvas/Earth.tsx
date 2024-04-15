import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, AdditiveBlending, Group } from "three";
import { Environment, OrbitControls, Stars } from "@react-three/drei";
import { ScreenType, useScreenType } from "@/hooks/useScreenType";

const CLOUDS_OFFSET = 0.02;
const CITY_LIGHTS_OFFSET = 0.01;
const EARTH_ROTATION_SPEED = 0.002;
const WIDTH_SEGMENTS = 32;

const CloudsMesh = ({ radius }: { radius: number }) => {
  const texture = useLoader(TextureLoader, "textures/earthcloudmap.jpg");

  return (
    <mesh>
      <sphereGeometry
        args={[radius + CLOUDS_OFFSET, WIDTH_SEGMENTS, WIDTH_SEGMENTS]}
      />
      <meshStandardMaterial
        map={texture}
        blending={AdditiveBlending}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

const CityLightsMesh = ({ radius }: { radius: number }) => {
  const texture = useLoader(TextureLoader, "textures/earthlights1k.jpg");

  return (
    <mesh>
      <sphereGeometry
        args={[radius + CITY_LIGHTS_OFFSET, WIDTH_SEGMENTS, WIDTH_SEGMENTS]}
      />
      <meshBasicMaterial
        map={texture}
        blending={AdditiveBlending}
        opacity={1}
      />
    </mesh>
  );
};

const EarthMesh = ({ radius }: { radius: number }) => {
  const texture = useLoader(TextureLoader, "textures/earth.jpg");

  return (
    <mesh>
      <sphereGeometry args={[radius, WIDTH_SEGMENTS, WIDTH_SEGMENTS]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const EarthGroup = () => {
  const screenType = useScreenType();
  const group = useRef<Group>(null);
  let radius;
  switch (screenType) {
    case ScreenType.Mobile:
      radius = 1;
      break;
    case ScreenType.Tablet:
      radius = 1.5;
      break;
    case ScreenType.Desktop:
    default:
      radius = 2;
      break;
  }

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += EARTH_ROTATION_SPEED;
    }
  });

  if (screenType === ScreenType.Mobile) {
    return (
      <group ref={group} position-x={0} position-y={1.6}>
        <EarthMesh radius={radius} />
        <CloudsMesh radius={radius} />
        <CityLightsMesh radius={radius} />
      </group>
    );
  }

  return (
    <group ref={group} position-x={2}>
      <EarthMesh radius={radius} />
      <CloudsMesh radius={radius} />
      <CityLightsMesh radius={radius} />
    </group>
  );
};

export default function Earth() {
  return (
    <Canvas>
      <Environment preset="sunset" />
      <ambientLight intensity={1} />
      <color attach="background" args={["#000000"]} />
      <Stars speed={1} />
      <OrbitControls enableZoom={false} enableRotate={false} />
      <Stars />
      <EarthGroup />
    </Canvas>
  );
}
