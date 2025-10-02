
import { api } from "./baseURL";

interface Vehicle {
  id: string;
  placa: string;
    entrada: string;
}

export async function VehicleListingApi() {
  try {
    const response = await api.get<Vehicle>("/api/veiculos");
    return { success: true, response: response.data[0].placa };
  } catch (error: any) {
    return { success: false, error: error.message || error.data };
  }
}
