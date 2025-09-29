import {api} from "./baseURL"
import { validationZodType } from "../types/typesOfZod"
import { ZodValidate } from "../utils/zodValidationUtil";
import { LoginSchema } from "../validations/validation-zod";
import AsyncStorage from "@react-native-async-storage/async-storage"

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
        await AsyncStorage.setItem("token",response.data.token)
        return true
    } catch (error:any) {
        return console.error("Login error:", error.message || error.data);

    }
}