import { authOptions } from "./auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
export const getAllDocks = async () => {
  try {
    // const session = await getServerSession(authOptions);
    // console.log("hihi", session);
    const res = await fetch(
      `${process.env.SERVER}/docks`
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

export const getDockDetails = async ({ id }: { id: number }) => {
  try {
    // const session = await getServerSession();
    // console.log(session);
    const res = await fetch(
      `${process.env.SERVER}/docks/${id}`
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
