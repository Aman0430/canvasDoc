import React from "react";
import SidebarTop from "./SidebarTop";
import SidebarBottom from "./SidebarBottom";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

function Sidebar() {
  const { user } = useKindeBrowserClient();

  return (
    <div className="bg-slate-200 flex flex-col h-screen fixed w-64 p-6">
      <div className="flex-1">
        <SidebarTop user={user} />
      </div>
      <div>
        <SidebarBottom />
      </div>
    </div>
  );
}

export default Sidebar;
