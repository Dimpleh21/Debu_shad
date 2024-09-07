/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useButtonContext } from "./ButtonContext";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
export const Properties = () => {
  const { buttonProps, setButtonProps } = useButtonContext();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState(buttonProps.name || "");
  const resetForm = () => {
    setButtonProps({
      width: 100,
      height: 50,
      color: "#000000",
      roundedness: 1,
      opacity: 1,
      strokeColor: "#000000",
      strokeWidth: 1,
      lastUpdated: Date.now(),
      text: "Button",
      name: "",
    });
  };

  // Fetch button properties when the component mounts or buttonProps._id changes
  useEffect(() => {
    const fetchButtonProps = async () => {
      try {
        if (id) {
          const response = await fetch(
            `https://backend-sandy-ten.vercel.app/api/v2/buttons/button/${id}`
          );
          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to fetch button properties: ${errorText}`);
          }
          const data = await response.json();
          setButtonProps(data);
        }
      } catch (error) {
        console.error("Error fetching button properties:", error);
      }
    };

    fetchButtonProps();
  }, [id, setButtonProps]);

  // Handle saving or updating button properties
  const handleSave = async () => {
    try {
      const method = id ? "PUT" : "POST";
      const url = id
        ? `https://backend-sandy-ten.vercel.app/api/v2/buttons/button/${id}`
        : "https://backend-sandy-ten.vercel.app/api/v2/buttons/button";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buttonProps),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to save button properties: ${errorText}`);
      }

      const result = await response.json();
      console.log("Button saved successfully:", result);
      console.log(id);
      console.log(buttonProps);
      resetForm();
      navigate("/"); // Navigate back to the listing page
    } catch (error) {
      console.error("Error saving button properties:", error);
    }
  };
  const handleEditName = () => {
    setIsEditingName(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleNameChange = (e: { target: { value: any } }) => {
    setNewName(e.target.value);
  };

  const handleNameSave = () => {
    setButtonProps((prevProps: any) => ({
      ...prevProps,
      name: newName,
    }));
    setIsEditingName(false);
  };

  return (
    <div className="bg-white w-[22rem] h-[38rem] shadow-sm rounded-lg p-6 border-2 ml-[-3rem] mt-[-1rem]">
      <Label className="font-medium text-2xl ml-20">Properties</Label>
      <div className="grid grid-cols-2 mt-1 ">
        <Label className="mt-2">Button Name:</Label>

        {isEditingName ? (
          <div>
            <Input
              type="text"
              value={newName}
              onChange={handleNameChange}
              className="mt-2 "
            />
            <Button onClick={handleNameSave} className=" mt-2 ">
              Save Name
            </Button>
          </div>
        ) : (
          <div className="flex">
            <span>{buttonProps.name || "Button"}</span>
            <Button onClick={handleEditName} className="ml-4 ">
              Edit
            </Button>
          </div>
        )}
      </div>
      <div className="h-48">
        <Label className="text-md">Size</Label>
        <hr />
        <div className="flex">
          <div>
            <Label className="mt-1">Height</Label>
            <Input
              type="number"
              placeholder="Height"
              value={buttonProps.height || ""}
              onChange={(e) =>
                setButtonProps((prevProps: any) => ({
                  ...prevProps,
                  height: parseInt(e.target.value, 10) || 0,
                }))
              }
              className="w-24 mt-2 p-1 "
            />
          </div>
          <div className="mt-1 ml-24">
            <Label>Width</Label>
            <Input
              type="number"
              placeholder="Width"
              value={buttonProps.width || ""}
              onChange={(e) =>
                setButtonProps((prevProps: any) => ({
                  ...prevProps,
                  width: e.target.value,
                }))
              }
              className="w-24 h-9 mt-2 p-1"
            />
          </div>
          <div className="mt-20 ml-[-18rem]">
            <Label>Roundedness</Label>
            <Input
              type="number"
              placeholder="Roundedness"
              value={buttonProps.roundedness}
              onChange={(e) =>
                setButtonProps((prevProps: any) => ({
                  ...prevProps,
                  roundedness: e.target.value,
                }))
              }
              className="w-48 h-9 p-1 "
            />
          </div>
        </div>
        <Label className="text-md mt-5">Appearance</Label>
        <hr />
        <div className="mt-3">
          <Label>Fill Color</Label>
          <Input
            type="color"
            value={buttonProps.color || "#000000"}
            onChange={(e) =>
              setButtonProps((prevProps: any) => ({
                ...prevProps,
                color: e.target.value,
              }))
            }
            className=" w-24 h-9 mt-2 p-1 "
          />
        </div>
        <div className="mt-4">
          <Label>Opacity</Label>
          <Input
            type="number"
            placeholder="Opacity"
            value={buttonProps.opacity || ""}
            step="0.01"
            onChange={(e) =>
              setButtonProps((prevProps: any) => ({
                ...prevProps,
                opacity: e.target.value,
              }))
            }
            className=" w-24 h-9 mt-2 p-1 "
          />
        </div>
        <div className="mt-[-4rem] ml-48">
          <Label>Stroke Color</Label>
          <Input
            type="color"
            value={buttonProps.strokeColor || "#000000"}
            onChange={(e) =>
              setButtonProps((prevProps: any) => ({
                ...prevProps,
                strokeColor: e.target.value,
              }))
            }
            className="w-24 h-9 mt-2 p-1 "
          />
        </div>
        <div className="mt-[-10rem] ml-48">
          <Label>Stroke Width</Label>
          <Input
            type="number"
            placeholder="Stroke Width"
            value={buttonProps.strokeWidth || ""}
            onChange={(e) =>
              setButtonProps((prevProps: any) => ({
                ...prevProps,
                strokeWidth: parseInt(e.target.value, 10) || 0,
              }))
            }
            className="w-32 h-9 mt-2 p-1 "
          />
        </div>
      </div>
      <div className="mt-48">
        <Button onClick={handleSave}>Save Component</Button>
      </div>
    </div>
  );
};
