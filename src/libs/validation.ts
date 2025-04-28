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
  city: z.string().trim().min(1, { message: "Please enter your city" }),

  role: z.string().trim().min(1, { message: "Please enter your city" }),
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

export const addValidation = z.object({
  coverPic: z.string().trim().min(1),
  title: z.string().trim().min(1).max(50, {
    message: "Title is too long. Only  50 characters allowed",
  }),
  description: z
    .string()
    .trim()
    .min(10, { message: "The description is required." })
    .max(500, {
      message: "Title is too long. Only 500 characters allowed",
    }),
  tags: z.string().trim().min(1, { message: "This field is required" }),
  startTime: z.string().trim().min(1, "Time is required"),
  endTime: z.string().trim().min(1, { message: "This field is required" }),
  startDay: z.string().trim().min(1, { message: "This field is required" }),
  endDay: z.string().trim().min(1, { message: "This field is required" }),
  seat: z
    .string()
    .trim()
    .min(1, { message: "This field is required" })
    .max(2, { message: "This field is required" })
    .transform((val) => parseInt(val, 10)) // Transform the string to an integer
    .refine((val) => !isNaN(val), { message: "Invalid number" }) // Ensure it's a valid number
    .refine((val) => val > 2 && val < 50, {
      message: "The number must be greater than 2 and less than 50",
    }),
  price: z
    .string()
    .trim()
    .min(1, { message: "This field is required" })
    .transform((val) => parseInt(val, 10)) // Transform to number
    .refine((val) => !isNaN(val), { message: "Invalid number" })
    .refine((val) => val <= 5000, { message: "Price must be 5000 or less" }),
  location: z.string().trim().min(3, { message: "This field is required" }),
  cityId: z.string().trim().min(3, { message: "This field is required" }),
});

export const postValidation = z.object({
  bannerPic: z.string().trim().min(1),
  description: z
    .string()
    .trim()
    .min(10, { message: "The description is required." })
    .max(500, {
      message: "Title is too long. Only 500 characters allowed",
    }),
  tags: z.string().trim().min(1, { message: "This field is required" }),
  categoryId: z.string().trim().min(1, { message: "This field is required" }),
});

export const reviewValidation = z.object({
  comment: z
    .string()
    .trim()
    .min(1, { message: "Please enter your comment" })
    .max(100, { message: "Heey! that's too long" }),
  stars: z.string().trim().min(1, { message: "Please enter your rating" }),
});

export const joinValidation = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email" })
    .max(50, { message: "Heey! that's too long" }),
  fullName: z
    .string()
    .trim()
    .min(3, { message: "Please enter the cardholder name" })
    .max(50, { message: "Oops, that's too long" }),
  country: z
    .string()
    .trim()
    .min(3, { message: "Please enter your country/region" })
    .max(50, { message: "Oops, that's too long" }),
  quantity: z
    .string()
    .trim()
    .min(1, { message: "Please enter the number of tickets" }),
});

export const infoValidation = z.object({
  userName: z
    .string()
    .trim()
    .min(1, { message: "Please enter your userName" })
    .max(20, { message: "Heey! that's too long" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email" })
    .max(50, { message: "Heey! that's too long" }),
  bio: z
    .string()
    .trim()
    .max(500, { message: "Heey! that's too long" })
    .nullable()
    .optional(),
  avatar: z.string().trim().optional(),
});

export const resetPswrd = z
  .object({
    oldPassword: z
      .string()
      .trim()
      .min(1, { message: "Please enter your current password" }),
    newPassword: passwordSchema,
    passwordValidate: z
      .string()
      .min(1, { message: "Please confirm your password" }),
  })
  .refine((data) => data.newPassword === data.passwordValidate, {
    message: "Passwords don't match",
    path: ["passwordValidate"],
  });

export const socialsValidation = z.object({
  facebook: z
    .string()
    .trim()
    .max(100, { message: "Heey! that's too long" })
    .optional(),
  instagram: z
    .string()
    .trim()
    .max(100, { message: "Heey! that's too long" })
    .optional(),
  youtube: z
    .string()
    .trim()
    .max(100, { message: "Heey! that's too long" })
    .optional(),
  website: z
    .string()
    .trim()
    .max(100, { message: "Heey! that's too long" })
    .optional(),
});

export const bankValidation = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name" })
    .max(50, { message: "Heey! that's too long" }),

  rib: z
    .string()
    .trim()
    .min(2, { message: "Please enter your RIB" })
    .max(24, { message: "Heey! that's too long" }),
  bankName: z
    .string()
    .trim()
    .min(2, { message: "Please enter your bank name" })
    .max(30, { message: "Heey! that's too long" }),
});

export const phoneValidation = z.object({
  phone: z.string().trim().max(20, { message: "Heey! that's too long" }),
});

export const messageValidation = z.object({
  content: z
    .string()
    .trim()
    .min(5, { message: "Please enter your message" })
    .max(600, { message: "Heey! that's too long" }),
});

export const editValidation = z.object({
  coverPic: z.string().trim().min(1),
  description: z
    .string()
    .trim()
    .min(10, { message: "The description is required." })
    .max(500, {
      message: "Title is too long. Only 500 characters allowed",
    }),
  tags: z.string().trim().min(1, { message: "This field is required" }),
});

export const supportValidation = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "First name is required." })
    .max(50, { message: "Only 50 characters allowed" }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: "Last name is required." })
    .max(50, { message: "Only 50 characters allowed" }),
  email: z
    .string()
    .trim()
    .email()
    .min(1, { message: "email is required." })
    .max(50, {
      message: "Only 50 characters allowed",
    }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Phone number must be 10 numbers." })
    .max(10, { message: "Only 10 characters allowed" }),
  subject: z.string().trim().min(1, { message: "subject is required." }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required." })
    .max(300, { message: "Only 300 characters allowed" }),
});

export const commentValidation = z.object({
  content: z
    .string()
    .trim()
    .min(1, { message: "comment is required." })
    .max(300, { message: "Only 300 characters allowed" }),
});
