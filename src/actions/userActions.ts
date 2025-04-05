"use server";

import { API_URL } from "@/libs/constantes";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
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

export const getMessageDetails = async (id: string) => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const res = await fetch(`${API_URL}/user/messages/details/${id}`, {
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

    return data.message;
  } catch (error) {
    console.error("get error", error);
    throw error;
  }
};

export const getActivityTickets = async () => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const res = await fetch(`${API_URL}/user/profile/revenue`, {
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

    return data.activityRevenue;
  } catch (error) {
    console.error("get error", error);
    throw error;
  }
};

export const getActive = async () => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const res = await fetch(`${API_URL}/user/profile/active`, {
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

    return data.activeActivities;
  } catch (error) {
    console.error("get error", error);
    throw error;
  }
};

export const getJoinedUsers = async () => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const res = await fetch(`${API_URL}/user/profile/joined`, {
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

    return data.strucuredData;
  } catch (error) {
    console.error("get error", error);
    throw error;
  }
};

export const getUserProfile = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/user/profile/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
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

    return data.data;
  } catch (error) {
    console.error("get error", error);
    throw error;
  }
};
