import { Injectable } from '@nestjs/common';
import { CreateHealthDto } from './dto/create-health.dto';
import { UpdateHealthDto } from './dto/update-health.dto';

@Injectable()
export class HealthService {
  findAll() {
    return `Status is Ok.!`;
  }

}
