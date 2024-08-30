import { z } from "zod";

export const UserFormValidation = z.object({
  name: z.string()
  .min(2, {
    message: "Username must be at least 2 characters.",
  })
  .max(40,{
    message: "Username must be at most 2 characters.",
  }),
  email:z.string().email("invalid email address"),
  phone:z.string().refine((phone)=>/^\+\d{10,15}$/.test(phone),'phone number is not correct')
  
})