
import { api } from "./baseURL";

interface Vehicle {
  id: string;
  placa: string;
  dataEntrada: string;
  horarioEntrada: string;
}

export async function VehicleListingApi() {
  try {
    const response = await api.get<Vehicle[]>("/api/veiculos");
    const result = response.data
    const vehiclesPlate = result.map(vehicle => vehicle.placa); 
    const vehiclesEntry = result.map(vehicle => vehicle.dataEntrada); 
    const vehiclesTime = result.map(vehicle => vehicle.horarioEntrada); 

    return { success: true, response: 
      {
        plate: vehiclesPlate,
        entry: vehiclesEntry,
        time: vehiclesTime


      }};
  } catch (error: any) {
    return { success: false, error: error.message || error.data };
  }
}
