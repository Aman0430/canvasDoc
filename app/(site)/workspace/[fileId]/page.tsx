import React from "react";
import WorkspaceHeader from "../components/WorkspaceHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Editor from "../components/Editor";

function WorkSpace() {
  return (
    <div>
      <WorkspaceHeader />

      {/* WorkSpace layout */}
      <ResizablePanelGroup direction="horizontal" className="min-h-screen ">
        <ResizablePanel className="min-w-[40rem]">
          <Editor />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="min-w-[40rem]">Whiteboard</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default WorkSpace;
