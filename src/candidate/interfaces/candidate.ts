import { ISkill } from "./skills";

export interface ICandidate {
  id: string;

  name: string;

  document: number;

  dateOfBirth: string;

  function: string;

  listSkills: ISkill[]

  email: string;

  phone: string;

  schooling: "Analfabeto" | "Fundamental Completo" | "Médio Incompleto" | "Médio Completo" | "Superior Completo" | "Superior Incompleto" | "Mestrado" | "Doutorado" | "Ignorado"
}
