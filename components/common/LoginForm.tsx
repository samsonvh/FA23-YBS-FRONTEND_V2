"use client";
import Link from "next/link";
import { useState } from "react";
import { ICredentialsInformation } from "@functions/apis/authenticate";
import { signIn } from "next-auth/react";
import { submitLoginHandler } from "@/functions/handlers/submitHandler";

const LoginForm = () => {
  const [credentialsInformation, setCredentialsInformation] =
    useState<ICredentialsInformation>(null);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await submitLoginHandler(credentialsInformation);
      }}
      className="row y-gap-20"
    >
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Don&apos;t have an account yet?{" "}
          <Link href="/signup" className="text-blue-1">
            Sign up for free
          </Link>
        </p>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input
            onChange={(e) =>
              setCredentialsInformation({
                ...credentialsInformation,
                email: e.target.value,
              })
            }
            type="text"
            required
          />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input
            onChange={(e) =>
              setCredentialsInformation({
                ...credentialsInformation,
                password: e.target.value,
              })
            }
            type="password"
            required
          />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <a href="#" className="text-14 fw-500 text-blue-1 underline">
          Forgot your password?
        </a>
      </div>
      {/* End .col */}

      <div className="col-12">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign In <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default LoginForm;
