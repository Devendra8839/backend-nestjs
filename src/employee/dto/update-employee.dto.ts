import { PartialType } from '@nestjs/mapped-types'; //PartialType means all fields become optional — good for update.
import { CreateEmployeeDto } from './create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
