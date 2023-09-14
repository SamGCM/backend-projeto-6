import { Module } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidate } from './entities/candidate.entity';
import { RegisterService } from 'src/register/register.service';
import { Register } from 'src/register/entities/register.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Candidate, Register])],
  controllers: [CandidateController],
  providers: [CandidateService, RegisterService],
})
export class CandidateModule {}
