"use client";
import { Button } from "@/components/ui/button";
import { Archive, Flag, Github, Plus } from "lucide-react";
import React from "react";

function SidebarBottom() {
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
      path: "https://github.com/Aman0430/canvasDoc",
    },
    {
      id: 3,
      name: "Archieve",
      icon: Archive,
      path: "/getting-started",
    },
  ];
  const totalFiles = 4;
  const line = (totalFiles / 5) * 100;

  const a = line > 0 && line <= 100;
  const b = line > 20 && line <= 100;
  const c = line > 40 && line <= 100;
  const d = line > 60 && line <= 100;
  const e = line > 80 && line <= 100;

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
      <Button className="mt-3 bg-blue-500 gap-1 hover:bg-blue-600 rounded-md cursor-pointer justify-between items-center flex w-full">
        New File
        <Plus />
      </Button>
      <div className="gap-1 flex h-2 grid-rows-5 mt-1">
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
        <strong>{totalFiles}</strong> out of <strong>5</strong> file is used
      </h2>
      <p className="text-[12px] mt-1">Upgrade your plan for further access</p>
    </div>
  );
}

export default SidebarBottom;
