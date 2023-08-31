import { IsObject } from "class-validator";
import { TCandidate } from "src/candidate/type/candidate";
import { Type } from 'class-transformer';
import { CreateCandidateDto } from "src/candidate/dto/create-candidate.dto";

export class CreateRegisterDto {
    
    @IsObject()
    @Type(() => CreateCandidateDto)
    candidate: TCandidate;
}
