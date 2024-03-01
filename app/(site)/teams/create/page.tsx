"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

function CreateTeam() {
  const [teamName, setTeamName] = useState("");
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();

  const createTeam = useMutation(api.teams.createTeam);
  const createNewTeam = () => {
    createTeam({
      TeamName: teamName,
      CreatedBy: user?.email,
    }).then((response) => {
      console.log(response);
      if (response) {
        router.push("/dashboard");
        toast("Team Created Successfully👍");
      }
    });
  };

  return (
    <>
      <div className="md:px-16 px-1 py-10 flex flex-row gap-2 items-center justify-center">
        <Image src="/logo.svg" alt="logo" width={55} height={55} />
        <p className="text-4xl font-extralight uppercase hidden md:block">
          canvas
        </p>
      </div>
      <div className="flex flex-col items-center px-2 mt-16">
        <div className="rounded-md flex flex-row items-center gap-2 bg-green-300 px-4 text-slate-600 my-4">
          <Image src="/team.png" width={30} height={30} alt="team" />
          <p className=" text-sm">Team Name</p>
        </div>
        <h2 className="font-bold text-[40px] py-3">
          What should we call your team?
        </h2>
        <h2 className="text-gray-500">
          You can always change this later from settings.
        </h2>
        <div className="mt-7 w-[40%] flex flex-col items-center">
          <label className="text-gray-500">Team Name</label>
          <Input
            placeholder="Team Name"
            className="mt-3 md:w-[70%] lg:w-1/2"
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <Button
          className="bg-blue-500 mt-9 w-1/6 hover:bg-blue-600 rounded-sm"
          disabled={!(teamName && teamName.length > 0)}
          onClick={() => createNewTeam()}
        >
          Create Team
        </Button>
      </div>
    </>
  );
}

export default CreateTeam;
