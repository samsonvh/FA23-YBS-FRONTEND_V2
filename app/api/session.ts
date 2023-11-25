"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export const getCurrentSession = async () => {
  try {
    const session = await getServerSession(authOptions);
    return session;
  } catch (error) {
    console.error("Error get session:", error.message);
    throw error;
  }
};
