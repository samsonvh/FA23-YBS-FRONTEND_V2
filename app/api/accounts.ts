import { getCurrentSession } from "@/app/api/session";
export const getAllAccounts = async () => {
  const session = await getCurrentSession();
  const accessToken = session.token.accessToken;
  try {
    const res = await fetch(`${process.env.SERVER}/accounts`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export const getAccountDetails = async ({ id }: { id: number }) => {
  try {
    const session = await getCurrentSession();
    const accessToken = session.token.accessToken;

    const res = await fetch(`${process.env.SERVER}/accounts/${id}`, {
      headers: {
        Authorization: `${accessToken}`,
      },
      cache: "no-cache",
    });

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};
