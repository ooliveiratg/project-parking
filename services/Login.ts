import {api} from "./baseURL"
import { validationZodType } from "../types/typesOfZod"
import { ZodValidate } from "../utils/zodValidationUtil";
import { LoginSchema } from "../validations/validation-zod";

export async function Login(data: validationZodType) {
    try {
        const result = ZodValidate(LoginSchema,data)
        if(!result.success) {
            console.error(result.error.flatten())
            return;
        }
        const response = await api.post('/auth/login', {
            email: data.email,
            senha: data.senha
        })
        return response
    } catch (error) {
        console.log
        console.error("Login error:", error);
        throw error
    }
}