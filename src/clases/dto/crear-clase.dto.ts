// Validacion minima a mano. En la Sesion 9 (Blindar la API) la hace

import { IsNotEmpty, MaxLength, IsString } from "class-validator";

// ValidationPipe.
export class CrearClaseDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  nombre!: string;
}
