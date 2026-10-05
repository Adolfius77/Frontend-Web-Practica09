// Validacion minima a mano. En la Sesion 9 (Blindar la API) la hace

import { IsInt, IsNotEmpty, isNotEmpty, IsString, Matches, Min } from "class-validator";

// ValidationPipe.
export class CrearHorarioDto {
  @IsInt()
  claseId!: number;

  @IsString()
  dia!: string;

  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/)
  horaInicio!: string;

  @IsInt()
  @Min(1)
  cupoMaximo!: number;

  @IsString()
  @IsNotEmpty()
  entrenador!: string;
}
