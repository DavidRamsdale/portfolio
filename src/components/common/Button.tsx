import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {children}
    </button>
  );
};
