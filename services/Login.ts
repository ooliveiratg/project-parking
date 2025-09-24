import axios from "axios"
import { validationZodType } from "../types/typesOfZod"

export function Login({ email, senha }: validationZodType) {
    try {
        console.log("login: ",email, senha);
        axios.post('/auth/login', {
            email: email,
            senha: senha
        })
    } catch (error) {
        console.error("Login error:", error);
    }
}