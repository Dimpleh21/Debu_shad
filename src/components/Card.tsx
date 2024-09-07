/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import { useNavigate } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CardWithForm({ buttonProps }: { buttonProps: any }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to builder page with button ID
    navigate(`/builder?id=${buttonProps._id}`);
  };
  const timeAgo: (date: string | number | Date) => string = (
    date: string | number | Date
  ) => {
    const now: Date = new Date();
    const then: Date = new Date(date);
    const diffInSeconds: any = Math.floor((now - then) / 1000);

    if (diffInSeconds < 60) {
      return "Just Now";
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  };
  return (
    <button onClick={handleClick}>
      <Card className=" bg-white w-[240px] h-[345px] shadow-sm rounded-lg p-6 border-2  mt-2">
        <div>
          <div className="bg-pinky w-[208px] h-[247px] ml-[-0.5rem] p-2 items-center">
            <div className="p-5">
              <div className="flex justify-between items-center">
                <Button
                  className="px-3 py-1 text-white text-xs font-semibold mt-14 ml-4 items-center"
                  style={{
                    width: `${buttonProps.width || 100}px`,
                    height: `${buttonProps.height || 50}px`,
                    borderRadius: `${buttonProps.roundedness || 1}px`,
                    backgroundColor: buttonProps.color || "#b42d2d",
                    opacity: buttonProps.opacity || 1,
                    border: `${buttonProps.strokeWidth || 0}px solid ${
                      buttonProps.strokeColor || "#000000"
                    }`,
                  }}
                >
                  {buttonProps.text || "Button"}
                </Button>
              </div>
            </div>
          </div>
          <Label className="text-sm ml-[-9.5rem] mt-0.5">
            {buttonProps.name || "Button"}
          </Label>
          <div className="text-gray-500 text-xs ml-[-0.5rem] mt-[0.5rem]">
            {buttonProps.lastUpdated && (
              <div className="flex mt-2 ml-1">
                <Label className="text-xs font-medium ">Last Updated: </Label>
                <Label className="text-xs">
                  {timeAgo(buttonProps.lastUpdated)}
                </Label>
              </div>
            )}
          </div>
        </div>
      </Card>
    </button>
  );
}
