import { ICandidateSchoolingChart } from "../interface/chart";

export const generateSchoolingChart = (
    objSchooling: ICandidateSchoolingChart, 
    value: "Analfabeto" | "Fundamental Completo" | "Médio Incompleto" | "Médio Completo" | "Superior Completo" | "Superior Incompleto" | "Mestrado" | "Doutorado" | "Ignorado"
) => {
    switch (value) {
        case "Superior Completo":
            objSchooling.SuperiorCompleto++
            break;
        
        case "Analfabeto":
            objSchooling.Analfabeto++
            break;
    
        case "Doutorado":
            objSchooling.Doutorado++
            break;

        case "Fundamental Completo":
            objSchooling.FundamentalCompleto++
            break;

        case "Ignorado":
            objSchooling.Ignorado++
            break;

        case "Mestrado":
            objSchooling.Mestrado++
            break;

        case "Médio Completo":
            objSchooling.MedioCompleto++
            break;

        case "Médio Incompleto":
            objSchooling.MedioIncompleto++
            break;

        case "Superior Incompleto":
            objSchooling.SuperiorIncompleto++
            break;
            
        default:
            break;
    }
    
    return objSchooling;
}