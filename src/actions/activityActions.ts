"use server";

import { ReviewT } from "@/components/activities/details/ReviewButton";
import { JoinT } from "@/components/activities/join/JoinForm";
import { API_URL } from "@/libs/constantes";
import { ActivityType, AddActivityT } from "@/libs/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getActivities = async (params?: Record<string, string>) => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const queryString =
      params && Object.keys(params).length > 0
        ? new URLSearchParams(params).toString()
        : "";

    const link = queryString
      ? `${API_URL}/activity?${queryString}`
      : `${API_URL}/activity`;

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
    const activities: ActivityType[] = data.activities;

    return {
      activities: activities.map((ele) => ({
        activityId: ele.activityId,
        coverPic: ele.coverPic,
        title: ele.title,
        description: ele.description,
        seat: ele.seat,
        price: ele.price,
        score: ele.score,
        categoryId: ele.categoryId,
        avatar: ele.user?.avatar ?? ele.user.avatar,
        userName: ele.user.userName,
        city: ele.city.cityName,
        category: ele.category.categoryName,
        joined: ele.joined,
        userId: ele.user.userId,
      })),
      pages: data.pages,
    };
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
};

export const addActivity = async (activity: AddActivityT) => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const res = await fetch(`${API_URL}/activity/add`, {
      method: "POST",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
      body: JSON.stringify(activity),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Server responded with ${res.status}:`, errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Response: ${errorText}`,
      );
    }
    revalidateTag("activities");
    revalidateTag("getUserActivities");
    return await res.json();
  } catch (error) {
    console.error("add error", error);
    throw error;
  }
};

export const reviewActivity = async (review: ReviewT, id: string) => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const res = await fetch(`${API_URL}/activity/${id}/review`, {
      method: "POST",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
      body: JSON.stringify(review),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Server responded with ${res.status}:`, errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Response: ${errorText}`,
      );
    }

    return await res.json();
  } catch (error) {
    console.error("add error", error);
    throw error;
  }
};

export const joinActivity = async (data: JoinT, id: string) => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token");
    const res = await fetch(`${API_URL}/activity/${id}/join`, {
      method: "POST",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Server responded with ${res.status}:`, errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Response: ${errorText}`,
      );
    }
    revalidateTag(id);
    revalidateTag("activities");
    revalidateTag("useActivities");
    return await res.json();
  } catch (error) {
    console.error("join error", error);
    throw error;
  }
};

export const addTagTwo = async (tags: string[]) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");
  try {
    const res = await fetch(`${API_URL}/user/tags`, {
      method: "POST",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
      body: JSON.stringify(tags),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Server responded with ${res.status}:`, errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Response: ${errorText}`,
      );
    }

    return await res.json();
  } catch (error) {
    console.error("join error", error);
    throw error;
  }
};
