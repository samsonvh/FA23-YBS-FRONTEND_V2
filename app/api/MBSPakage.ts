import { authOptions } from "./auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { getCurrentSession } from "./session";
export const getAllMBSPackages = async () => {
  try {
    // const session = await getServerSession(authOptions);
    // console.log("hihi", session);
    const res = await fetch(
      `${process.env.SERVER}/membership-packages`
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

export const getMBSPackageDetails = async ({ id }: { id: number }) => {
  try {
    // const session = await getServerSession();
    // console.log(session);
    const res = await fetch(
      `${process.env.SERVER}/membership-packages/${id}`
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

export const createMBSPackages = async (packageDetails) => {
  const session = await getCurrentSession();
  const accessToken = session.token.accessToken;
  try {
    const res = await fetch(`${process.env.SERVER}/membership-packages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "x-api-version": "1.0",
      },
      body: JSON.stringify(packageDetails),
    });
    if (res.ok) {
      console.log("Membership package created successfully");
    } else {
      console.error("Failed to create membership package");
    }
  } catch (error) {
    console.error("Error when call API:", error.message);
    throw error;
  }
};
