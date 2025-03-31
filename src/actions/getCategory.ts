"use client";

import { API_URL } from "@/libs/constantes";
import axios, { isAxiosError } from "axios";

export const getCategories = async () => {
  try {
    const res = await axios.get(`${API_URL}/category`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(" error", error);
    if (isAxiosError(error) && error.response) {
      return error.response;
    } else {
      throw error;
    }
  }
};

export const getCategoriesServer = async () => {
  try {
    const res = await fetch(`${API_URL}/category`, {
      credentials: "include", // Equivalent to withCredentials: true in axios
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    return data.categories;
  } catch (error) {
    console.log(" error", error);
    return { error: error instanceof Error ? error.message : "Unknown error" };
  }
};

export type TagsT = {
  tagId: string;
  tagName: string;
  deletedAt: Date | null;
  categoryId: string;
};

export const getTagsById = async (categoryId: string) => {
  try {
    const res = await axios.get(`${API_URL}/category/${categoryId}/tags`, {
      withCredentials: true,
    });
    const info: TagsT[] = res.data.data;

    return info.map((ele) => ({ tagName: ele.tagName, tagId: ele.tagId }));
  } catch (error) {
    console.log(" error", error);
    if (isAxiosError(error) && error.response) {
      return error.response;
    } else {
      throw error;
    }
  }
};

export const getAllTags = async () => {
  try {
    const res = await axios.get(`${API_URL}/category/tags`, {
      withCredentials: true,
    });
    const info = res.data;

    return info.tags;
  } catch (error) {
    console.log(" error", error);
    if (isAxiosError(error) && error.response) {
      return error.response;
    } else {
      throw error;
    }
  }
};
