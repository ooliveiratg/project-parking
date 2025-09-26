import {api} from "./baseURL"
import { validationZodType } from "../types/typesOfZod"
import { ZodValidate } from "../utils/zodValidationUtil";
import { LoginSchema } from "../validations/validation-zod";
import { AxiosError } from "axios";

export async function Login(data: validationZodType) {
    try {
        const result = ZodValidate(LoginSchema,data)
        if(!result.success) {
            console.error(result.error.flatten())
            return {
                success: false,
                error: "Dados inválidos",
                details: result.error.flatten()
            };
        }
        
        const response = await api.post('/auth/login', {
            email: data.email,
            senha: data.senha
        })
        
        return {
            success: true,
            data: response.data
        }
        
    } catch (error) {
        if (error instanceof AxiosError) {
            // Erro de rede
            if (error.code === 'NETWORK_ERROR' || error.message === 'Network Error') {
                console.error("Erro de conexão: Verifique sua internet ou se o servidor está online");
                return {
                    success: false,
                    error: "Erro de conexão",
                    message: "Não foi possível conectar ao servidor. Verifique sua conexão com a internet."
                };
            }
            
            // Timeout
            if (error.code === 'ECONNABORTED') {
                console.error("Timeout: O servidor demorou muito para responder");
                return {
                    success: false,
                    error: "Timeout",
                    message: "O servidor está demorando para responder. Tente novamente."
                };
            }
            
            // Erro do servidor (401, 404, 500, etc.)
            if (error.response) {
                const status = error.response.status;
                const message = error.response.data?.message || 'Erro no servidor';
                
                switch (status) {
                    case 401:
                        console.error("Credenciais inválidas");
                        return {
                            success: false,
                            error: "Credenciais inválidas",
                            message: "Email ou senha incorretos."
                        };
                    case 404:
                        console.error("Endpoint não encontrado");
                        return {
                            success: false,
                            error: "Serviço não encontrado",
                            message: "O serviço de login não está disponível no momento."
                        };
                    case 500:
                        console.error("Erro interno do servidor");
                        return {
                            success: false,
                            error: "Erro do servidor",
                            message: "Erro interno do servidor. Tente novamente mais tarde."
                        };
                    default:
                        console.error(`Erro ${status}:`, message);
                        return {
                            success: false,
                            error: `Erro ${status}`,
                            message: message
                        };
                }
            }
        }
        
        // Erro genérico
        console.error("Login error:", error);
        return {
            success: false,
            error: "Erro desconhecido",
            message: "Ocorreu um erro inesperado. Tente novamente."
        };
    }
}