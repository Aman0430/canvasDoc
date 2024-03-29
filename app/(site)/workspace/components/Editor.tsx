"use client";
import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
//@ts-ignore
import Header from "@editorjs/header";
//@ts-ignore
import List from "@editorjs/list";
//@ts-ignore
import CheckList from "@editorjs/checklist";
//@ts-ignore
import SimpleImage from "@editorjs/simple-image";
//@ts-ignore
import CodeTool from "@editorjs/code";
//@ts-ignore
import InlineCode from "@editorjs/inline-code";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { FILE } from "../../dashboard/components/FileList";

const rawDocument = {
  time: 1550476186479,
  blocks: [
    {
      data: {
        text: "Document Name",
        level: 2,
      },
      id: "123",
      type: "header",
    },
    {
      data: {
        level: 4,
      },
      id: "1234",
      type: "header",
    },
  ],
  version: "2.8.1",
};

function Editor({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  fileData: FILE;
}) {
  const ref = useRef<EditorJS>();
  const [document, setDocument] = useState(rawDocument);
  const updateDocument = useMutation(api.files.updateDocument);

  useEffect(() => {
    fileData && initEditor();
  }, [fileData]);

  useEffect(() => {
    onSaveTrigger && onSaveDoc();
    console.log("trigger value: ", onSaveTrigger);
  }, [onSaveTrigger]);

  const onSaveDoc = () => {
    if (ref.current) {
      ref.current
        .save()
        .then((outputData) => {
          console.log("Article data: ", outputData);
          updateDocument({
            _id: fileId,
            document: JSON.stringify(outputData),
          }).then(
            (response) => {
              toast("Document updated successfully!");
            },
            (e) => {
              toast("Error while updating document!");
            }
          );
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    }
  };

  const initEditor = () => {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      holder: "editorjs",
      data: fileData?.document ? JSON.parse(fileData.document) : rawDocument,
      tools: {
        header: {
          class: Header,
          shortcut: "CMD+SHIFT+H",
          config: {
            placeholder: "Enter a title",
          },
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        CheckList: {
          class: CheckList,
          inlineToolbar: true,
        },
        image: SimpleImage,
        code: CodeTool,
        inlineCode: {
          class: InlineCode,
          shortcut: "CMD+SHIFT+M",
        },
      },
    });
    ref.current = editor;
  };
  return <div id="editorjs" className="h-screen bg-[#fffce8]"></div>;
}

export default Editor;
