"use client"
import { signIn } from "next-auth/react";

const LoginWithSocial = () => {
  const handleLogin = () => {
    signIn("google", {
      callbackUrl: "/"
    });
  }

  return (
    <>
      <div className="col-md-6 col-12">
        <button className="button col-12 -outline-blue-1 text-blue-1 py-15 rounded-8 ">
          <i className="icon-apple text-15 mr-10" />
          Facebook
        </button>
      </div>

      <div className="col-md-6 col-12">
        <button onClick={handleLogin} className="button col-12 -outline-red-1 text-red-1 py-15 rounded-8 ">
          <i className="icon-apple text-15 mr-10" />
          Google
        </button>
      </div>
    </>
  );
};

export default LoginWithSocial;
