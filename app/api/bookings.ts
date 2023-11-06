import { authOptions } from "./auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
export const getAllBookings = async () => {
  try {
    // const session = await getServerSession(authOptions);
    // console.log("hihi", session);
    const res = await fetch(
      `${process.env.SERVER}/bookings`
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

export const getBookingDetails = async ({ id }: { id: number }) => {
  try {
    // const session = await getServerSession();
    // console.log(session);
    const res = await fetch(
      `${process.env.SERVER}/bookings/${id}`
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
