import axios from "axios"

export const api = axios.create({
    baseURL: "https://parking-api-9rj9.onrender.com",
    timeout: 1000
})