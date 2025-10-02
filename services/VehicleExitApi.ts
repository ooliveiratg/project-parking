import { validationVehicleType } from "../types/typesOfZod";
import { ZodValidate } from "../app/utils/zodValidationUtil";
import { VehicleSchema } from "../validations/validation-zod";
import { api } from "./baseURL";

export async function VehicleExitApi(data: validationVehicleType, token: string) {

  
  try {
    const result = ZodValidate(VehicleSchema, data);
    if (!result.success) {
      console.error(result.error.flatten());
      return;
    }

    const response = await api.put("/api/veiculos/saida", {
      placa: data.placa,
      Headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return { success: true, response: response.data };
  } catch (error: any) {
    return { success: false, error: error.message || error.data };
  }
}
