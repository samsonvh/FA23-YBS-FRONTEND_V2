import NextAuth, { Account, DefaultUser, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { da } from "@faker-js/faker";
import { AdapterUser } from "next-auth/adapters";

interface User extends DefaultUser {
  accessToken?: string;
  refreshToken?: string;
  id: string;
  role: string;
  userName?: string;
  image?: string | null;
}
let user;
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) return null;
        try {
          const url =
            process.env.BACKEND_HOST +
            process.env.API_VERSION +
            "/authentication/login";
          const res = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-version": "1.0",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });
          user = await res.json();
          console.log("sign in", user);
          if (!user.error) {
            return {
              ...user,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }: { user?: User; account: Account }) {
      console.log("account type:", account);
      try {
        if (account.provider === "google") {
          const response = await fetch(
            `${process.env.SERVER}/authentication/google-login`,
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(account.id_token),
            }
          );

          const data = await response.json();
          console.log(data);

          if (!data.error) {
            account.access_token = data.accessToken;
            account.refresh_token = data.refreshToken;
            user.name = data.userName;
            user.image = data.image;
            user.role = data.role;
            return true;
          } else {
            console.error("Google login error:", data.error);
            return false;
          }
        } else if ((account.provider === "credentials", user)) {
          account.access_token = user.accessToken;
          account.refresh_token = user.refreshToken;
          user.name = user.userName;
          return true;
        }
      } catch (error) {
        console.error("Error during login:", error);
        return false;
      }
    },
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      if (user) {
        token.name = user.name;
        token.picture = user.image;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.name = token.name;
      session.user.image = token.picture;
      session.user.role = token.role;
      session.token = token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
