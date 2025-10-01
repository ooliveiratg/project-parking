import { z } from "zod"
import { LoginSchema, RegisterSchema, VehicleSchema } from "../validations/validation-zod"

export type validationZodType = z.infer<typeof  LoginSchema>

export type validationRegisterType= z.infer<typeof RegisterSchema>

export type validationVehicleType = z.infer<typeof VehicleSchema>