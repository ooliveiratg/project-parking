
import { api } from "./baseURL";

interface Vehicle {
  placa: string;
  dataEntrada: string;
  horarioEntrada: string;
  valorPago: string;
  horarioSaida: string;
}

export async function VehicleListingPlateApi(plate:string) {
  try {
    const response = await api.get<Vehicle[]>(`/api/veiculos/placa/${plate}`);
    const result = response.data

    const vehicles: Vehicle[] = result.map(vehicle => ({
      placa: vehicle.placa,
      dataEntrada: vehicle.dataEntrada,
      horarioEntrada: vehicle.horarioEntrada,
      horarioSaida: vehicle.horarioSaida,
      valorPago: vehicle.valorPago
    }))

    return { success: true, response: vehicles}

    } catch (error: any) {
    return { success: false, error: error.message || error.data };
  }
}
