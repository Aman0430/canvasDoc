import React from "react";
import { Excalidraw, WelcomeScreen, MainMenu } from "@excalidraw/excalidraw";

function WhiteBoard() {
  const UIOptions = {
    canvasActions: {
      export: false,
      loadScene: false,
      saveToActiveFile: false,
      toggleTheme: false,
    },
  };

  return (
    <div style={{ height: "50rem" }} className="custom-styles">
      <Excalidraw
        onChange={(excalidrawElements, appState, files) =>
          console.log(excalidrawElements)
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
    </div>
  );
}

export default WhiteBoard;
