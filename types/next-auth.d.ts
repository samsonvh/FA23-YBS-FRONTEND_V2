import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT, JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      role: string | undefined | null;
    } & DefaultSession["user"];
    token: JWT;
  }
  
  interface DefaultUser{
    role: string | undefined | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string | undefined | null;
    accessToken: string | undefined | null;
    refreshToken: string | undefined | null;
  }
}
