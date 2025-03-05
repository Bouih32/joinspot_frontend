import { API_URL } from "@/libs/constantes";
import { LoginType } from "@/libs/types";
import axios, { isAxiosError } from "axios";

export const login = async (data: LoginType) => {
  try {
    const res = await axios.post(`${API_URL}/user/login`, data, {
      withCredentials: true, // ✅ Ensures cookies are sent
    });

    console.log("Response headers:", res.headers); // ✅ Debug headers

    return res;
  } catch (error) {
    console.log("Login error", error);
    if (isAxiosError(error) && error.response) {
      return error.response;
    } else {
      throw error;
    }
  }
};
