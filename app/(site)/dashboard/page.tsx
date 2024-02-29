"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useQuery } from "convex/react";
import React, { useEffect } from "react";

function page() {
  const { user }: any = useKindeBrowserClient();
  const getUser = useQuery(api.user.getUser, { email: user?.email });

  useEffect(() => {
    if (user) {
      console.log(getUser);
    }
  }, [user]);

  return (
    <div>
      dashboard
      <Button>
        <LogoutLink>Logout</LogoutLink>
      </Button>
    </div>
  );
}

export default page;
