import { API_URL } from "@/libs/constantes";
import axios from "axios";

export const logout = async () => {
  await axios.post(
    `${API_URL}/user/logout`,
    {},
    {
      withCredentials: true,
    },
  );
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
  window.location.href = "/login";
};
