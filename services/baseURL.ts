import axios from "axios"

export const api = axios.create({
    baseURL: "https://parking-api-9rj9.onrender.com",
    timeout: 10000, // 10 segundos - mais tempo para APIs lentas como Render
    headers: {
        'Content-Type': 'application/json',
    }
})

// Interceptor para log de requests (opcional, para debug)
api.interceptors.request.use(
    (config) => {
        console.log(`🚀 Fazendo request para: ${config.baseURL}${config.url}`);
        return config;
    },
    (error) => {
        console.error('❌ Erro no request:', error);
        return Promise.reject(error);
    }
);

// Interceptor para log de responses (opcional, para debug)
api.interceptors.response.use(
    (response) => {
        console.log(`✅ Response recebido: ${response.status}`);
        return response;
    },
    (error) => {
        if (error.response) {
            console.error(`❌ Erro ${error.response.status}: ${error.response.data?.message || 'Erro no servidor'}`);
        } else if (error.request) {
            console.error('❌ Sem resposta do servidor - Network Error');
        } else {
            console.error('❌ Erro:', error.message);
        }
        return Promise.reject(error);
    }
);
