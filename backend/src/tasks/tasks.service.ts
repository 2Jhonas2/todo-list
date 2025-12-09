import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, dto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: dto.title,
        description: dto.description,
        completed: dto.completed ?? false,
        userId,
      },
    });
  }

  async findAll(userId: number) {
    return this.prisma.task.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(userId: number, id: number) {
    const task = await this.prisma.task.findFirst({
      where: { id, userId },
    });
    if (!task) throw new NotFoundException('Tarea no encontrada');
    return task;
  }

  async update(userId: number, id: number, dto: UpdateTaskDto) {
    await this.findOne(userId, id); // valida propiedad
    return this.prisma.task.update({
      where: { id },
      data: dto,
    });
  }

  async toggleCompleted(userId: number, id: number) {
    const task = await this.findOne(userId, id);
    return this.prisma.task.update({
      where: { id },
      data: { completed: !task.completed },
    });
  }

  async remove(userId: number, id: number) {
    await this.findOne(userId, id);
    await this.prisma.task.delete({ where: { id } });
    return { message: 'Tarea eliminada' };
  }
}
