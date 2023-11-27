import React from "react";
import { ICredentialsInformation } from "../apis/authenticate";
import { signIn } from "next-auth/react";

export const submitLoginHandler = async ({
  email,
  password,
}: ICredentialsInformation) => {
  try {
    await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: "/authorize",
    });
  } catch (error) {
    console.error("Error submitting form:", error.message);
  }
};

export const submitGoogleLoginHandler = async () => {
  try {
    await signIn("google", {
      redirect: true,
      callbackUrl: "/authorize",
    });
  } catch (error) {
    console.log("Error", error);
  }
};
