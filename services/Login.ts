import {api} from "./baseURL"
import { validationZodType } from "../types/typesOfZod"
import { ZodValidate } from "../app/utils/zodValidationUtil";
import { LoginSchema } from "../validations/validation-zod";
import { usernameState } from "../app/store/username"



export async function Login(data: validationZodType) {
    
    try {
        const result = ZodValidate(LoginSchema,data)
        if(!result.success === true) {
            console.error(result.error.flatten())
            return;
        }
        const response = await api.post('/auth/login', {
            email: data.email,
            senha: data.senha
        })
       usernameState.getState().setToken( response.data.token )
        return { success: true, response: response.data.token }
    } catch (error:any) {
     return { success: false, error: error.message || error.data }
    }
}