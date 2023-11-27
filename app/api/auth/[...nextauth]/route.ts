import NextAuth, { DefaultUser, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  credentialsLoginHandler,
  googleLoginHandler,
} from "@functions/handlers/authenticateHandler";

export const authOptions: NextAuthOptions = {
  pages: { signIn: "/login" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        let authData = null;
        const { email, password } = credentials;
        if (email && password) {
          authData = await credentialsLoginHandler({ email, password });
        }
        return authData;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }) {
      let isSigned = true;
      try {
        if (account) {
          const provider = account.provider;
          switch (provider) {
            case "google":
              const authData = await googleLoginHandler({
                idToken: account.id_token,
              });
              const newUser = Object.assign(user, authData);
              break;
          }
        } else {
          isSigned = false;
        }
      } catch (error) {
        console.error("Google login error:", error);
        isSigned = false;
      } finally {
        return isSigned;
      }
    },
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.role = user.role;
        token.picture = user.image;
        token.name = user.userName;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.token = token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
