import { dataSourceOptions } from './../.docker/db/data-source';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidateModule } from './candidate/candidate.module';
import { RegisterModule } from './register/register.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolingModule } from './schooling/schooling.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [
    CandidateModule, 
    RegisterModule, 
    DashboardModule, 
    TypeOrmModule.forRoot(dataSourceOptions), SchoolingModule, SkillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
