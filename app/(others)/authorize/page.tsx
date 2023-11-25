"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { el } from "@faker-js/faker";
import { useEffect } from "react";
const Authorize = () => {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      console.log("autho:", session);
      if (!session) {
        signOut({ callbackUrl: "/login" });
      } else {
        if (session.user.role) {
          switch (session.user.role) {
            case "ADMIN":
              redirect("/admin");
            case "COMPANY":
              redirect("/company");
            case "MEMBER":
              redirect("/");
          }
        }
        signOut({ callbackUrl: "/login" });
      }
    }
  }, [status]);
};

export default Authorize;
