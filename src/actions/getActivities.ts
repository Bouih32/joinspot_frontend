import { API_URL } from "@/libs/constantes";
import { ActivityType } from "@/libs/types";

export const getActivities = async () => {
  try {
    const res = await fetch(`${API_URL}/activity`, {
      credentials: "include", // Equivalent to `withCredentials: true` in Axios
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();
    const activities: ActivityType[] = data.activities;

    const info = activities.map((ele) => ({
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

    return info;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
};
