import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('candidates')
export class Candidate {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    document: string;
    
    @Column()
    dateOfBirth: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    schooling: "Analfabeto" | "Fundamental Completo" | "Médio Incompleto" | "Médio Completo" | "Superior Completo" | "Superior Incompleto" | "Mestrado" | "Doutorado" | "Ignorado"
}
