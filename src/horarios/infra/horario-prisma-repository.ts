import {Injectable} from '@nestjs/common';
import {PrismaService} from '../../prisma/prisma.service';
import { HorarioRepository } from '../dominio/horario.repository';
import { Horario } from '../dominio/entidades';
import { ActualizarHorarioDto } from '../dto/actualizar-horario.dto';
import { CrearHorarioDto } from '../dto/crear-horario.dto';

@Injectable()
export class HorarioPrismaRepository implements HorarioRepository {
    constructor(private readonly prisma: PrismaService) {}
    
    buscarPorId(id: number): Promise<Horario | null> {
        return this.prisma.horario.findUnique({ where: { id } });
    }

    async crear(datos: CrearHorarioDto): Promise<Horario> {
        const existe = await this.prisma.horario.findFirst({
        where: {
            claseId: datos.claseId,
            dia: datos.dia,
            horaInicio: datos.horaInicio,
        },
        });
        
        return this.prisma.horario.create({ data: datos });
    }

    async actualizar(id: number, datos: ActualizarHorarioDto): Promise<Horario | null> {
        const existe = await this.prisma.horario.findUnique({ where: { id } });
        if (!existe) return null;
        return this.prisma.horario.update({ where: { id }, data: datos });
    }
    
    async eliminar(id: number): Promise<Horario | null> {
        const existe = await this.prisma.horario.findUnique({ where: { id } });
        if (!existe) return null;
        return this.prisma.horario.delete({ where: { id } });
    }

    listar(): Promise<Horario[]> {
        return this.prisma.horario.findMany();
    }
}
