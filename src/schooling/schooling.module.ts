import { Module } from '@nestjs/common';
import { SchoolingService } from './schooling.service';
import { SchoolingController } from './schooling.controller';

@Module({
  controllers: [SchoolingController],
  providers: [SchoolingService],
})
export class SchoolingModule {}
