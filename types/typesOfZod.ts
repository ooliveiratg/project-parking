import { z } from "zod"
import { LoginSchema } from "../validations/validation-zod"

export type validationZodType = z.infer<typeof  LoginSchema>