import { infoT } from "@/components/profileUi/settingsForms/InfoForm";
import { phoneT } from "@/components/profileUi/settingsForms/PhoneForm";
import { API_URL } from "@/libs/constantes";
import { ActivityType } from "@/libs/types";

type TagT = {
  activityTagsId: string;
  tagId: string;
  activityId: string;
  tag: { tagName: string; tagId: string };
};

export const getActivityById = async (id: string) => {
  try {
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
      tags: activity.activityTags.map((ele: TagT) => ({
        tagName: ele.tag.tagName,
        tagId: ele.tag.tagId,
      })),
      startTime: activity.startTime,
      endTime: activity.endTime,
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
      userId: ele.user.userId,
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

export const updatePhone = async (info: phoneT) => {
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

export const updateProfilePic = async (avatar: { avatar: string }) => {
  try {
    const res = await fetch(`${API_URL}/user/edit-profil`, {
      method: "PATCH",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(avatar),
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

export const markAsRead = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/user/messages/${id}/read`, {
      method: "PATCH",
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

    return await res.json();
  } catch (error) {
    console.error("get error", error);
    throw error;
  }
};

export const deleteMessage = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/user/messages/${id}/delete`, {
      method: "PATCH",
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

    return await res.json();
  } catch (error) {
    console.error("get error", error);
    throw error;
  }
};

export const handleUsed = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/user/ticket/${id}/used`, {
      method: "PATCH",
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

    return await res.json();
  } catch (error) {
    console.error("get error", error);
    throw error;
  }
};

export const sendMessage = async (data: { content: string; toId: string }) => {
  try {
    const res = await fetch(`${API_URL}/user/send-message`, {
      method: "POST",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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

export const handleFollow = async (following: string) => {
  const data = { following };
  try {
    const res = await fetch(`${API_URL}/user/follow`, {
      method: "POST",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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

export const updateActivity = async (
  info: {
    coverPic: string;
    description: string;
    tags: string;
  },
  id: string,
) => {
  try {
    const res = await fetch(`${API_URL}/activity/${id}/update`, {
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
