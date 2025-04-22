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

export const getUserMessages = async (params?: Record<string, string>) => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const queryString =
      params && Object.keys(params).length > 0
        ? new URLSearchParams(params).toString()
        : "";

    const link = queryString
      ? `${API_URL}/user/messages?${queryString}`
      : `${API_URL}/user/messages`;
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

export const getActivityTickets = async (params?: Record<string, string>) => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const queryString =
      params && Object.keys(params).length > 0
        ? new URLSearchParams(params).toString()
        : "";

    const link = queryString
      ? `${API_URL}/user/profile/revenue?${queryString}`
      : `${API_URL}/user/profile/revenue`;
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

export const getActive = async (params?: Record<string, string>) => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const queryString =
      params && Object.keys(params).length > 0
        ? new URLSearchParams(params).toString()
        : "";

    const link = queryString
      ? `${API_URL}/user/profile/active?${queryString}`
      : `${API_URL}/user/profile/active`;
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

export const getJoinedUsers = async (params?: Record<string, string>) => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");

    const queryString =
      params && Object.keys(params).length > 0
        ? new URLSearchParams(params).toString()
        : "";

    const link = queryString
      ? `${API_URL}/user/profile/joined?${queryString}`
      : `${API_URL}/user/profile/joined`;
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

export const getAdminActivities = async (params?: Record<string, string>) => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const queryString =
      params && Object.keys(params).length > 0
        ? new URLSearchParams(params).toString()
        : "";

    const link = queryString
      ? `${API_URL}/user/admin/active?${queryString}`
      : `${API_URL}/user/admin/active`;
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

export const getDegrees = async (params?: Record<string, string>) => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const queryString =
      params && Object.keys(params).length > 0
        ? new URLSearchParams(params).toString()
        : "";

    const link = queryString
      ? `${API_URL}/user/degrees?${queryString}`
      : `${API_URL}/user/degrees`;

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
