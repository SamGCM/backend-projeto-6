import { Controller, Get } from '@nestjs/common';
import { SchoolingService } from './schooling.service';

@Controller('schooling')
export class SchoolingController {
  constructor(private readonly schoolingService: SchoolingService) {}

  @Get()
  findAll() {
    return this.schoolingService.findAll();
  }


}
