"use client";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { FileContext } from "@/Context/FileContext";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const convex = useConvex();
  const { user }: any = useKindeBrowserClient();
  const [fileList, setFileList] = useState();
  const router = useRouter();
  useEffect(() => {
    user && checkTeam();
  }, [user]);

  const checkTeam = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email,
    });

    if (!result?.length) {
      router.push("teams/create");
    }
  };

  return (
    <div>
      <FileContext.Provider value={{ fileList, setFileList }}>
        <div className="grid grid-cols-4">
          <div className="bg-white h-screen w-64 fixed">
            <Sidebar />
          </div>
          <div className="col-span-4 ml-72">{children}</div>
        </div>
      </FileContext.Provider>
    </div>
  );
}

export default DashboardLayout;
