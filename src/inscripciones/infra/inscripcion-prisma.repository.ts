import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { InscripcionRepository } from '../dominio/inscripcion.repository';
import { Inscripcion, Horario, Miembro, NuevaInscripcion } from '../dominio/entidades';

@Injectable()
export class InscripcionPrismaRepository implements InscripcionRepository {
  constructor(private readonly prisma: PrismaService) {}

    listar(): Promise<Inscripcion[]> {
        return this.prisma.inscripcion.findMany({
            orderBy: { id: 'asc' },
        }) as Promise<Inscripcion[]>;
    }

    buscarPorId(id: number): Promise<Inscripcion | null> {
        return this.prisma.inscripcion.findUnique({
            where: {id},
        }) as Promise<Inscripcion | null>;
    }

    buscarPorHorario(horarioId: number): Promise<Inscripcion[]> {
        return this.prisma.inscripcion.findMany({
            where: {horarioId},
            include: {
                horario: true,
                miembro: true
            }

        }) as Promise<Inscripcion[]>;
    }
    
    buscarHorario(horarioId: number): Promise<Horario | null> {
        return this.prisma.horario.findUnique({
            where: {id: horarioId},
        }) as Promise<Horario | null>;
    }

    buscarMiembro(miembroId: number): Promise<Miembro | null> {
        return this.prisma.miembro.findUnique({
            where: {id: miembroId},
        }) as Promise<Miembro | null>;
    }

    guardar(datos: NuevaInscripcion): Promise<Inscripcion> {
        return this.prisma.inscripcion.create({
            data: datos,
        }) as Promise<Inscripcion>;
    }

    cancelar(id: number): Promise<Inscripcion | null> {
        return this.prisma.inscripcion.update({
            where: {id},
            data: {estado: 'cancelada'},
        }) as Promise<Inscripcion | null>;
    }


}    