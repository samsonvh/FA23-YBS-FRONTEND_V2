import { authOptions } from "./auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
export const getAllMembers = async () => {
  try {
    // const session = await getServerSession(authOptions);
    // console.log("hihi", session);
    const res = await fetch(
      `${process.env.SERVER}/members`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${session.token}`,
      //   },
      // }
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export const getMemberDetails = async ({ id }: { id: number }) => {
  try {
    // const session = await getServerSession();
    // console.log(session);
    const res = await fetch(
      `${process.env.SERVER}/members/${id}`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${session.token}`,
      //   },
      // }
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};
