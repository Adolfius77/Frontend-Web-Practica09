// Validacion minima a mano. En la Sesion 9 (Blindar la API) la hace

import { IsIn } from "class-validator";
import { IsNotEmpty, IsEmail, MaxLength, IsString } from "class-validator";

// ValidationPipe.
const MEMBRESIAS = ["Básica", "Premium", "VIP"];
export class CrearMiembroDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  nombre!: string;

  @IsEmail()
  correo!: string;

  @IsIn(MEMBRESIAS)
  membresia!: string;
}
