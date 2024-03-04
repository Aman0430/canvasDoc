import { FileContext } from "@/Context/FileContext";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { Archive, MoreHorizontalIcon, NotepadText } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export interface FILE {
  archive: boolean;
  createdAt: string;
  document: string;
  fileName: string;
  teamId: string;
  whiteboard: string;
  _id: string;
  _creationTime: number;
}

function FileList() {
  const { fileList, setFileList } = useContext(FileContext);
  const [fileListt, setFileListt] = useState<any>();
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();

  useEffect(() => {
    fileList && setFileListt(fileList);
    console.log(fileList);
  }, [fileList]);

  return (
    <div>
      <div className="overflow-x-auto mt-9">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right font-semibold text-gray-800">
            <tr>
              <td className="whitespace-nowrap px-4 py-2">File Name</td>
              <td className="whitespace-nowrap px-4 py-2">Created At</td>
              <td className="whitespace-nowrap px-4 py-2">Edited</td>
              <td className="whitespace-nowrap px-4 py-2">Author</td>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {fileListt &&
              fileListt.map((file: FILE, index: number) => (
                <tr className="odd:bg-gray-50" key={index}>
                  <td
                    className="whitespace-nowrap px-4 py-2 font-medium cursor-pointer text-gray-600"
                    onClick={() => router.push(`/workspace/${file._id}`)}
                  >
                    {file.fileName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                    {moment(file._creationTime).format("DD MMM YYYY")}{" "}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                    {moment(file._creationTime).format("DD MMM YYYY")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                    {user && (
                      <Image
                        src={user?.picture}
                        alt="user"
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                    )}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-600">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreHorizontalIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem className="gap-3">
                          <Archive className="h-4 w-4" /> Archive
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="gap-3"
                          onClick={() => router.push(`/workspace/${file._id}`)}
                        >
                          <NotepadText className="h-4 w-4" /> Open
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FileList;
