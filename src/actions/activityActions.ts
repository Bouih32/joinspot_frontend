import { ReviewT } from "@/components/activities/details/ReviewButton";
import { JoinT } from "@/components/activities/join/JoinForm";
import { API_URL } from "@/libs/constantes";
import { AddActivityT } from "@/libs/types";

export const addActivity = async (activity: AddActivityT) => {
  try {
    const res = await fetch(`${API_URL}/activity/add`, {
      method: "POST",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
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

    return await res.json();
  } catch (error) {
    console.error("add error", error);
    throw error;
  }
};

export const reviewActivity = async (review: ReviewT, id: string) => {
  try {
    const res = await fetch(`${API_URL}/activity/${id}/review`, {
      method: "POST",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
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
    const res = await fetch(`${API_URL}/activity/${id}/join`, {
      method: "POST",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
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

    return await res.json();
  } catch (error) {
    console.error("join error", error);
    throw error;
  }
};

export const addTagTwo = async (tags: string[]) => {
  try {
    const res = await fetch(`${API_URL}/user/tags`, {
      method: "POST",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
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
