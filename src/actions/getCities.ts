import { API_URL } from "@/libs/constantes";
import axios, { isAxiosError } from "axios";

export const getCities = async () => {
  try {
    const res = await axios.get(`${API_URL}/user/cities`, {
      withCredentials: true,
    });

    return res.data;
  } catch (error) {
    console.error("Error fetching cities:", error);

    if (isAxiosError(error)) {
      console.error("Response status:", error.response?.status);
      console.error("Response data:", error.response?.data);
    }

    return [];
  }
};
