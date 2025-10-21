import { validationVehicleType } from "../types/typesOfZod";
import { ZodValidate } from "../app/utils/zodValidationUtil";
import { VehicleSchema } from "../validations/validation-zod";
import { api } from "./baseURL";

export async function VehicleExitApi(data: validationVehicleType, token: string) {

  
  try {
    const result = ZodValidate(VehicleSchema, data);
   if (!result.success === true) {
      const { fieldErrors } = result.error.flatten();
      return {
        success: false,
        message: fieldErrors,
      };
    }

    const response = await api.put("/api/veiculos/saida", {
      placa: data.placa,
      Headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { success: true, response: response.data };
  } catch (error: any) {
    return { success: false, error: error.message || error.data };
  }
}
