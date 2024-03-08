"use client";
import React, { useEffect, useState } from "react";
import WorkspaceHeader from "../components/WorkspaceHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Editor from "../components/Editor";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { FILE } from "../../dashboard/components/FileList";
import WhiteBoard from "../components/WhiteBoard";

function WorkSpace({ params }: any) {
  const [triggerSave, setTriggerSave] = useState(false);
  const convex = useConvex();
  const [fileData, setFileData] = useState<FILE | any>();

  const getDocument = async () => {
    const result = await convex.query(api.files.getFileById, {
      _id: params.fileId,
    });
    setFileData(result);
  };

  useEffect(() => {
    params.fileId && getDocument();
  }, []);

  return (
    <div>
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      {/* WorkSpace layout */}
      <ResizablePanelGroup direction="horizontal" className="min-h-screen ">
        <ResizablePanel className="min-w-[40rem]">
          <Editor
            onSaveTrigger={triggerSave}
            fileId={params.fileId}
            fileData={fileData}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="min-w-[40rem]">
          <WhiteBoard
            onSaveTrigger={triggerSave}
            fileId={params.fileId}
            fileData={fileData}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default WorkSpace;
