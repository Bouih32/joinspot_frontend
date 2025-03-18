import { API_URL } from "@/libs/constantes";
import { AddActivityT } from "@/libs/types";

export const addActivity = async (activity: AddActivityT) => {
  try {
    const res = await fetch(`${API_URL}/activity/add`, {
      method: "POST",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activity),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Server responded with ${res.status}:`, errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Response: ${errorText}`,
      );
    }

    return await res.json();
  } catch (error) {
    console.error("add error", error);
    throw error;
  }
};
