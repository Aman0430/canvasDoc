"use client";
import React, { useState } from "react";
import WorkspaceHeader from "../components/WorkspaceHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Editor from "../components/Editor";

function WorkSpace({ params }: any) {
  const [triggerSave, setTriggerSave] = useState(false);
  return (
    <div>
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      {/* WorkSpace layout */}
      <ResizablePanelGroup direction="horizontal" className="min-h-screen ">
        <ResizablePanel className="min-w-[40rem]">
          <Editor onSaveTrigger={triggerSave} fileId={params.fileId} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="min-w-[40rem]">Whiteboard</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default WorkSpace;
