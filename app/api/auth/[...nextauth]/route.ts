import NextAuth, { DefaultUser, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      await fetch("http://localhost:5006/api/authentication/google-login", {
        method: "POST",
        headers: {
          "content-type": "application/json;",
        },
        body: JSON.stringify(account.id_token),
      }).then(async (response) => {
        const data = await response.json();
        account.access_token = data.accessToken;
        account.refresh_token = data.refreshToken;
        user.name = data.userName;
        user.image = data.imgUrl;
        user.role = data.role;
      });
      return true;
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
