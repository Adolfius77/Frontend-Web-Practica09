// Todo opcional: un PATCH manda solo lo que cambia. "activo" es el

import { IsBoolean, isBoolean, IsEmail, IsIn, MaxLength } from "class-validator";
import { IsOptional } from "class-validator/types/decorator/common/IsOptional";
import { IsString } from "class-validator/types/decorator/typechecker/IsString";

// campo pensado para dar de baja a un miembro sin borrar su historial.
const MEMBRESIAS = ["Básica", "Premium", "VIP"];
export class ActualizarMiembroDto {
  @IsOptional()
  @IsString()
  @MaxLength(80)  
  nombre?: string;

  @IsOptional()
  @IsEmail()
  correo?: string;

  @IsOptional()
  @IsIn(MEMBRESIAS)
  membresia?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
