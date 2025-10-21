import { z } from "zod"

export const LoginSchema = z.object({
    email: z.string().email("Email inválido"),
    senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres")
})

export const RegisterSchema = z.object({
    name: z.string().max(140, "Erro no tamanho do nome completo").nonempty("O nome é obrigatório"),
    email: z.string().email("Email inválido"),
    senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres")
})

export const VehicleSchema = z.object({
    placa: z.string().max(7,"placa inválida").min(7, "placa inválida")
})