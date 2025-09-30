import {api} from "./baseURL"
import { validationZodType } from "../types/typesOfZod"
import { ZodValidate } from "../app/utils/zodValidationUtil";
import { LoginSchema } from "../validations/validation-zod";
import { usernameState } from "../app/store/username"



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
       
        return usernameState.getState().setToken( response.data.token )
    } catch (error:any) {
     console.error("Login error:", error.message || error.data);

    }
}