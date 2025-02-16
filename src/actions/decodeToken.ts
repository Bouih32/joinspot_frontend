"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET as string;

export async function getToken() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;

  if (!token) {
    return null;
  }

  if (!SECRET) {
    throw new Error("Secret not found");
  }

  const decoded = jwt.verify(token, SECRET);
  return decoded;
}
