import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { Register } from './entities/register.entity';
import { Repository } from 'typeorm';
import { Request } from 'express';

@Injectable()
export class RegisterService {

  constructor(
    @InjectRepository(Register)
    private readonly registerRepository: Repository<Register>
  ){}

  create(createRegisterDto: CreateRegisterDto) {

    const alreadyExist = this.registerRepository.find({
      where: {
          candidate: {
            email: createRegisterDto.candidate.email
          }
      },
    })

    if(alreadyExist) {
      throw new HttpException('Candidate already exist', HttpStatus.CONFLICT);
    }

    const register = this.registerRepository.create({
      ...createRegisterDto,
      status: "Aguardando"
    });

    return this.registerRepository.save(register);
  }

  async findAll(request: Request) {

    if(request.query.email) {
      return await this.registerRepository.find({
        relations: ['candidate'],
        where: {
            candidate: {
              email: request.query.email as string,
            }
        },
      })
    }

    return await this.registerRepository.find({
      relations: ['candidate']
    });
  }

  async findOne(id: string) {
    const register = await this.registerRepository.findOne({
      where: {id: id}, 
      relations: ['candidate']
    })

    return register;
  }

  async update(id: string, updateRegisterDto: UpdateRegisterDto) {

    await this.registerRepository.update(id, updateRegisterDto)

    const register = await this.registerRepository.findOne({
      where: {id: id}, 
      relations: ['candidate']
    })

    return register;
  }

  async remove(id: string) {
    const register = await this.registerRepository.delete(id);

    return register;
  }
}
