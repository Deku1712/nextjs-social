import { z } from "zod";

export const Profile = z.object({
  cover: z.string().optional(),
  name: z.string().max(60).optional(),
  surname: z.string().max(60).optional(),
  description: z.string().max(255).optional(),
  city: z.string().max(60).optional(),
  school: z.string().max(60).optional(),
  work: z.string().max(60).optional(),
  website: z.string().max(60).optional(),
});
