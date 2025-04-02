import { z } from "zod";

export const todoFormSchema = z.object({
  title: z
    .string()
    .max(30, { message: "title must not be longer than 30 characters." })
    .min(2, {
      message: "title must be at least 2 characters.",
    }),
  body: z
    .string()
    .min(2, {
      message: "body must be at least 2 characters.",
    })
    .optional(),
  completed: z.boolean(),
});
