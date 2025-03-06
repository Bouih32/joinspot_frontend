import { API_URL } from "@/libs/constantes";
import { LoginType } from "@/libs/types";

export const login = async (data: LoginType) => {
  try {
    const response = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include", // This is equivalent to withCredentials: true
    });

    // Get the response data
    const responseData = await response.json();

    // Return in a format similar to axios response
    return {
      status: response.status,
      data: responseData,
      ok: response.ok,
    };
  } catch (error) {
    console.log("Login error", error);
    throw error;
  }
};
