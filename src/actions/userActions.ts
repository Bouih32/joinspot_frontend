"use server";

import { API_URL } from "@/libs/constantes";
import { cookies } from "next/headers";

export const getUserTags = async () => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const res = await fetch(`${API_URL}/user/tags`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      }, // Ensures cookies are sent automatically
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Server responded with ${res.status}:`, errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Response: ${errorText}`,
      );
    }

    const data = await res.json();

    return data.tags;
  } catch (error) {
    console.error("get error", error);
    throw error;
  }
};

export const getUserMessages = async () => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const res = await fetch(`${API_URL}/user/messages`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      }, // Ensures cookies are sent automatically
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Server responded with ${res.status}:`, errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Response: ${errorText}`,
      );
    }

    const data = await res.json();

    return data.messages;
  } catch (error) {
    console.error("get error", error);
    throw error;
  }
};
