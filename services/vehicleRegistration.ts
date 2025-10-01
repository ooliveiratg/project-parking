import { validationRegisterVehicleType } from "../types/typesOfZod";
import { ZodValidate } from "../app/utils/zodValidationUtil";
import { VehicleRegisterSchema } from "../validations/validation-zod";
import { api } from "./baseURL";
import { usernameState } from "../app/store/username";

export async function VehicleRegistrationApi(data: validationRegisterVehicleType) {
  const { token } = usernameState();
  if (!token) return console.error("Error com o token");
  try {
    const result = ZodValidate(VehicleRegisterSchema, data);
    if (!result.success) {
      console.error(result.error.flatten());
      return;
    }

    const response = await api.post("/api/veiculos/saida", {
      placa: data.placa,
      Headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { success: true, response: response };
  } catch (error: any) {
    return { success: false, error: error.message || error.data };
  }
}
