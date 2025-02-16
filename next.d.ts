// next.d.ts or globals.d.ts
import { NextRequest } from "next/server";

declare module "next/server" {
  interface NextRequest {
    user: {
      role: string;
      // Add any other user properties you want
      id: string;
      email: string;
    };
  }
}
