import { Button } from "@/components/ui/button";
import { Link, Save } from "lucide-react";
import Image from "next/image";
import React from "react";

function WorkspaceHeader({ onSave }: any) {
  return (
    <div className="p-3 border-b flex justify-between">
      <div className="flex items-center gap-2">
        <Image src={"/logo.svg"} alt="logo" width={35} height={35} />
        <h2>File Name</h2>
      </div>
      <div className="gap-2 flex">
        <Button
          className="h-8 text-[12px]
        gap-2 bg-yellow-600 hover:bg-yellow-500"
          onClick={() => onSave()}
        >
          <Save className="h-4 w-4" /> Save{" "}
        </Button>
        <Button className="h-8 text-[12px] gap-2">
          Share <Link />
        </Button>
      </div>
    </div>
  );
}

export default WorkspaceHeader;
