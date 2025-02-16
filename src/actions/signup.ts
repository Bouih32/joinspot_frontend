import { DataType } from "@/libs/types";
import axios from "axios";

export const signup = async (data: DataType) => {
  try {
    const res = await axios.post("http://localhost:4000/user/register", data, {
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
