import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisterDto } from './create-register.dto';
import { 
    IsIn
} from "class-validator";

const STATUS = ["Aguardando", "Aprovado", "Reprovado"]

export class UpdateRegisterDto extends PartialType(CreateRegisterDto) {
    @IsIn(STATUS)
    status: "Aguardando" | "Aprovado" | "Reprovado";
}
