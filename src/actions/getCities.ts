import { API_URL } from "@/libs/constantes";
import axios, { isAxiosError } from "axios";

export const getCities = async () => {
  try {
    const res = await axios.get(`${API_URL}/user/cities`, {
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
