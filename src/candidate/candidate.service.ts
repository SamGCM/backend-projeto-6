import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Candidate } from './entities/candidate.entity';
import { Repository } from 'typeorm';
import { Register } from 'src/register/entities/register.entity';

@Injectable()
export class CandidateService {

  constructor(
    @InjectRepository(Candidate)
    private readonly candidateRepository: Repository<Candidate>,
    @InjectRepository(Register)
    private readonly registerRepository: Repository<Register>
  ){}

  async create(createCandidateDto: CreateCandidateDto): Promise<Register>  {
    const candidate = this.candidateRepository.create(createCandidateDto);

    const register = this.registerRepository.create({
      ...candidate,
      status: "Aguardando"
    });

    return this.registerRepository.save(register);
  }

  async findAll(): Promise<Candidate[]>  {
    return await this.candidateRepository.find();
  }

  async findOne(id: string): Promise<Candidate> {
    const candidate = await this.candidateRepository.findOneByOrFail({
          id: id,
      })

    return candidate;
  }

  async update(id: string, updateCandidateDto: UpdateCandidateDto)  {

    const candidate = await this.candidateRepository.update(id, updateCandidateDto);

    return candidate;
  }

  async remove(id: string) {
    const candidate = await this.candidateRepository.delete(id);

    return candidate;
  }
}
