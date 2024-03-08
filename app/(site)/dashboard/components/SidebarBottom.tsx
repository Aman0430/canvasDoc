"use client";
import { Button } from "@/components/ui/button";
import { Archive, Flag, Github, Plus } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import Constants from "@/Constants/Constants";
import PricingSection from "./PricingSection";

function SidebarBottom({ onFileCreate, totalFiles }: any) {
  const menuList = [
    {
      id: 1,
      name: "Getting Started",
      icon: Flag,
      path: "/getting-started",
    },
    {
      id: 2,
      name: "Github",
      icon: Github,
      path: "",
    },
    {
      id: 3,
      name: "Archieve",
      icon: Archive,
      path: "/getting-started",
    },
  ];

  const line = (totalFiles / 5) * 100;

  const a = line > 0 && line <= 100;
  const b = line > 20 && line <= 100;
  const c = line > 40 && line <= 100;
  const d = line > 60 && line <= 100;
  const e = line > 80 && line <= 100;

  const [fileNameInput, setFileNameInput] = useState("");

  return (
    <div>
      {menuList.map((item, index) => (
        <h2
          key={index}
          className="flex gap-2 p-1 px-2 text-[14px] hover:bg cursor-pointer text-gray-500 hover:text-gray-700"
        >
          <item.icon className="w-4 h-4" />
          {item.name}
        </h2>
      ))}
      <Dialog>
        <DialogTrigger className="w-full" asChild>
          <div className="mt-3 bg-blue-500 gap-1 hover:bg-blue-600 rounded-md cursor-pointer justify-between items-center flex w-full text-white p-2 text-sm">
            New File
            <Plus />
          </div>
        </DialogTrigger>
        {totalFiles < Constants.MAX_FREE_TIER ? (
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create File</DialogTitle>
              <DialogDescription>
                Make changes to create your file. Click save when you are done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4 justify-start">
              <div className="grid grid-cols-4 items-center text-left gap-4">
                <Label htmlFor="name">Name</Label>
                <Input
                  placeholder="Enter File Name"
                  className="col-span-3"
                  onChange={(e) => setFileNameInput(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter className="justify-end">
              <DialogClose asChild>
                <Button
                  type="submit"
                  variant="default"
                  disabled={!(fileNameInput && fileNameInput.length > 3)}
                  onClick={() => {
                    onFileCreate(fileNameInput);
                  }}
                >
                  Confirm
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        ) : (
          <PricingSection />
        )}
      </Dialog>

      {/* <div className="gap-1 flex h-2 grid-rows-5 mt-1">
        <div
          className={`bg-blue-300 rounded-sm w-full ${a && "bg-red-500"}`}
        ></div>
        <div
          className={`bg-blue-300 rounded-sm w-full ${b && "bg-red-500"}`}
        ></div>
        <div
          className={`bg-blue-300 rounded-sm w-full ${c && "bg-red-500"}`}
        ></div>
        <div
          className={`bg-blue-300 rounded-sm w-full ${d && "bg-red-500"}`}
        ></div>
        <div
          className={`bg-blue-300 rounded-sm w-full ${e && "bg-red-500"}`}
        ></div>
      </div>
      <h2 className="text-[12px] mt-3">
        <strong>{totalFiles}</strong> out of{" "}
        <strong>{Constants.MAX_FREE_TIER}</strong> file is used
      </h2>
      <p className="text-[12px] mt-1">Upgrade your plan for further access</p> */}
      <div className="h-4 w-full bg-gray-200 rounded-full mt-5">
        <div
          className={`h-4  bg-blue-600 rounded-full`}
          style={{ width: `${(totalFiles / 5) * 100}%` }}
        ></div>
      </div>

      <h2 className="text-[12px] mt-3">
        <strong>{totalFiles}</strong> out of{" "}
        <strong>{Constants.MAX_FREE_TIER}</strong> files used
      </h2>
      <h2 className="text-[12px] mt-1">
        Upgrade your plan for unlimited access.
      </h2>
    </div>
  );
}

export default SidebarBottom;
