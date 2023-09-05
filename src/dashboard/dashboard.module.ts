import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidate } from 'src/candidate/entities/candidate.entity';
import { Register } from 'src/register/entities/register.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Candidate]), TypeOrmModule.forFeature([Register])],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
