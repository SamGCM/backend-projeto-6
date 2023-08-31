import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Candidate } from './entities/candidate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CandidateService {

  constructor(
    @InjectRepository(Candidate)
    private readonly candidateRepository: Repository<Candidate>
  ){}

  async create(createCandidateDto: CreateCandidateDto): Promise<Candidate>  {
    const candidate = this.candidateRepository.create(createCandidateDto);

    return this.candidateRepository.save(candidate);
  }

  async findAll(): Promise<Candidate[]>  {
    return await this.candidateRepository.find();
  }

  async findOne(id: number): Promise<Candidate> {
    const candidate = await this.candidateRepository.findOneByOrFail({
          id: id,
      })

    return candidate;
  }

  async update(id: number, updateCandidateDto: UpdateCandidateDto)  {

    const candidate = await this.candidateRepository.update(id, updateCandidateDto);

    return candidate;
  }

  async remove(id: number) {
    const candidate = await this.candidateRepository.delete(id);

    return candidate;
  }
}
