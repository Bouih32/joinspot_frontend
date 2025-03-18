import z from "zod";

export const loginValidation = z.object({
  email: z
    .string()
    .email()
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
  city: z.string().trim().min(5, { message: "Please enter your city" }),

  role: z.string().trim().min(5, { message: "Please enter your city" }),
});

export const secondStepValidation = (proveBy: "degree" | "business" | "") => {
  return z.object({
    categoryName: z.string().min(1, { message: "Please select a category" }),

    proveBy: z.string().trim().min(1, { message: "choose a proving way" }),
    justnImgName: z.string().optional(),
    frontPicName: z.string().optional(),

    // Degree validation
    degreeName:
      proveBy === "degree"
        ? z.string().min(5, { message: "Please enter a degree" })
        : z.string().optional(),
    schoolName:
      proveBy === "degree"
        ? z.string().min(1, { message: "Please enter a school name" })
        : z.string().optional(),
    year:
      proveBy === "degree"
        ? z.string().min(1, { message: "Please enter graduation year" })
        : z.string().optional(),
    frontPic:
      proveBy === "degree"
        ? z.string().min(1, { message: "Please enter degree picture" })
        : z.string().optional(),

    // Business validation
    justification:
      proveBy === "business"
        ? z.string().min(1, { message: "Please describe your business" })
        : z.string().optional(),
    justificationPic:
      proveBy === "business"
        ? z.string().min(1, { message: "Please provide autorisation picture" })
        : z.string().optional(),
  });
};

export const thirdStepValidation = z.object({
  idFrontPic: z
    .string()
    .trim()
    .min(5, { message: "Please enter your id front picture" }),
  idFrontPicName: z.string().trim().optional(),
  idBackPicName: z.string().trim().optional(),

  idBackPic: z
    .string()
    .trim()
    .min(5, { message: "Please enter your id back picture" }),
});

const passwordSchema = z
  .string()
  .min(8, { message: "Needs to be at least 8 caractères " })
  .regex(/[A-Z]/, "Needs at least one uppercase character")
  .regex(/[a-z]/, "Needs at least one lowercase character")
  .regex(/[0-9]/, "Needs at least one number ")
  .regex(/[^A-Za-z0-9]/, "Needs at least one special character ");

export const fifthStepValidation = z
  .object({
    username: z
      .string()
      .trim()
      .min(5, { message: "Please enter a username" })
      .max(50, { message: "Heey! that's too long" }),
    password: passwordSchema,
    passwordValidate: z
      .string()
      .min(1, { message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.passwordValidate, {
    message: "Passwords don't match",
    path: ["passwordValidate"],
  });

export const resetValidation = z.object({
  email: z
    .string()
    .email()
    .trim()
    .min(5, { message: "Please enter your email" })
    .max(50, { message: "Heey! that's too long" }),
});

export const newPswrd = z
  .object({
    password: passwordSchema,
    passwordValidate: z
      .string()
      .min(1, { message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.passwordValidate, {
    message: "Passwords don't match",
    path: ["passwordValidate"],
  });

export const searchValidation = z.object({
  search: z
    .string()
    .trim()
    .max(20, { message: "Heey! that's too long" })
    .optional(),
});

const timeRegex = /^(0?[1-9]|1[0-2])(AM|PM)$/;

export const addValidation = z.object({
  coverPic: z.string().trim().min(1),
  title: z.string().trim().min(1).max(50, { message: "Thats too long" }),
  description: z.string().trim().min(10).max(50, { message: "Thats too long" }),
  tags: z.string().trim().min(1),
  startTime: z
    .string()
    .trim()
    .min(1, "Time is required")
    .regex(timeRegex, "Invalid time format. Use format like 12PM or 5PM."),
  endTime: z
    .string()
    .trim()
    .min(1, "Time is required")
    .regex(timeRegex, "Invalid time format. Use format like 12PM or 5PM."),
  startDay: z.string().trim().min(1),
  endDay: z.string().trim().min(1),
  seat: z.string().trim().min(1),
  price: z.string().trim().min(1),
  location: z.string().trim().min(3),
  cityId: z.string().trim().min(3),
});
