import { getCurrentSession } from "./session";
export const getAllCompanies = async () => {
  try {
    // const session = await getServerSession(authOptions);
    // console.log("hihi", session);
    const res = await fetch(
      `${process.env.SERVER}/companies`
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

export const getCompanyDetails = async ({ id }: { id: number }) => {
  try {
    // const session = await getServerSession();
    // console.log(session);
    const res = await fetch(
      `${process.env.SERVER}/companies/${id}`,
      {
        cache: "no-cache",
      }
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

export const createCompanies = async (companyDetails) => {
  const session = await getCurrentSession();
  const accessToken = session.token.accessToken;
  const formData = new FormData();

  Object.keys(companyDetails).forEach((key) => {
    formData.append(key, companyDetails[key]);
  });
  try {
    const res = await fetch(`${process.env.SERVER}/companies`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
    if (res.ok) {
      console.log("Company created successfully");
    } else {
      console.error("Failed to create company");
    }
  } catch (error) {
    console.error("Error when call API:", error.message);
    throw error;
  }
};
