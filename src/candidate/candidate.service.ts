import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Candidate } from './entities/candidate.entity';
import { Repository } from 'typeorm';
import { Register } from 'src/register/entities/register.entity';
import { Request } from 'express';

@Injectable()
export class CandidateService {

  constructor(
    @InjectRepository(Candidate)
    private readonly candidateRepository: Repository<Candidate>,
    @InjectRepository(Register)
    private readonly registerRepository: Repository<Register>
  ){}

  async create(createCandidateDto: CreateCandidateDto): Promise<Register>  {
    const alreadyExist = await this.candidateRepository.exist({
      where: {
          email: createCandidateDto.email,
      },
    })

    if(alreadyExist) {
      throw new HttpException('Candidate already exist', HttpStatus.CONFLICT);
    }

    const candidate = await this.createCandidate(createCandidateDto)

    return await this.registerCandidate(candidate)
  }

  private createCandidate(createCandidateDto: CreateCandidateDto) {
    const candidate = this.candidateRepository.create({
      ...createCandidateDto,
    });
    
    return this.candidateRepository.save(candidate);
  }

  private async registerCandidate(candidate: any) {
    const register = this.registerRepository.create({
      candidate: candidate,
      status: "Aguardando"
    });

    return this.registerRepository.save(register);
  }

  public async findAll(request: Request): Promise<Candidate[]>  {

    if(request.query.email) {
      return await this.candidateRepository.find({
        where: {
            email: request.query.email as string,
        },
      })
    }

    const candidates = await this.candidateRepository.find();

    const arr = candidates.map((candidate: any) => {
      const { generateId, ...props } = candidate;


      return {
          ...props,
          listOfSkills: JSON.parse(props.listOfSkills)
        }
      }
    );

    return arr;
  }

  async findOne(id: string): Promise<Candidate> {
    const candidate = await this.candidateRepository.findOneByOrFail({
          id: id,
      })

    return candidate;
  }

  async update(id: string, updateCandidateDto: UpdateCandidateDto)  {

    const candidate = await this.candidateRepository.update(id, {
      ...updateCandidateDto
    });

    return candidate;
  }

  async remove(id: string) {
    const candidate = await this.candidateRepository.delete(id);

    return candidate;
  }
}
