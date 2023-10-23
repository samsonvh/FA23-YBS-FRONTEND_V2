"use client";
import { DefaultSession, ISODateString } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import { authorization, loginUser } from "@/app/api/authentication";
import Image from "next/image";
import { useState, useEffect } from "react";
const LoginWithSocial = () => {
  // const { data: session } = useSession();
  // const loginUser = async () => {
  //   interface customSession extends DefaultSession {
  //     user?: {
  //       name?: string | null;
  //       email?: string | null;
  //       image?: string | null;
  //       idToken?: any | null;
  //     };
  //     expires: ISODateString;
  //   }
  //   const user: customSession = session;
  //   const res = await authorization(user.user.idToken);
  //   console.log(res);
  // };

  // useEffect(() => {
  //   loginUser();
  // }, [session && session.user]);

  return (
    <>
      <div className="col-12">
        <button
          onClick={() => loginUser()}
          className="button col-12 -outline-red-1 text-red-1 py-15 rounded-8"
        >
          <i className="icon-google text-15 mr-10" />
          Google
        </button>
      </div>
      <div className="col-12">
        <a
          href="#"
          className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          onClick={() => signOut()}
        >
          <Image
            width={20}
            height={20}
            src="/img/dashboard/sidebar/log-out.svg"
            alt="image"
            className="mr-15"
          />
          Logout
        </a>
      </div>
    </>
  );
};

export default LoginWithSocial;
