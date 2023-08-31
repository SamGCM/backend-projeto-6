import { 
    IsString, 
    IsNumberString,
    IsEmail, 
    IsPhoneNumber, 
    IsDateString,
    IsIn
} from "class-validator";

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
}
