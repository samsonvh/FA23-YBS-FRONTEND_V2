export const getAllYachts = async () => {
  try {
    const res = await fetch(`${process.env.SERVER}/yachts`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export const getYachtDetails = async ({ id }: { id: number }) => {
  try {
    const res = await fetch(`${process.env.SERVER}/yachts/${id}`);

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export const getAllYachtTypes = async () => {
  try {
    const res = await fetch(`${process.env.SERVER}/yacht-types`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};
