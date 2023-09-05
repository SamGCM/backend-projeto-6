import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { Register } from './entities/register.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterService {

  constructor(
    @InjectRepository(Register)
    private readonly registerRepository: Repository<Register>
  ){}

  create(createRegisterDto: CreateRegisterDto) {
    const register = this.registerRepository.create({
      ...createRegisterDto,
      status: "Aguardando"
    });

    return this.registerRepository.save(register);
  }

  async findAll() {
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

    const register = await this.registerRepository.update(id, updateRegisterDto)

    return  register;
  }

  async remove(id: string) {
    const register = await this.registerRepository.delete(id);

    return register;
  }
}
