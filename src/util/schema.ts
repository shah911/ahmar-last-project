import { z } from "zod";

export const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .regex(/^\S+@\S+$/i, "Please enter a valid email address"),
  message: z.string().nonempty({ message: "Message is required" }),
});
