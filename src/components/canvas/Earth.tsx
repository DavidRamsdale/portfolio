import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, AdditiveBlending } from "three";
import { Environment, OrbitControls, Stars } from "@react-three/drei";
import { ContactForm } from "@/components/ContactForm";

const EARTH_RADIUS = 2;
const CLOUDS_RADIUS = EARTH_RADIUS + 0.02;
const CITY_LIGHTS_RADIUS = EARTH_RADIUS + 0.01;
const EARTH_ROTATION_SPEED = 0.002;
const WIDTH_SEGMENTS = 32;

const CloudsMesh = () => {
  const texture = useLoader(TextureLoader, "textures/earthcloudmap.jpg");

  return (
    <mesh>
      <sphereGeometry args={[CLOUDS_RADIUS, WIDTH_SEGMENTS, WIDTH_SEGMENTS]} />
      <meshStandardMaterial
        map={texture}
        blending={AdditiveBlending}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

const CityLightsMesh = () => {
  const texture = useLoader(TextureLoader, "textures/earthlights1k.jpg");

  return (
    <mesh>
      <sphereGeometry
        args={[CITY_LIGHTS_RADIUS, WIDTH_SEGMENTS, WIDTH_SEGMENTS]}
      />
      <meshBasicMaterial
        map={texture}
        blending={AdditiveBlending}
        opacity={1}
      />
    </mesh>
  );
};

const EarthMesh = () => {
  const texture = useLoader(TextureLoader, "textures/earth.jpg");

  return (
    <mesh>
      <sphereGeometry args={[EARTH_RADIUS, WIDTH_SEGMENTS, WIDTH_SEGMENTS]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const EarthGroup = () => {
  const group = useRef();

  useFrame(() => {
    group.current.rotation.y += EARTH_ROTATION_SPEED;
  });

  return (
    <group ref={group} position-x={2}>
      <EarthMesh />
      <CloudsMesh />
      <CityLightsMesh />
    </group>
  );
};

export default function Earth() {
  return (
    <div className="relative flex items-center h-screen w-full">
      <div className="absolute inset-0">
        <Canvas>
          <Environment preset="sunset" />
          <ambientLight intensity={1} />
          <color attach="background" args={["#000000"]} />
          <Stars speed={1} />
          <OrbitControls enableZoom={false} enableRotate={false} />
          <Stars />
          <EarthGroup />
        </Canvas>
      </div>
      <div className="container z-30">
        <ContactForm />
      </div>
    </div>
  );
}
