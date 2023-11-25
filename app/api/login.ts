export const login = async (params) => {
  try {
    const res = await fetch(`${process.env.SERVER}/authentication/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-version": "1.0",
      },
      body: JSON.stringify(params),
    });
    if (res.ok) {
      console.log("Login successfully");
    } else {
      console.error("Failed to login");
    }
  } catch (error) {
    console.error("Error when call API:", error.message);
    throw error;
  }
};
