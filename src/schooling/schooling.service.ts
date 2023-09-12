import { Injectable } from '@nestjs/common';

@Injectable()
export class SchoolingService {

  findAll() {
    return [
      "Analfabeto", 
      "Fundamental Completo", 
      "Médio Incompleto", 
      "Médio Completo", 
      "Superior Completo", 
      "Superior Incompleto", 
      "Mestrado", 
      "Doutorado",
      "Ignorado"
    ];
  }

}
