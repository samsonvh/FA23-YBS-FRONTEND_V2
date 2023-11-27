export interface ICredentialsInformation {
  email?: string;
  password?: string;
  idToken?: string;
}

export const credentialsLogin = async ({
  email,
  password,
}: ICredentialsInformation) => {
  const url =
    process.env.BACKEND_SERVER +
    process.env.API_VERSION_1 +
    "/authentication/login";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-version": "1.0",
    },
    body: JSON.stringify({ email, password }),
  });
  return response;
};

export const googleLogin = async ({ idToken }: ICredentialsInformation) => {
  const url =
    process.env.BACKEND_SERVER +
    process.env.API_VERSION_1 +
    "/authentication/google-login";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(idToken),
  });
  return response;
};
