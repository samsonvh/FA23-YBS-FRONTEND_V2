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
      if (!session) {
        // console.log(status);
        signOut({ callbackUrl: "/login" });
      } else {
        if (session.user.role) {
          switch (session.user.role) {
            case "ADMIN":
              redirect("/admin/dashboard");
            // setRole("/admin");
            // break;
            case "COMPANY":
              redirect("/company");
            // setRole("/company");
            // break;
            default:
              redirect("/");
            // setRole("/");
            // break;
          }
          // redirect(role);
        }
        signOut({ callbackUrl: "/login" });
      }
    }
  }, [status]);
};

export default Authorize;
