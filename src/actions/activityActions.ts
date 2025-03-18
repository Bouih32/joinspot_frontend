import { API_URL } from "@/libs/constantes";
import { AddActivityT } from "@/libs/types";
import Cookies from "js-cookie";

export const addActivity = async (activity: AddActivityT) => {
  // On the client side
  const token = Cookies.get("token"); // Retrieve the token from cookies
  console.log(token);
  if (!token) return null;

  try {
    const res = await fetch(`${API_URL}/activity/add`, {
      method: "POST",
      credentials: "include", // Ensures cookies are sent
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(activity),
    });

    if (!res.ok) {
      const errorText = await res.text(); // Log the error message returned from the server
      console.error(`Server responded with ${res.status}:`, errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Response: ${errorText}`,
      );
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("add error", error);
    throw error;
  }
};
