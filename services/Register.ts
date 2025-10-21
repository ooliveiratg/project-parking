import {api} from "./baseURL"
import { validationRegisterType } from "../types/typesOfZod"
import { ZodValidate } from "../app/utils/zodValidationUtil";
import { RegisterSchema } from "../validations/validation-zod";

export async function Register(data: validationRegisterType) {
    try {
        const result = ZodValidate(RegisterSchema,data)
        if (!result.success === true) {
      const { fieldErrors } = result.error.flatten();
      return {
        success: false,
        message: fieldErrors,
      };
    }
        const response = await api.post('/auth/register', {
            nome: data.name,
            email: data.email,
            senha: data.senha
        })
        console.log(response.data)
         return { success: true, response: response }
    } catch (error:any) {
        return { success: false, error: error.message || error.data }
    }
}