import { 
    IsString, 
    IsNumberString,
    IsEmail, 
    IsPhoneNumber, 
    IsDateString,
    IsIn,
    IsArray
} from "class-validator";
import { ISkill } from "../interfaces/skills";

const schoolings = ["Analfabeto" , "Fundamental Completo" , "Médio Incompleto" , "Médio Completo" , "Superior Completo" , "Superior Incompleto" , "Mestrado" , "Doutorado" , "Ignorado"]

export class CreateCandidateDto {
    @IsString()
    name: string;
    
    @IsNumberString()
    document: string;
    
    @IsDateString()
    dateOfBirth: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber("BR")
    phone: string;

    @IsIn(schoolings)
    schooling: "Analfabeto" | "Fundamental Completo" | "Médio Incompleto" | "Médio Completo" | "Superior Completo" | "Superior Incompleto" | "Mestrado" | "Doutorado" | "Ignorado"

    @IsString()
    function: string;

    @IsArray()
    listOfSkills: ISkill[];
}
