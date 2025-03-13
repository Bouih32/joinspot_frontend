import { API_URL } from "@/libs/constantes";
import { cookies } from "next/headers";

export const getHeaderData = async () => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");
  if (!token) return null;
  try {
    const res = await fetch(`${API_URL}/user/profile`, {
      method: "GET",
      credentials: "include", // Ensures cookies are sent
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    });

    if (!res.ok) {
      const errorText = await res.text(); // Log the error message returned from the server
      console.error(`Server responded with ${res.status}:`, errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Response: ${errorText}`,
      );
    }
    const data = await res.json();
    const userData = data.user.avatar;

    return userData;
  } catch (error) {
    console.error("Login error", error);
    throw error;
  }
};
