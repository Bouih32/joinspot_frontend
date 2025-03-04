import { API_URL } from "@/libs/constantes";
import axios, { isAxiosError } from "axios";

export const forgotPswrd = async (data: { email: string }) => {
  try {
    const res = await axios.post(`${API_URL}/user/forgot`, data, {
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.log("Forgot error", error);
    if (isAxiosError(error) && error.response) {
      return error.response;
    } else {
      throw error;
    }
  }
};

export const resetForgotenPswrd = async (data: {
  token: string;
  newPassword: string;
}) => {
  try {
    const res = await axios.post(`${API_URL}/user/reset`, data, {
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.log("Reset error", error);
    if (isAxiosError(error) && error.response) {
      return error.response;
    } else {
      throw error;
    }
  }
};
