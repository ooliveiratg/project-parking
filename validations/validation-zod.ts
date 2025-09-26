import { z } from "zod"

export const LoginSchema = z.object({
    email: z.string().email("Email inválido"),
    senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres")
})

export const RegisterSchema = z.object({
    name: z.string().max(100, "Erro no tamanho do nome"),
    email: z.string().email("Email inválido"),
    senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres")
})