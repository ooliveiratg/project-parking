
import { api } from "./baseURL";

interface Vehicle {
  placa: string;
  dataEntrada: string;
  horarioEntrada: string;
}

export async function VehicleListingApi() {
  try {
    const response = await api.get<Vehicle[]>("/api/veiculos");
    const result = response.data
 
    const vehicles: Vehicle[] = result.map(vehicle => ({
      placa: vehicle.placa,
      dataEntrada: vehicle.dataEntrada,
      horarioEntrada: vehicle.horarioEntrada
    }))

    return { success: true, response: vehicles}

    } catch (error: any) {
    return { success: false, error: error.message || error.data };
  }
}
