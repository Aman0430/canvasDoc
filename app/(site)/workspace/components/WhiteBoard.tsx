import React, { useEffect } from "react";
import { Excalidraw, WelcomeScreen, MainMenu } from "@excalidraw/excalidraw";
import { FILE } from "../../dashboard/components/FileList";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { toast } from "sonner";

function WhiteBoard({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  fileData: FILE;
}) {
  const UIOptions = {
    canvasActions: {
      export: false,
      loadScene: false,
      saveToActiveFile: false,
      toggleTheme: false,
    },
  };

  const updateWhiteboard = useMutation(api.files.updateWhiteboard);
  const [whiteBoardData, setWhiteBoardData] = React.useState<any>();
  useEffect(() => {
    onSaveTrigger && saveWhiteBoard();
  }, [onSaveTrigger]);
  const saveWhiteBoard = () => {
    updateWhiteboard({
      _id: fileId,
      whiteboard: JSON.stringify(whiteBoardData),
    }).then((response) => toast("Whiteboard saved successfully!"));
  };

  return (
    <div style={{ height: "50rem" }} className="custom-styles">
      {fileData && (
        <Excalidraw
          initialData={{
            elements: fileData?.whiteboard && JSON.parse(fileData?.whiteboard),
          }}
          onChange={(excalidrawElements, appState, files) =>
            setWhiteBoardData(excalidrawElements)
          }
          //@ts-ignore
          UIOptions={UIOptions}
        >
          <MainMenu>
            <MainMenu.DefaultItems.ClearCanvas />
            <MainMenu.DefaultItems.SaveAsImage />
            <MainMenu.DefaultItems.ChangeCanvasBackground />
          </MainMenu>
          <WelcomeScreen>
            <WelcomeScreen.Hints.MenuHint />
            <WelcomeScreen.Hints.MenuHint />
            <WelcomeScreen.Hints.ToolbarHint />
            <WelcomeScreen.Center>
              <WelcomeScreen.Center.MenuItemHelp />
            </WelcomeScreen.Center>
            <WelcomeScreen.Hints.HelpHint />
          </WelcomeScreen>
        </Excalidraw>
      )}
    </div>
  );
}

export default WhiteBoard;
