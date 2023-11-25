import { getCurrentSession } from "@/app/api/session";
export const getAllServicePackages = async () => {
  //   const session = await getCurrentSession();
  //   const accessToken = session.token.accessToken;
  try {
    const res = await fetch(`${process.env.SERVER}/service-packages`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};
