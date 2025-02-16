import { LoginType } from "@/libs/types";
import axios from "axios";

export const login = async (data: LoginType) => {
  try {
    await axios.post("http://localhost:4000/user/login", data, {
      withCredentials: true,
    });
  } catch (error) {
    console.error("Login error", error);
  }
};
