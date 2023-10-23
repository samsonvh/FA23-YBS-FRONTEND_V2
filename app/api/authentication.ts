import { useSession, signIn, signOut } from "next-auth/react";
import { DefaultSession, ISODateString } from "next-auth";
interface customSession extends DefaultSession {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    idToken?: any | null;
  };
  expires: ISODateString;
}

export const authorization = async ({ idToken }: { idToken: any }) => {
  try {
    const res = await fetch(
      `${process.env.SERVER}/authentication/google-login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export const loginUser = async () => {
  signIn("google");
  const { data: session } = useSession();
  const user: customSession = session;
  const res = await authorization(user.user.idToken);
  console.log(res);
};
