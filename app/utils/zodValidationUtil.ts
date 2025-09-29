import { ZodError, ZodSchema } from "zod";

type ValidationResult<T> = {
    success: true;
    data: T;
} | {
    success: false;
    error: ZodError<T>
}

export function ZodValidate<T>(schema:ZodSchema<T>, data:unknown):ValidationResult<T> {
    const result = schema.safeParse(data)
    if(result.success){
        return { success: true, data: result.data }
    }
    return { success: false, error: result.error };
}