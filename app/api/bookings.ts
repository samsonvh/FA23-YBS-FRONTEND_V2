import { getCurrentSession } from "@/app/api/session";

export const getAllBookings = async () => {
  const session = await getCurrentSession();
  const accessToken = session.token.accessToken;
  try {
    const res = await fetch(`${process.env.SERVER}/bookings`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
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

export const getBookingDetails = async ({ id }: { id: number }) => {
  const session = await getCurrentSession();
  const accessToken = session.token.accessToken;
  try {
    const res = await fetch(`${process.env.SERVER}/bookings/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
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

export const bookingForGuest = async (bookingDetails) => {
  const session = await getCurrentSession();
  const accessToken = session.token.accessToken;
  const formData = new FormData();

  Object.keys(bookingDetails).forEach((key) => {
    formData.append(key, bookingDetails[key]);
  });
  try {
    const res = await fetch(`${process.env.SERVER}/bookings/guests`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
    if (res.ok) {
      console.log("Booking for guest created successfully");
    } else {
      console.error("Failed to create booking for guest");
    }
  } catch (error) {
    console.error("Error when call API:", error.message);
    throw error;
  }
};

export const bookingForMember = async (bookingDetails) => {
  const session = await getCurrentSession();
  const accessToken = session.token.accessToken;
  const formData = new FormData();

  Object.keys(bookingDetails).forEach((key) => {
    formData.append(key, bookingDetails[key]);
  });
  try {
    const res = await fetch(`${process.env.SERVER}/bookings/members`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    });
    if (res.ok) {
      console.log("Booking for member created successfully");
    } else {
      console.error("Failed to create booking for member");
    }
  } catch (error) {
    console.error("Error when call API:", error.message);
    throw error;
  }
};
