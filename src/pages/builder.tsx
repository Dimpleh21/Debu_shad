import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Properties } from "../components/Properties";
import CustomButton from "../components/CustomButton";

// Define the shape of the button properties
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

export const Builder = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [buttonProps, setButtonProps] = useState<ButtonProps>({
    width: 100,
    height: 50,
    color: "#000000",
    roundedness: 0,
    opacity: 1,
    strokeWidth: 0,
    strokeColor: "#000000",
    text: "Button",
    name: "Button",
    lastUpdated: Date.now(),
  });

  useEffect(() => {
    if (id) {
      // Fetch button data from the backend
      const fetchButton = async () => {
        try {
          const response = await fetch(
            `https://backend-sandy-ten.vercel.app/api/v2/buttons/button/${id}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch button data");
          }
          const data: ButtonProps = await response.json();
          setButtonProps(data);
        } catch (error) {
          console.error("Error fetching button data:", error);
        }
      };
      fetchButton();
    }
  }, [id]);

  return (
    <div>
      <div className="ml-6">
        <div className="font-medium mt-2">Button Name:</div>
        <div className="text-sm">{buttonProps.name}</div>
      </div>
      <div className="ml-[60rem]">
        <Properties buttonProps={buttonProps} setButtonProps={setButtonProps} />
      </div>
      <div className="mt-[-20rem]">
        <CustomButton buttonProps={buttonProps} />
      </div>
    </div>
  );
};
