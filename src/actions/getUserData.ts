import { API_URL } from "@/libs/constantes";
import { cookies } from "next/headers";

export const getHeaderData = async () => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");
  if (!token) return null;
  try {
    const res = await fetch(`${API_URL}/user/profile`, {
      method: "GET",
      credentials: "include", // Ensures cookies are sent
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    });

    if (!res.ok) {
      const errorText = await res.text(); // Log the error message returned from the server
      console.error(`Server responded with ${res.status}:`, errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Response: ${errorText}`,
      );
    }
    const data = await res.json();
    const userData = data.user;

    return userData;
  } catch (error) {
    console.error("request error", error);
    throw error;
  }
};

export const getProfileData = async () => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");
  if (!token) return null;
  try {
    const res = await fetch(`${API_URL}/user/profile/header`, {
      method: "GET",
      credentials: "include", // Ensures cookies are sent
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    });

    if (!res.ok) {
      const errorText = await res.text(); // Log the error message returned from the server
      console.error(`Server responded with ${res.status}:`, errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Response: ${errorText}`,
      );
    }
    const data = await res.json();
    const info = data.data;

    const userData = {
      avatar: info.user.avatar,
      userName: info.user.userName,
      background: info.user.background,
      activityNumber: info.activityNumber,
      followersNum: info.followersNum,
      followingNum: info.followingNum,
      joinedNum: info.joinedNum,
      totalRevenue: info.totalRevenue,
      activeActivities: info.activeActivities,
    };

    return userData;
  } catch (error) {
    console.error("request error", error);
    throw error;
  }
};

export const getAdminStats = async () => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");
  if (!token) return null;
  try {
    const res = await fetch(`${API_URL}/user/admin/header`, {
      method: "GET",
      credentials: "include", // Ensures cookies are sent
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    });

    if (!res.ok) {
      const errorText = await res.text(); // Log the error message returned from the server
      console.error(`Server responded with ${res.status}:`, errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Response: ${errorText}`,
      );
    }
    const data = await res.json();
    const info = data.data;

    const userData = {
      joinedNum: info.joinedNum,
      totalRevenue: info.totalRevenue,
      activeActivities: info.activeActivities,
    };

    return userData;
  } catch (error) {
    console.error("request error", error);
    throw error;
  }
};

export const getUserTickets = async (params?: Record<string, string>) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");
  if (!token) return null;
  const queryString =
    params && Object.keys(params).length > 0
      ? new URLSearchParams(params).toString()
      : "";

  const link = queryString
    ? `${API_URL}/user/profile/ticket?${queryString}`
    : `${API_URL}/user/profile/ticket`;

  try {
    const res = await fetch(link, {
      method: "GET",
      credentials: "include", // Ensures cookies are sent
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    });

    if (!res.ok) {
      const errorText = await res.text(); // Log the error message returned from the server
      console.error(`Server responded with ${res.status}:`, errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Response: ${errorText}`,
      );
    }
    const data = await res.json();
    const tickets = data;

    return tickets;
  } catch (error) {
    console.error("request error", error);
    throw error;
  }
};
