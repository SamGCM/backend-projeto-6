import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidateModule } from './candidate/candidate.module';
import { RegisterModule } from './register/register.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolingModule } from './schooling/schooling.module';
import { SkillsModule } from './skills/skills.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    CandidateModule, 
    RegisterModule, 
    DashboardModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      ssl: true,
      url: process.env.DB_EXTERNAL_URL,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity.js'],
      migrations: ['dist/src/migrations/*.js'],
  }), 
  SchoolingModule, 
  SkillsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
