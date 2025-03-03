import { API_URL } from "@/libs/constantes";
import { DataType } from "@/libs/types";
import axios from "axios";

export const signup = async (data: DataType) => {
  try {
    const res = await axios.post(`${API_URL}/user/register`, data, {
      withCredentials: true,
    });

    return res;
  } catch (error) {
    console.log("Signup error", error);

    if (axios.isAxiosError(error) && error.response) {
      return error.response;
    } else {
      throw error;
    }
  }
};
