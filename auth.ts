import NextAuth from "next-auth";

import GitHub from "next-auth/providers/github";

import type { NextAuthConfig } from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { dbConnect } from "./lib/mongodb";

export const config = {
  adapter: MongoDBAdapter(dbConnect()),
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    session: async ({ session, token, user }) => {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      console.log("JWT");

      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
