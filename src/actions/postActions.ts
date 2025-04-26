import { addPostT } from "@/components/communityUi/PostForm";
import { API_URL } from "@/libs/constantes";

export const addPost = async (post: addPostT) => {
  try {
    const res = await fetch(`${API_URL}/post/add`, {
      method: "POST",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
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

export const addComment = async (data: { content: string }, id: string) => {
  try {
    const res = await fetch(`${API_URL}/post/${id}/comment`, {
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

export const likePost = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/post/${id}/like`, {
      method: "POST",
      credentials: "include", // Ensures cookies are sent automatically
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
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
