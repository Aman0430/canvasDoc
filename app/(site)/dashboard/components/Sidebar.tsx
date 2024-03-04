import React, { useContext, useEffect } from "react";
import SidebarTop, { TEAM } from "./SidebarTop";
import SidebarBottom from "./SidebarBottom";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { FileContext } from "@/Context/FileContext";

function Sidebar() {
  const { user }: any = useKindeBrowserClient();
  const createFile = useMutation(api.files.createFile);
  const convex = useConvex();

  const [activeTeam, setActiveTeam] = React.useState<TEAM | any>();
  const [totalFiles, setTotalFiles] = React.useState<number>();
  const { fileList, setFileList } = useContext(FileContext);

  useEffect(() => {
    activeTeam && getFiles();
  }, [activeTeam]);

  const onFileCreate = (fileName: string) => {
    console.log(fileName);
    createFile({
      fileName: fileName,
      teamId: activeTeam?._id,
      createdBy: user?.email,
      archived: false,
      document: "",
      whiteboard: "",
    }).then(
      (response) => {
        if (response) {
          getFiles();
          toast("File created successfully!");
        }
      },
      (e) => {
        toast("Error while creating file!");
      }
    );
  };

  const getFiles = async () => {
    const result = await convex.query(api.files.getFiles, {
      teamId: activeTeam?._id,
    });
    console.log(result);
    setFileList(result);
    setTotalFiles(result?.length);
  };

  return (
    <div className="bg-gray-100 flex flex-col h-screen fixed w-64 p-6 border-r-2 border-slate-300">
      <div className="flex-1">
        <SidebarTop
          user={user}
          setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)}
        />
      </div>
      <div>
        <SidebarBottom onFileCreate={onFileCreate} totalFiles={totalFiles} />
      </div>
    </div>
  );
}

export default Sidebar;
