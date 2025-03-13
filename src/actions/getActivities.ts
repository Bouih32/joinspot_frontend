import { API_URL } from "@/libs/constantes";
import { ActivityType } from "@/libs/types";

export const getActivities = async (params?: Record<string, string>) => {
  try {
    const queryString =
      params && Object.keys(params).length > 0
        ? new URLSearchParams(params).toString()
        : "";

    const link = queryString
      ? `${API_URL}/activity?${queryString}`
      : `${API_URL}/activity`;

    const res = await fetch(link, {
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
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
    }));
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
};
