export const getAllRoutes = async () => {
  try {
    const res = await fetch(`${process.env.SERVER}/routes`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export const getRouteDetails = async ({ id }: { id: number }) => {
  try {
    const res = await fetch(`${process.env.SERVER}/routes/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};
