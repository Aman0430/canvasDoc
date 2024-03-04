import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

function WorkspaceHeader() {
  return (
    <div className="p-3 border-b flex justify-between">
      <div className="flex items-center gap-2">
        <Image src={"/logo.svg"} alt="logo" width={35} height={35} />
        <h2>File Name</h2>
      </div>
      <Button className="h-8 text-[12px] gap-2">
        Share <Link />
      </Button>
    </div>
  );
}

export default WorkspaceHeader;
