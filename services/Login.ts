import {api} from "./baseURL"
import { validationZodType } from "../types/typesOfZod"
import { ZodValidate } from "../app/utils/zodValidationUtil";
import { LoginSchema } from "../validations/validation-zod";
import { UsernameState } from "../app/store/username"

const  { setToken } = UsernameState()

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
       setToken(response.data.token)
        return true
    } catch (error:any) {
        return console.error("Login error:", error.message || error.data);

    }
}