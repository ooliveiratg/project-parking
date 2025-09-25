import axios from "axios"
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
        const response = await axios.post('/auth/login', {
            email: data.email,
            senha: data.senha
        })
        return response
    } catch (error) {
        console.error("Login error:", error);
        throw error
    }
}