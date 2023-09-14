import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Candidate } from './entities/candidate.entity';
import { Request } from 'express';

@ApiTags('Candidatos')
@Controller('candidate')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @ApiOkResponse({
    description: 'Create candidate',
    type: Candidate,
    isArray: false
  })
  @Post()
  create(@Body() createCandidateDto: CreateCandidateDto) {
    return this.candidateService.create(createCandidateDto);
  }

  @Get()
  findAll(
    @Req() request: Request
  ) {
    return this.candidateService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidateService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCandidateDto: UpdateCandidateDto) {
    return this.candidateService.update(id, updateCandidateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidateService.remove(id);
  }
}
