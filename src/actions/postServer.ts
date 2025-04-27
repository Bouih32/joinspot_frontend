"use server";

import { API_URL } from "@/libs/constantes";
import { cookies } from "next/headers";

export const getPosts = async (params?: Record<string, string>) => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const queryString =
      params && Object.keys(params).length > 0
        ? new URLSearchParams(params).toString()
        : "";

    const link = queryString
      ? `${API_URL}/post?${queryString}`
      : `${API_URL}/post`;

    const res = await fetch(link, {
      method: "GET",
      credentials: "include", // Ensures cookies are sent
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
};

export const getLikedPosts = async () => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");

    const res = await fetch(`${API_URL}/post/likes`, {
      method: "GET",
      credentials: "include", // Ensures cookies are sent
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
};
