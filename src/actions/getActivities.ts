import { infoT } from "@/components/profileUi/settingsForms/InfoForm";
import { API_URL } from "@/libs/constantes";
import { ActivityType } from "@/libs/types";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const getActivities = async (
  token?: RequestCookie | undefined,
  params?: Record<string, string>,
) => {
  try {
    // const cookiesStore = await cookies();
    // const token = cookiesStore.get("token");
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
      })),
      pages: data.pages,
    };
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
};

type TagT = {
  activityTagsId: string;
  tagId: string;
  activityId: string;
  tag: { tagName: string };
};

export const getActivityById = async (id: string) => {
  try {
    // const cookiesStore = await cookies();
    // const token = cookiesStore.get("token");
    const res = await fetch(`${API_URL}/activity/${id}`, {
      method: "GET",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token?.value}`,
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Server responded with ${res.status}:`, errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Response: ${errorText}`,
      );
    }

    const data = await res.json();
    const activity = data.activity;

    const dateString = activity.startDay;
    const date = new Date(dateString);

    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return {
      activityId: activity.activityId,
      userId: activity.userId,
      coverPic: activity.coverPic,
      title: activity.title,
      description: activity.description,
      seat: activity.seat,
      price: activity.price,
      score: activity.score,
      categoryId: activity.categoryId,
      avatar: activity.user?.avatar ?? activity.user.avatar,
      userName: activity.user.userName,
      city: activity.city.cityName,
      location: activity.location,
      category: activity.category.categoryName,
      tags: activity.activityTags.map((ele: TagT) => ele.tag.tagName),
      startTime: activity.startTime,
      startDay: formattedDate,
      joined: activity.joined,
    };
  } catch (error) {
    console.error("add error", error);
    throw error;
  }
};

export const getUserActivities = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/activity/user/${id}`, {
      method: "GET",
      credentials: "include", // Ensures cookies are sent automatically
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Server responded with ${res.status}:`, errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Response: ${errorText}`,
      );
    }

    const data = await res.json();
    const activities: ActivityType[] = data.activities;

    return activities.map((ele) => ({
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
    }));
  } catch (error) {
    console.error("get error", error);
    throw error;
  }
};

export type ReviewType = {
  user: { userName: string };
  comment: string;
  stars: number;
};

export const getActivityReviews = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/activity/${id}/reviews`, {
      method: "GET",
      credentials: "include", // Ensures cookies are sent automatically
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Server responded with ${res.status}:`, errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Response: ${errorText}`,
      );
    }

    const data = await res.json();
    const reviews: ReviewType[] = data.reviews;

    return reviews.map((ele) => ({
      userName: ele.user.userName,
      comment: ele.comment,
    }));
  } catch (error) {
    console.error("get review error", error);
    throw error;
  }
};

export const updateUserData = async (info: infoT) => {
  try {
    const res = await fetch(`${API_URL}/user/edit-profil`, {
      method: "PATCH",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    if (!res.ok) {
      const errorText = await res.text(); // Log the error message returned from the server
      console.error(`Server responded with ${res.status}:`, errorText);
      throw new Error(
        `HTTP error! Status: ${res.status}, Response: ${errorText}`,
      );
    }

    return await res.json();
  } catch (error) {
    console.error("request error", error);
    throw error;
  }
};

export const updatePassword = async (info: {
  newPassword: string;
  oldPassword: string;
}) => {
  try {
    const res = await fetch(`${API_URL}/user/change-password`, {
      method: "PATCH",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    return await res;
  } catch (error) {
    console.error("request error", error);
    throw error;
  }
};

export const updateSocials = async (
  info: {
    link: string | undefined;
    platform: string;
  }[],
) => {
  try {
    const res = await fetch(`${API_URL}/user/edit-profil/socials`, {
      method: "PATCH",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
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
    console.error("request error", error);
    throw error;
  }
};
