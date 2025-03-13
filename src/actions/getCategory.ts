import { API_URL } from "@/libs/constantes";
import axios, { isAxiosError } from "axios";

export const getCategories = async () => {
  try {
    const res = await axios.get(`${API_URL}/category`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log("Login error", error);
    if (isAxiosError(error) && error.response) {
      return error.response;
    } else {
      throw error;
    }
  }
};

export const getCategoriesServer = async () => {
  try {
    const res = await fetch(`${API_URL}/category`, {
      credentials: "include", // Equivalent to withCredentials: true in axios
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    return data.categories;
  } catch (error) {
    console.log("Login error", error);
    return { error: error instanceof Error ? error.message : "Unknown error" };
  }
};
