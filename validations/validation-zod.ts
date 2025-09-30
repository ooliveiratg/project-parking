import { z } from "zod"

export const LoginSchema = z.object({
    email: z.string().email("Email inválido"),
    senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres")
})

export const RegisterSchema = z.object({
    name: z.string().max(70, "Erro no tamanho do nome"),
    email: z.string().email("Email inválido"),
    senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres")
})

export const VehicleRegisterSchema = z.object({
    placa: z.string().max(7,"placa inválida").min(7, "placa inválida")
})