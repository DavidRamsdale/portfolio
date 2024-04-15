import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import HamburgerMenu from "react-hamburger-menu";
import { useScreenType, ScreenType } from "@/hooks/useScreenType";

export const Nav = () => {
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const screenType = useScreenType();

  const navLinks = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#skills", label: "Skills" },
    { to: "#experience", label: "Experience" },
    { to: "#projects", label: "Projects" },
    { to: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full flex justify-start md:justify-around items-center p-4 bg-black h-[60px] z-50">
      {screenType === ScreenType.Mobile ? (
        <>
          <HamburgerMenu
            isOpen={isPaneOpen}
            menuClicked={() => setIsPaneOpen(!isPaneOpen)}
            width={24}
            height={18}
            strokeWidth={1}
            rotate={0}
            color="white"
            borderRadius={0}
            animationDuration={0.5}
          />
          <SlidingPane
            isOpen={isPaneOpen}
            title="Menu"
            from="left"
            width="100%"
            hideHeader={true}
            onRequestClose={() => setIsPaneOpen(false)}
          >
            <div className="flex flex-col space-y-3 pt-[40px]">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.to}
                  onClick={() => setIsPaneOpen(false)}
                  className="text-lg font-bold text-black"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </SlidingPane>
        </>
      ) : (
        navLinks.map((link, index) => (
          <a
            key={index}
            href={link.to}
            className="text-lg font-bold text-white cursor-pointer"
          >
            {link.label}
          </a>
        ))
      )}
    </nav>
  );
};
