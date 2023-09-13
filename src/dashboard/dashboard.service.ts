import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Candidate } from 'src/candidate/entities/candidate.entity';
import { Repository } from 'typeorm';
import { Register } from 'src/register/entities/register.entity';
import { ICandidateSchoolingChart } from './interface/chart';
import { generateSchoolingChart } from './utils/generateSchoolingChart';

@Injectable()
export class DashboardService {

  constructor(
    @InjectRepository(Candidate)
    private readonly candidateRepository: Repository<Candidate>,

    @InjectRepository(Register)
    private readonly registerRepository: Repository<Register>
  ){}

  async findAll() {
    
    const candidateData = await this.getDataSchoolingChart();
    const statusRegistersData = await this.getDataStatusChart()

    return {
      charts: {
        schooling: candidateData,
        statusRegisters: statusRegistersData
      }
    }
  }

  private async getDataSchoolingChart() {
    const candidateSchooling = await this.candidateRepository.find({
      select: {
        id: true,
        schooling: true
      }
    })


    let candidateData: ICandidateSchoolingChart = {
      SuperiorCompleto: 0,
      Analfabeto: 0,
      Doutorado: 0,
      FundamentalCompleto: 0,
      Ignorado: 0,
      MedioCompleto: 0,
      MedioIncompleto: 0,
      Mestrado: 0,
      SuperiorIncompleto: 0
    };


    candidateSchooling.forEach((item) => {
      candidateData =  generateSchoolingChart(candidateData, item.schooling)
    })



    return candidateData;
  }

  private async getDataStatusChart() {
    const reproveCount = await this.registerRepository.countBy({status: "Reprovado"});
    const waitingCount = await this.registerRepository.countBy({status: "Aguardando"});
    const approveCount = await this.registerRepository.countBy({status: "Aprovado"});



    const statusData = {
      aguardando: waitingCount,
      reprovado: reproveCount,
      aprovado: approveCount
    };


    return statusData;
  }
}
