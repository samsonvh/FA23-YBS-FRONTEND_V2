import {
  ICredentialsInformation,
  credentialsLogin,
  googleLogin,
} from "@functions/apis/authenticate";
import { User } from "next-auth";

export const credentialsLoginHandler = async ({
  email,
  password,
}: ICredentialsInformation) => {
  try {
    const response = await credentialsLogin({ email, password });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const googleLoginHandler = async ({
  idToken,
}: ICredentialsInformation) => {
  try {
    const response = await googleLogin({ idToken });
    const data: User = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
