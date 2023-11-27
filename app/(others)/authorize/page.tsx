"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const { data: session, status } = useSession();
  switch (status) {
    case "authenticated":
      if (session.token.role) {
      } else {
        signOut({ callbackUrl: "/login" });
      }
      console.log(session);
      break;
    case "unauthenticated":
      break;
    case "loading":
      break;
  }

  return <div>page</div>;
};

export default page;
