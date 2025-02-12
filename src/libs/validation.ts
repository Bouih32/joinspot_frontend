import z from "zod";

export const loginValidation = z.object({
  username: z
    .string()
    .trim()
    .min(5, { message: "Please enter a username" })
    .max(50, { message: "Heey! that's too long" }),
  password: z.string().min(5, { message: "Please enter a valid password" }),
});

export const firstStepValidation = z.object({
  fullName: z
    .string()
    .trim()
    .min(5, { message: "Please enter your fullname" })
    .max(50, { message: "Heey! that's too long" }),
  email: z
    .string()
    .email()
    .trim()
    .min(5, { message: "Please enter your email" })
    .max(50, { message: "Heey! that's too long" }),
  city: z
    .string()
    .trim()
    .min(5, { message: "Please enter your city" })
    .max(50, { message: "Heey! that's too long" }),
});
