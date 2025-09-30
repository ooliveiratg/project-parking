import { z } from "zod"
import { LoginSchema, RegisterSchema, VehicleRegister } from "../validations/validation-zod"

export type validationZodType = z.infer<typeof  LoginSchema>

export type validationRegisterType= z.infer<typeof RegisterSchema>

export type validationRegisterVehicleType = z.infer<typeof VehicleRegister>