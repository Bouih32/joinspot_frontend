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

export const getUserNotifications = async () => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const res = await fetch(`${API_URL}/user/notifications`, {
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

    return data.notif;
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
export const getAdminRevenue = async (params?: Record<string, string>) => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const queryString =
      params && Object.keys(params).length > 0
        ? new URLSearchParams(params).toString()
        : "";

    const link = queryString
      ? `${API_URL}/user/admin/revenue?${queryString}`
      : `${API_URL}/user/admin/revenue`;

    const res = await fetch(link, {
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

    return data;
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

export const getFollowing = async () => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const res = await fetch(`${API_URL}/user/following`, {
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

    return data.ids;
  } catch (error) {
    console.error("get error", error);
    throw error;
  }
};

export const getUpdateStatus = async () => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const res = await fetch(`${API_URL}/user/profile/upgrade-status`, {
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

    return data.status;
  } catch (error) {
    console.error("get error", error);
    throw error;
  }
};

export const getAllUsers = async (params?: Record<string, string>) => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const queryString =
      params && Object.keys(params).length > 0
        ? new URLSearchParams(params).toString()
        : "";

    const link = queryString
      ? `${API_URL}/user/users?${queryString}`
      : `${API_URL}/user/users`;
    const res = await fetch(link, {
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

    return data;
  } catch (error) {
    console.error("get error", error);
    throw error;
  }
};

export const getAdminActivities = async () => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const res = await fetch(`${API_URL}/user/admin/active`, {
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

export const getDegrees = async () => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const res = await fetch(`${API_URL}/user/degrees`, {
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

    return data.degrees;
  } catch (error) {
    console.error("get error", error);
    throw error;
  }
};

export const getUserBank = async () => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const res = await fetch(`${API_URL}/user/bank`, {
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

    return data.info;
  } catch (error) {
    console.error("get error", error);
    throw error;
  }
};
