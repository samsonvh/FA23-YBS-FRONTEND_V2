import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT, JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    // user: {
    //   role: string | undefined | null;
    // } & DefaultSession["user"];
    user: User;
    token: JWT;
  }

  interface User {
    accessToken: string;
    refreshToken: string;
    id: number;
    role: string;
    userName: string;
    email: string;
    image?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    refreshToken: string;
    role: string;
  }
}
