import { ZodSchema } from "node_modules/zod/index.cjs";
export function ZodValidate<T>(schema: ZodSchema<T>, data: unknown): T {
    try {
        const parsed = schema.parse(data);
        if( parsed)
    } catch (error) {

    }
}