export type TCandidate = {
    id: number;

    name: string;
    
    document: string;
    
    dateOfBirth: string;

    email: string;

    phone: string;

    schooling: "Analfabeto" | "Fundamental Completo" | "Médio Incompleto" | "Médio Completo" | "Superior Completo" | "Superior Incompleto" | "Mestrado" | "Doutorado" | "Ignorado"
}