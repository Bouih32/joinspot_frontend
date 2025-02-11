import z from "zod";

export const loginValidation = z.object({
  username: z
    .string()
    .trim()
    .min(5, { message: "Please enter a username" })
    .max(50, { message: "Heey! that's too long" }),
  password: z.string().min(5, { message: "Please enter a valid password" }),
});
