import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";

const handler = NextAuth({
  secret: "b53bcf919f24746d72094b8b86c0325cf40723d3d63240705db51a27b261bc96",
  callbacks: {
    // async jwt({ token, account }) {
    //   if (account) {
    //     console.log({ token, account });
    //     token.accessToken = account.access_token;
    //   }
    //   return token;
    // },
    // async session({ session, token, user }) {
    //   console.log({ session, token, user });

    //   (session as any).accessToken = token.accessToken;
    //   return session;
    // },
  },
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID!,
    //   clientSecret: process.env.GOOGLE_SECRET!,
    // }),
    // EmailProvider({
    //   secret: process.env.NODEMAILER_PW,
    //   server: process.env.NODEMAILER_EMAIL,
    // }),
  ],
});

export { handler as GET, handler as POST };
