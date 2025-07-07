import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Role } from '@prisma/client';

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.EmployeeCreateInput) {
    return this.prisma.employee.create({
      data,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        departmentId: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  findAll() {
    return this.prisma.employee.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        departmentId: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.employee.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        departmentId: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  update(id: number, data: Prisma.EmployeeUpdateInput) {
    return this.prisma.employee.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        departmentId: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.employee.delete({ where: { id } });
  }
}
