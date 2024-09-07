import { Button } from "@/components/ui/button";
// import { CardWithForm } from "./Card";
import { useNavigate } from "react-router-dom";

// Define the ButtonDemo component with proper TypeScript props typing
export function ButtonDemo({ label }: { label: string }) {
  // Use the useNavigate hook inside the component
  const navigate = useNavigate();

  return (
    <>
      {/* Call the navigate function correctly on button click */}
      <Button
        onClick={() => navigate("/builder")}
        className=" h-[40px] w-[193px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-6 ml-4"
      >
        {label}
      </Button>
      {/* Render the CardWithForm component */}
    </>
  );
}
