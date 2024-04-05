import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

export const Camera = () => {
  const controls = useRef<CameraControls>();

  const intro = async () => {
    if (!controls.current) return;

    controls.current.dolly(-22);
    controls.current.smoothTime = 0.7;
    controls.current.dolly(22, true);
  };

  useEffect(() => {
    intro();
  }, []);
  return <CameraControls ref={controls} zoom={false} />;
};
