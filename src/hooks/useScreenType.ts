import { useState, useEffect } from "react";

export enum ScreenType {
  Mobile = "mobile",
  Tablet = "tablet",
  Desktop = "desktop",
}

export const useScreenType = (): ScreenType => {
  const [screenType, setScreenType] = useState<ScreenType>(ScreenType.Desktop);

  useEffect(() => {
    function handleResize() {
      const { innerWidth: width } = window;
      if (width < 768) {
        setScreenType(ScreenType.Mobile);
      } else if (width < 1024) {
        setScreenType(ScreenType.Tablet);
      } else {
        setScreenType(ScreenType.Desktop);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenType;
};
