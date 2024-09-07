/* eslint-disable no-unused-vars */

import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the buttonProps state
interface ButtonProps {
  width: number;
  height: number;
  color: string;
  roundedness: number;
  opacity: number;
  strokeWidth: number;
  strokeColor: string;
  text: string;
  name: string;
  lastUpdated: number;
}

// Define the shape of the context value
interface ButtonContextValue {
  buttonProps: ButtonProps;
  setButtonProps: React.Dispatch<React.SetStateAction<ButtonProps>>;
}

// Create the context with proper typing
const ButtonContext = createContext<ButtonContextValue | undefined>(undefined);

// Define the provider component with typed props
export const ButtonProvider = ({ children }: { children: ReactNode }) => {
  const [buttonProps, setButtonProps] = useState<ButtonProps>({
    width: 100,
    height: 50,
    color: "#000000",
    roundedness: 1,
    opacity: 1,
    strokeWidth: 0,
    strokeColor: "#000000",
    text: "Button",
    name: "Button",
    lastUpdated: Date.now(),
  });

  return (
    <ButtonContext.Provider value={{ buttonProps, setButtonProps }}>
      {children}
    </ButtonContext.Provider>
  );
};

// Custom hook to use the button context with proper error handling
export const useButtonContext: () => ButtonContextValue = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error("useButtonContext must be used within a ButtonProvider");
  }
  return context;
};
