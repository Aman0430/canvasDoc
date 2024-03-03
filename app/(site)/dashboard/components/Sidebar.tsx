import React from "react";
import SidebarTop, { TEAM } from "./SidebarTop";
import SidebarBottom from "./SidebarBottom";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

function Sidebar() {
  const { user }: any = useKindeBrowserClient();
  const createFile = useMutation(api.files.createFile);

  const [activeTeam, setActiveTeam] = React.useState<TEAM | any>();

  const onFileCreate = (fileName: string) => {
    console.log(fileName);
    createFile({
      fileName: fileName,
      teamId: activeTeam?._id,
      createdBy: user?.email,
    }).then(
      (response) => {
        if (response) {
          toast("File created successfully!");
        }
      },
      (e) => {
        toast("Error while creating file!");
      }
    );
  };

  return (
    <div className="bg-slate-200 flex flex-col h-screen fixed w-64 p-6">
      <div className="flex-1">
        <SidebarTop
          user={user}
          setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)}
        />
      </div>
      <div>
        <SidebarBottom onFileCreate={onFileCreate} />
      </div>
    </div>
  );
}

export default Sidebar;
