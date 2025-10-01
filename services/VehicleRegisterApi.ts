import { validationRegisterVehicleType } from "../types/typesOfZod";
import { ZodValidate } from "../app/utils/zodValidationUtil";
import { VehicleRegisterSchema } from "../validations/validation-zod";
import { api } from "./baseURL";

export async function VehicleRegistrationApi(data: validationRegisterVehicleType, token: string) {

  
  try {
    const result = ZodValidate(VehicleRegisterSchema, data);
    if (!result.success) {
      console.error(result.error.flatten());
      return;
    }

    const response = await api.post("/api/veiculos/entrada", {
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
