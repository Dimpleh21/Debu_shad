/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useButtonContext } from "./ButtonContext";

function CustomButton() {
  const { buttonProps } = useButtonContext();

  return (
    <button
      style={{
        width: `${buttonProps.width || 100}px`,
        height: `${buttonProps.height || 50}px`, // Default height
        borderRadius: `${buttonProps.roundedness || 1}px`, // Default roundedness
        backgroundColor: `${buttonProps.color || "#000000"}`, // Default color
        opacity: `${buttonProps.opacity || 1}`, // Default opacity
        border: `${buttonProps.strokeWidth || 1}px solid ${
          buttonProps.strokeColor || "#000000"
        }`,
        display: "flex", // Use flexbox layout
        justifyContent: "center", // Center text horizontally
        alignItems: "center", // Center text vertically
        textAlign: "center", // Ensure text is centered inside the flex container
        padding: "2",
      }}
      className="text-white px-4 py-2 ml-96"
    >
      {buttonProps.text || "Button"} {/* Default text */}
    </button>
  );
}

export default CustomButton;
