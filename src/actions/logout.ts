import axios from "axios";

export const logout = async () => {
  await axios.post(
    "http://localhost:4000/user/logout",
    {},
    {
      withCredentials: true,
    },
  );
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
};
