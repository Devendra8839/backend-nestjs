import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateUser(email: string, password: string) {
    const user = await this.prisma.employee.findUnique({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...rest } = user;
      return rest;
    }
    return null;
  }

  async signup(data: {
    name: string;
    email: string;
    password: string;
    role: 'ADMIN' | 'EMPLOYEE';
  }) {
    console.log ('Signing up user:', data.email);
    
    
    const hashed = await bcrypt.hash(data.password, 10);
    return this.prisma.employee.create({
      data: { ...data, password: hashed },
    });
  }
}
